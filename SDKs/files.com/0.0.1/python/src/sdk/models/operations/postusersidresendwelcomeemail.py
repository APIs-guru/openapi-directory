from dataclasses import dataclass, field



@dataclass
class PostUsersIDResendWelcomeEmailPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUsersIDResendWelcomeEmailRequest:
    path_params: PostUsersIDResendWelcomeEmailPathParams = field()
    

@dataclass
class PostUsersIDResendWelcomeEmailResponse:
    content_type: str = field()
    status_code: int = field()
    
