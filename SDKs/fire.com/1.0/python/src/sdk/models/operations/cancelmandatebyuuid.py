from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class CancelMandateByUUIDPathParams:
    mandate_uuid: str = field(metadata={'path_param': { 'field_name': 'mandateUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelMandateByUUIDRequest:
    path_params: CancelMandateByUUIDPathParams = field()
    

@dataclass
class CancelMandateByUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    
