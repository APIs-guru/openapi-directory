from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetArtifactRuleConfigRuleEnum(str, Enum):
    VALIDITY = "VALIDITY"
    COMPATIBILITY = "COMPATIBILITY"


@dataclass
class GetArtifactRuleConfigPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    rule: GetArtifactRuleConfigRuleEnum = field(metadata={'path_param': { 'field_name': 'rule', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArtifactRuleConfigRequest:
    path_params: GetArtifactRuleConfigPathParams = field()
    

@dataclass
class GetArtifactRuleConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    rule: Optional[shared.Rule] = field(default=None)
    
