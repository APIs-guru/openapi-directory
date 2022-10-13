from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GetLatestTotalsFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetLatestTotalsQueryParams:
    format: Optional[GetLatestTotalsFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLatestTotalsRequest:
    query_params: GetLatestTotalsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLatestTotals200ApplicationJSON:
    confirmed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confirmed' }})
    critical: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'critical' }})
    deaths: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deaths' }})
    last_change: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastChange', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recovered: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recovered' }})
    

@dataclass
class GetLatestTotalsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_latest_totals_200_application_json_objects: Optional[List[GetLatestTotals200ApplicationJSON]] = field(default=None)
    
