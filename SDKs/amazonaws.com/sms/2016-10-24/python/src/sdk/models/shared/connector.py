from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import connectorcapability_enum
from . import connectorstatus_enum
from . import vmmanagertype_enum


@dataclass_json
@dataclass
class Connector:
    associated_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    capability_list: Optional[List[connectorcapability_enum.ConnectorCapabilityEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilityList' }})
    connector_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorId' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macAddress' }})
    status: Optional[connectorstatus_enum.ConnectorStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    vm_manager_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmManagerId' }})
    vm_manager_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmManagerName' }})
    vm_manager_type: Optional[vmmanagertype_enum.VMManagerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmManagerType' }})
    
