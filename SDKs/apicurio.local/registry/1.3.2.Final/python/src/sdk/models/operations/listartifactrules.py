from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ListArtifactRulesPathParams:
    artifact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListArtifactRulesRequest:
    path_params: ListArtifactRulesPathParams = field(default=None)
    

@dataclass
class ListArtifactRulesResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    rule_types: Optional[List[shared.RuleTypeEnum]] = field(default=None)
    status_code: int = field(default=None)
    
