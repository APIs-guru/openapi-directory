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
class EnvironmentProtectionRules1:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    wait_timer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wait_timer') }})
    

@dataclass_json
@dataclass
class EnvironmentProtectionRules2Reviewers:
    reviewer: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewer') }})
    type: Optional[DeploymentReviewerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class EnvironmentProtectionRules2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    reviewers: Optional[List[EnvironmentProtectionRules2Reviewers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewers') }})
    

@dataclass_json
@dataclass
class EnvironmentProtectionRules3:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class Environment:
    r"""Environment
    Details of a deployment environment
    """
    
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    deployment_branch_policy: Optional[DeploymentBranchPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployment_branch_policy') }})
    protection_rules: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection_rules') }})
    
