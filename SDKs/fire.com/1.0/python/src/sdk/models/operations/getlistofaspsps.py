from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetListOfAspspsQueryParams:
    currency: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListOfAspspsRequest:
    query_params: GetListOfAspspsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetListOfAspspsAspspsAspspCountry:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    

@dataclass_json
@dataclass
class GetListOfAspspsAspspsAspsp:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    aspsp_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspspUuid' }})
    country: Optional[GetListOfAspspsAspspsAspspCountry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    currency: Optional[shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateCreated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logoUrl' }})
    

@dataclass_json
@dataclass
class GetListOfAspspsAspsps:
    aspsps: Optional[List[GetListOfAspspsAspspsAspsp]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspsps' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class GetListOfAspspsResponse:
    aspsps: Optional[GetListOfAspspsAspsps] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
