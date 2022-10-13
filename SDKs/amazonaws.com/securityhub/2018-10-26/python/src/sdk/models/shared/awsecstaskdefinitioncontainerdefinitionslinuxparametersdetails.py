from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsecstaskdefinitioncontainerdefinitionslinuxparameterscapabilitiesdetails
from . import awsecstaskdefinitioncontainerdefinitionslinuxparametersdevicesdetails
from . import awsecstaskdefinitioncontainerdefinitionslinuxparameterstmpfsdetails


@dataclass_json
@dataclass
class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails:
    capabilities: Optional[awsecstaskdefinitioncontainerdefinitionslinuxparameterscapabilitiesdetails.AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Capabilities' }})
    devices: Optional[List[awsecstaskdefinitioncontainerdefinitionslinuxparametersdevicesdetails.AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Devices' }})
    init_process_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InitProcessEnabled' }})
    max_swap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxSwap' }})
    shared_memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedMemorySize' }})
    swappiness: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Swappiness' }})
    tmpfs: Optional[List[awsecstaskdefinitioncontainerdefinitionslinuxparameterstmpfsdetails.AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tmpfs' }})
    
