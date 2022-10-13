from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsLinks:
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
class Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum(str, Enum):
    OK = "ok"
    NOT_FOUND = "not_found"
    ASSIGNED = "assigned"
    ALREADY_ASSIGNED = "already_assigned"
    SERVICE_DOWN = "service_down"


@dataclass_json
@dataclass
class Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems:
    assigned_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assigned_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    links: Optional[Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    status: Optional[Onev21projects1Percent7BprojectIDPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItemsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    urn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urn' }})
    
