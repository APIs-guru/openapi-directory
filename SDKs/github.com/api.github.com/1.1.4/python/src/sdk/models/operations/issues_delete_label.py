from dataclasses import dataclass, field



@dataclass
class IssuesDeleteLabelPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesDeleteLabelRequest:
    path_params: IssuesDeleteLabelPathParams = field(default=None)
    

@dataclass
class IssuesDeleteLabelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
