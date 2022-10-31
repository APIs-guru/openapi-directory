from dataclasses import dataclass, field



@dataclass
class ReactionsDeletePathParams:
    reaction_id: int = field(default=None, metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsDeleteHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsDeleteRequest:
    path_params: ReactionsDeletePathParams = field(default=None)
    headers: ReactionsDeleteHeaders = field(default=None)
    

@dataclass
class ReactionsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
