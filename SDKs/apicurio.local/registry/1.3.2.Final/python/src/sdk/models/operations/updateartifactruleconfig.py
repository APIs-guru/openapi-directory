from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class UpdateArtifactRuleConfigRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclass
class UpdateArtifactRuleConfigPathParams:
    artifact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    rule: UpdateArtifactRuleConfigRuleEnum = field(default=None, metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateArtifactRuleConfigRequest:
    path_params: UpdateArtifactRuleConfigPathParams = field(default=None)
    request: shared.Rule = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateArtifactRuleConfigResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    rule: Optional[shared.Rule] = field(default=None)
    status_code: int = field(default=None)
    
