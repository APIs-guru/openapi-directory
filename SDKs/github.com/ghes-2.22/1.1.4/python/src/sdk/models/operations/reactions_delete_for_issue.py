from dataclasses import dataclass, field



@dataclass
class ReactionsDeleteForIssuePathParams:
    issue_number: int = field(default=None, metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    reaction_id: int = field(default=None, metadata={'path_param': { 'field_name': 'reaction_id', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReactionsDeleteForIssueRequest:
    path_params: ReactionsDeleteForIssuePathParams = field(default=None)
    

@dataclass
class ReactionsDeleteForIssueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
