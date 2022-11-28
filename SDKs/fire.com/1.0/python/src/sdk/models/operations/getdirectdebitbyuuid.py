from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDirectDebitByUUIDPathParams:
    direct_debit_uuid: str = field(metadata={'path_param': { 'field_name': 'directDebitUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDirectDebitByUUIDRequest:
    path_params: GetDirectDebitByUUIDPathParams = field()
    

@dataclass
class GetDirectDebitByUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    onedirectdebits_get_responses_200_content_application_1json_schema_properties_directdebits_items: Optional[shared.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems] = field(default=None)
    
