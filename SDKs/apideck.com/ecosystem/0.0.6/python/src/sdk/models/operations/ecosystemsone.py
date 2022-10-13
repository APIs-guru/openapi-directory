from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EcosystemsOnePathParams:
    ecosystem_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EcosystemsOneRequest:
    path_params: EcosystemsOnePathParams = field(default=None)
    

@dataclass
class EcosystemsOneResponse:
    content_type: str = field(default=None)
    get_ecosystem_response: Optional[shared.GetEcosystemResponse] = field(default=None)
    status_code: int = field(default=None)
    
