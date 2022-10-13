from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import collectionconfiguration


@dataclass_json
@dataclass
class DebugHookConfig:
    collection_configurations: Optional[List[collectionconfiguration.CollectionConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionConfigurations' }})
    hook_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HookParameters' }})
    local_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalPath' }})
    s3_output_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3OutputPath' }})
    
