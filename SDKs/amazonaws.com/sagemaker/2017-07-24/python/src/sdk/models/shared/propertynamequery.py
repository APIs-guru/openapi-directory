from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PropertyNameQuery:
    r"""PropertyNameQuery
    Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property names that begin with the specified text.
    """
    
    property_name_hint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PropertyNameHint') }})
    
