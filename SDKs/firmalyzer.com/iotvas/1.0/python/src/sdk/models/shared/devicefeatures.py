from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceFeatures:
    ftp_banner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ftp_banner' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    http_response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http_response' }})
    https_response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'https_response' }})
    nic_mac: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nic_mac' }})
    snmp_sysdescr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snmp_sysdescr' }})
    snmp_sysoid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snmp_sysoid' }})
    telnet_banner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telnet_banner' }})
    upnp_response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upnp_response' }})
    
