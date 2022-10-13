from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deployment_branch_policy
from . import simple_user
from . import team_simple
from . import deployment_reviewer_type_enum


@dataclass_json
@dataclass
class EnvironmentProtectionRules1:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    wait_timer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wait_timer' }})
    

@dataclass_json
@dataclass
class EnvironmentProtectionRules2Reviewers:
    reviewer: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewer' }})
    type: Optional[deployment_reviewer_type_enum.DeploymentReviewerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class EnvironmentProtectionRules2:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    reviewers: Optional[List[EnvironmentProtectionRules2Reviewers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewers' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class EnvironmentProtectionRules3:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class Environment:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_branch_policy: Optional[deployment_branch_policy.DeploymentBranchPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployment_branch_policy' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    protection_rules: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protection_rules' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
