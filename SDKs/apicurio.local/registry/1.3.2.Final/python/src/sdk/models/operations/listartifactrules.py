from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListArtifactRulesPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListArtifactRulesRequest:
    path_params: ListArtifactRulesPathParams = field()
    

@dataclass
class ListArtifactRulesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    rule_types: Optional[List[shared.RuleTypeEnum]] = field(default=None)
    
