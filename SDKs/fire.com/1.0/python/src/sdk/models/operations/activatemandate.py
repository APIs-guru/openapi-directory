from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class ActivateMandatePathParams:
    mandate_uuid: str = field(metadata={'path_param': { 'field_name': 'mandateUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivateMandateRequest:
    path_params: ActivateMandatePathParams = field()
    

@dataclass
class ActivateMandateResponse:
    content_type: str = field()
    status_code: int = field()
    
