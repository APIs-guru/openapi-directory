from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RemoveCustomFieldSettingRequest:
    custom_field: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_field') }})
    
