from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import imageconfig
from . import containermode_enum
from . import multimodelconfig


@dataclass_json
@dataclass
class ContainerDefinition:
    container_hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerHostname' }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Image' }})
    image_config: Optional[imageconfig.ImageConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageConfig' }})
    mode: Optional[containermode_enum.ContainerModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    model_data_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelDataUrl' }})
    model_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageName' }})
    multi_model_config: Optional[multimodelconfig.MultiModelConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MultiModelConfig' }})
    
