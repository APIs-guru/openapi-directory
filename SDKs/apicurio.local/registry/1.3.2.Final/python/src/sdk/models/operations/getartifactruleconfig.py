from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetArtifactRuleConfigRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclass
class GetArtifactRuleConfigPathParams:
    artifact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    rule: GetArtifactRuleConfigRuleEnum = field(default=None, metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArtifactRuleConfigRequest:
    path_params: GetArtifactRuleConfigPathParams = field(default=None)
    

@dataclass
class GetArtifactRuleConfigResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    rule: Optional[shared.Rule] = field(default=None)
    status_code: int = field(default=None)
    
