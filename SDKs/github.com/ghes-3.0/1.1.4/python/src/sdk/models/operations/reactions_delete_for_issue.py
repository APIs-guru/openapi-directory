from dataclasses import dataclass, field



@dataclass
class ReactionsDeleteForIssuePathParams:
    issue_number: int = field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    reaction_id: int = field(metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsDeleteForIssueRequest:
    path_params: ReactionsDeleteForIssuePathParams = field()
    

@dataclass
class ReactionsDeleteForIssueResponse:
    content_type: str = field()
    status_code: int = field()
    
