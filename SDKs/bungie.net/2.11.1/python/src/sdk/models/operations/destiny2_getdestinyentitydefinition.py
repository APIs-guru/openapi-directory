from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2GetDestinyEntityDefinitionPathParams:
    entity_type: str = field(metadata={'path_param': { 'field_name': 'entityType', 'style': 'simple', 'explode': False }})
    hash_identifier: int = field(metadata={'path_param': { 'field_name': 'hashIdentifier', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetDestinyEntityDefinitionRequest:
    path_params: Destiny2GetDestinyEntityDefinitionPathParams = field()
    

@dataclass
class Destiny2GetDestinyEntityDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
