from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KernelGatewayImageConfig:
    r"""KernelGatewayImageConfig
    The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app.
    """
    
    kernel_specs: List[KernelSpec] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KernelSpecs') }})
    file_system_config: Optional[FileSystemConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystemConfig') }})
    
