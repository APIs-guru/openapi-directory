from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnvironmentApprovalsEnvironments:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
class EnvironmentApprovalsStateEnum(str, Enum):
    APPROVED = "approved"
    REJECTED = "rejected"


@dataclass_json
@dataclass
class EnvironmentApprovals:
    r"""EnvironmentApprovals
    An entry in the reviews log for environment deployments
    """
    
    comment: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    environments: List[EnvironmentApprovalsEnvironments] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environments') }})
    state: EnvironmentApprovalsStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    user: SimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
