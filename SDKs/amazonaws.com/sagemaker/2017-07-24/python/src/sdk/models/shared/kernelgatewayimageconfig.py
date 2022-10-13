from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filesystemconfig
from . import kernelspec


@dataclass_json
@dataclass
class KernelGatewayImageConfig:
    file_system_config: Optional[filesystemconfig.FileSystemConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemConfig' }})
    kernel_specs: List[kernelspec.KernelSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KernelSpecs' }})
    
