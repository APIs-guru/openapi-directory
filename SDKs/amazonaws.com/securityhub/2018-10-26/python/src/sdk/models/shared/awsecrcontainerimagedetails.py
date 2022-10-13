from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEcrContainerImageDetails:
    architecture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Architecture' }})
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageDigest' }})
    image_published_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImagePublishedAt' }})
    image_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageTags' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistryId' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepositoryName' }})
    
