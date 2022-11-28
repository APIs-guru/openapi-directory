from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AttributesResource:
    r"""AttributesResource
    Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.
    """
    
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationId') }})
    attribute_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeType') }})
    attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    
