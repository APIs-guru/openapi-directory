from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class UpdateMandateAliasPathParams:
    mandate_uuid: str = field(metadata={'path_param': { 'field_name': 'mandateUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMandateAliasRequest:
    path_params: UpdateMandateAliasPathParams = field()
    

@dataclass
class UpdateMandateAliasResponse:
    content_type: str = field()
    status_code: int = field()
    
