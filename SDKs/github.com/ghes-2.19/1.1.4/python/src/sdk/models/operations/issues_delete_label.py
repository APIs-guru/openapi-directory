from dataclasses import dataclass, field



@dataclass
class IssuesDeleteLabelPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class IssuesDeleteLabelRequest:
    path_params: IssuesDeleteLabelPathParams = field()
    

@dataclass
class IssuesDeleteLabelResponse:
    content_type: str = field()
    status_code: int = field()
    
