from dataclasses import dataclass, field



@dataclass
class ReactionsDeletePathParams:
    reaction_id: int = field(metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsDeleteHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsDeleteRequest:
    headers: ReactionsDeleteHeaders = field()
    path_params: ReactionsDeletePathParams = field()
    

@dataclass
class ReactionsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
