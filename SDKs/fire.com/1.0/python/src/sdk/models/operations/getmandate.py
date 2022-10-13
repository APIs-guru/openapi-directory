from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMandatePathParams:
    mandate_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'mandateUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMandateRequest:
    path_params: GetMandatePathParams = field(default=None)
    

@dataclass
class GetMandateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    onemandates_get_responses_200_content_application_1json_schema_properties_mandates_items: Optional[shared.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems] = field(default=None)
    
