from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import application_enum
from . import workspaceimageingestionprocess_enum
from . import tag


@dataclass_json
@dataclass
class ImportWorkspaceImageRequest:
    applications: Optional[List[application_enum.ApplicationEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Applications' }})
    ec2_image_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2ImageId' }})
    image_description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageDescription' }})
    image_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageName' }})
    ingestion_process: workspaceimageingestionprocess_enum.WorkspaceImageIngestionProcessEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IngestionProcess' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
