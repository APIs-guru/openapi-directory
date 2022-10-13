from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fleetstatus_enum


@dataclass_json
@dataclass
class DescribeFleetMetadataResponse:
    company_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompanyCode' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    fleet_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetName' }})
    fleet_status: Optional[fleetstatus_enum.FleetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetStatus' }})
    last_updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    optimize_for_end_user_location: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OptimizeForEndUserLocation' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
