from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class DeleteArtifactRuleRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclass
class DeleteArtifactRulePathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    rule: DeleteArtifactRuleRuleEnum = field(metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteArtifactRuleRequest:
    path_params: DeleteArtifactRulePathParams = field()
    

@dataclass
class DeleteArtifactRuleResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
