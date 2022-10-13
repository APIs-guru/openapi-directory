from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModelPackageContainerDefinition:
    container_hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainerHostname' }})
    environment: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Environment' }})
    image: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Image' }})
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageDigest' }})
    model_data_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelDataUrl' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    
