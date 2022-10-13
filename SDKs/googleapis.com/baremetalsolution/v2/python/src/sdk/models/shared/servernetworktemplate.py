from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbaremetalsolutionv2servernetworktemplatelogicalinterface


@dataclass_json
@dataclass
class ServerNetworkTemplate:
    applicable_instance_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicableInstanceTypes' }})
    logical_interfaces: Optional[List[googlecloudbaremetalsolutionv2servernetworktemplatelogicalinterface.GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logicalInterfaces' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
