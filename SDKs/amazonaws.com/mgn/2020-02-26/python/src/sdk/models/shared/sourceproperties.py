from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cpu
from . import disk
from . import identificationhints
from . import networkinterface
from . import os


@dataclass_json
@dataclass
class SourceProperties:
    cpus: Optional[List[cpu.CPU]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpus' }})
    disks: Optional[List[disk.Disk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disks' }})
    identification_hints: Optional[identificationhints.IdentificationHints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identificationHints' }})
    last_updated_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime' }})
    network_interfaces: Optional[List[networkinterface.NetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInterfaces' }})
    os: Optional[os.Os] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    ram_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ramBytes' }})
    recommended_instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendedInstanceType' }})
    
