from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DimensionMetadata:
    r"""DimensionMetadata
    Explains a dimension.
    """
    
    api_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiName') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    custom_definition: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDefinition') }})
    deprecated_api_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecatedApiNames') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ui_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uiName') }})
    
