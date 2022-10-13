from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum(str, Enum):
    DROPLET = "droplet"
    K8S = "k8s"
    IP_ADDR = "ip_addr"
    TAG = "tag"
    APP = "app"


@dataclass_json
@dataclass
class Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItems:
    cluster_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster_uuid' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
