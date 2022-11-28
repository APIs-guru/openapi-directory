from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportWorkspaceImageRequest:
    ec2_image_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ec2ImageId') }})
    image_description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageDescription') }})
    image_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageName') }})
    ingestion_process: WorkspaceImageIngestionProcessEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IngestionProcess') }})
    applications: Optional[List[ApplicationEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Applications') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
