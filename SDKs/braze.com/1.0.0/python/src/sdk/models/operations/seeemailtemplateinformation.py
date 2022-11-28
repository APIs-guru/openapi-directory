from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SeeEmailTemplateInformationQueryParams:
    email_template_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email_template_id', 'style': 'form', 'explode': True }})
    

@dataclass
class SeeEmailTemplateInformationRequest:
    query_params: SeeEmailTemplateInformationQueryParams = field()
    

@dataclass
class SeeEmailTemplateInformationResponse:
    content_type: str = field()
    status_code: int = field()
    
