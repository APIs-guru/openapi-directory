from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetTrackQueryParams:
    tracking_number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'trackingNumber', 'style': 'form', 'explode': True }})
    
class GetTrackTrackingResponseFeatureGeometryTypeEnum(str, Enum):
    POINT = "Point"
    LINE_STRING = "LineString"
    POLYGON = "Polygon"
    MULTI_POINT = "MultiPoint"
    MULTI_LINE_STRING = "MultiLineString"
    MULTI_POLYGON = "MultiPolygon"


@dataclass_json
@dataclass
class GetTrackTrackingResponseFeatureGeometry:
    r"""GetTrackTrackingResponseFeatureGeometry
    GeoJSon geometry
    http://geojson.org/geojson-spec.html#geometry-objects
    """
    
    coordinates: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    type: GetTrackTrackingResponseFeatureGeometryTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetTrackTrackingResponseFeatureProperties:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class GetTrackTrackingResponseFeatureTypeEnum(str, Enum):
    FEATURE = "Feature"


@dataclass_json
@dataclass
class GetTrackTrackingResponseFeature:
    r"""GetTrackTrackingResponseFeature
    GeoJSon Feature
    https://tools.ietf.org/html/rfc7946#section-3.2
    """
    
    geometry: GetTrackTrackingResponseFeatureGeometry = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('geometry') }})
    properties: GetTrackTrackingResponseFeatureProperties = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    type: GetTrackTrackingResponseFeatureTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    bbox: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bbox') }})
    centerline: Optional[shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOriginPropertiesGeometry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('centerline') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
class GetTrackTrackingResponseTrackingEventV2EventSourceEnum(str, Enum):
    CARRIER = "carrier"
    INTERNAL = "internal"


@dataclass_json
@dataclass
class GetTrackTrackingResponseTrackingEventV2:
    event_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventCategory') }})
    event_category_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventCategoryCode') }})
    event_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_location: Optional[shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventLocation') }})
    event_source: Optional[GetTrackTrackingResponseTrackingEventV2EventSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSource') }})
    event_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventStatus') }})
    

@dataclass_json
@dataclass
class GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetTrackTrackingResponseTrackingNumberV2:
    barcode_scan_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcodeScanValue') }})
    carrier: Optional[GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class GetTrackTrackingResponse:
    destination: Optional[shared.OnetrackGetResponses200ContentApplication1jsonSchemaPropertiesOrigin] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    fdc_order_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fdcOrderId') }})
    first_checked_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstCheckedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_transit_event: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstTransitEvent'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_checked_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastCheckedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    origin: Optional[GetTrackTrackingResponseFeature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_category_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCategoryCode') }})
    status_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusMessage') }})
    tracked_events: Optional[List[GetTrackTrackingResponseTrackingEventV2]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackedEvents') }})
    tracking_number: Optional[GetTrackTrackingResponseTrackingNumberV2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingNumber') }})
    

@dataclass
class GetTrackRequest:
    query_params: GetTrackQueryParams = field()
    

@dataclass
class GetTrackResponse:
    content_type: str = field()
    status_code: int = field()
    tracking_response: Optional[GetTrackTrackingResponse] = field(default=None)
    
