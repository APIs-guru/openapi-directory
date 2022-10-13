from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional


@dataclass
class CompanyIDSuperPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class CompanyIDSuperLangEnum(str, Enum):
    UNKNOWN = ""
    OG = "OG"
    EN = "EN"


@dataclass
class CompanyIDSuperQueryParams:
    lang: Optional[CompanyIDSuperLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class CompanyIDSuperSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyIDSuperRequest:
    path_params: CompanyIDSuperPathParams = field(default=None)
    query_params: CompanyIDSuperQueryParams = field(default=None)
    security: CompanyIDSuperSecurity = field(default=None)
    

@dataclass
class CompanyIDSuperResponse:
    company_id_super_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_id_super_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
