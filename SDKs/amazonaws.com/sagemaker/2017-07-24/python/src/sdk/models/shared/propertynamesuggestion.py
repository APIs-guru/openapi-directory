from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PropertyNameSuggestion:
    r"""PropertyNameSuggestion
    A property name returned from a <code>GetSearchSuggestions</code> call that specifies a value in the <code>PropertyNameQuery</code> field.
    """
    
    property_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropertyName') }})
    
