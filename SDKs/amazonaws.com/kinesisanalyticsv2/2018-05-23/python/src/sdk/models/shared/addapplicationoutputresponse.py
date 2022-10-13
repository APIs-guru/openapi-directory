from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import outputdescription


@dataclass_json
@dataclass
class AddApplicationOutputResponse:
    application_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationARN' }})
    application_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionId' }})
    output_descriptions: Optional[List[outputdescription.OutputDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDescriptions' }})
    
