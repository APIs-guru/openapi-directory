from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import provisioning_enum
from . import tag


@dataclass_json
@dataclass
class CreateServiceTemplateInput:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionKey' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pipeline_provisioning: Optional[provisioning_enum.ProvisioningEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pipelineProvisioning' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
