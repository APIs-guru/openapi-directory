from dataclasses import dataclass, field



@dataclass
class PostUsersIDResendWelcomeEmailPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersIDResendWelcomeEmailRequest:
    path_params: PostUsersIDResendWelcomeEmailPathParams = field(default=None)
    

@dataclass
class PostUsersIDResendWelcomeEmailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
