from dataclasses import dataclass, field



@dataclass
class Destiny2GetDestinyEntityDefinitionPathParams:
    entity_type: str = field(default=None, metadata={'path_param': { 'field_name': 'entityType', 'style': 'simple', 'explode': False }})
    hash_identifier: int = field(default=None, metadata={'path_param': { 'field_name': 'hashIdentifier', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetDestinyEntityDefinitionRequest:
    path_params: Destiny2GetDestinyEntityDefinitionPathParams = field(default=None)
    

@dataclass
class Destiny2GetDestinyEntityDefinitionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
