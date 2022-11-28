from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PendingDeploymentEnvironment:
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class PendingDeploymentReviewers:
    reviewer: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewer') }})
    type: Optional[DeploymentReviewerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PendingDeployment:
    r"""PendingDeployment
    Details of a deployment that is waiting for protection rules to pass
    """
    
    current_user_can_approve: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_can_approve') }})
    environment: PendingDeploymentEnvironment = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    reviewers: List[PendingDeploymentReviewers] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewers') }})
    wait_timer: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wait_timer') }})
    wait_timer_started_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wait_timer_started_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
