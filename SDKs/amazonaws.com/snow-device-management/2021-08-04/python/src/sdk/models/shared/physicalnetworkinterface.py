from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ipaddressassignment_enum
from . import physicalconnectortype_enum


@dataclass_json
@dataclass
class PhysicalNetworkInterface:
    default_gateway: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultGateway' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddress' }})
    ip_address_assignment: Optional[ipaddressassignment_enum.IPAddressAssignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipAddressAssignment' }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macAddress' }})
    netmask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netmask' }})
    physical_connector_type: Optional[physicalconnectortype_enum.PhysicalConnectorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalConnectorType' }})
    physical_network_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalNetworkInterfaceId' }})
    
