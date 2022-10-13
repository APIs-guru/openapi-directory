from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class DeleteArtifactRuleRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclass
class DeleteArtifactRulePathParams:
    artifact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    rule: DeleteArtifactRuleRuleEnum = field(default=None, metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteArtifactRuleRequest:
    path_params: DeleteArtifactRulePathParams = field(default=None)
    

@dataclass
class DeleteArtifactRuleResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
