from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import simple_user
from . import team_simple
from . import deployment_reviewer_type_enum


@dataclass_json
@dataclass
class PendingDeploymentEnvironment:
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class PendingDeploymentReviewers:
    reviewer: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewer' }})
    type: Optional[deployment_reviewer_type_enum.DeploymentReviewerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PendingDeployment:
    current_user_can_approve: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_can_approve' }})
    environment: PendingDeploymentEnvironment = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    reviewers: List[PendingDeploymentReviewers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewers' }})
    wait_timer: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wait_timer' }})
    wait_timer_started_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wait_timer_started_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
