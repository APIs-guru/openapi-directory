from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetMandatePathParams:
    mandate_uuid: str = field(metadata={'path_param': { 'field_name': 'mandateUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMandateRequest:
    path_params: GetMandatePathParams = field()
    

@dataclass
class GetMandateResponse:
    content_type: str = field()
    status_code: int = field()
    onemandates_get_responses_200_content_application_1json_schema_properties_mandates_items: Optional[shared.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems] = field(default=None)
    
