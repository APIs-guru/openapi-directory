from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAccountByIDPathParams:
    ican: int = field(metadata={'path_param': { 'field_name': 'ican', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccountByIDRequest:
    path_params: GetAccountByIDPathParams = field()
    

@dataclass
class GetAccountByIDResponse:
    content_type: str = field()
    status_code: int = field()
    oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items: Optional[shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItems] = field(default=None)
    
