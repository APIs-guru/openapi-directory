from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountByIDPathParams:
    ican: int = field(default=None, metadata={'path_param': { 'field_name': 'ican', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountByIDRequest:
    path_params: GetAccountByIDPathParams = field(default=None)
    

@dataclass
class GetAccountByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items: Optional[shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems] = field(default=None)
    
