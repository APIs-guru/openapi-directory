from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class CompanyIDDatasetDatasetEnum(str, Enum):
    UNKNOWN = ""
    MINI = "mini"
    MASTER = "master"
    FULL = "full"
    REFRESH = "refresh"


@dataclass
class CompanyIDDatasetPathParams:
    dataset: CompanyIDDatasetDatasetEnum = field(default=None, metadata={'path_param': { 'field_name': 'dataset', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class CompanyIDDatasetLangEnum(str, Enum):
    UNKNOWN = ""
    EN = "EN"
    ES = "ES"
    FR = "FR"


@dataclass
class CompanyIDDatasetQueryParams:
    check_stock_listing: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'check_stock_listing', 'style': 'form', 'explode': True }})
    lang: Optional[CompanyIDDatasetLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class CompanyIDDatasetSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyIDDatasetRequest:
    path_params: CompanyIDDatasetPathParams = field(default=None)
    query_params: CompanyIDDatasetQueryParams = field(default=None)
    security: CompanyIDDatasetSecurity = field(default=None)
    

@dataclass
class CompanyIDDatasetResponse:
    company_id_dataset_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    oneapi_1v1_1company_1deepsearch_1lei_1_percent_7_bnumber_percent_7_d_get_responses_200_content_application_1json_schema_properties_company: Optional[Any] = field(default=None)
    
