from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inputdescription


@dataclass_json
@dataclass
class AddApplicationInputResponse:
    application_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationARN' }})
    application_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionId' }})
    input_descriptions: Optional[List[inputdescription.InputDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDescriptions' }})
    
