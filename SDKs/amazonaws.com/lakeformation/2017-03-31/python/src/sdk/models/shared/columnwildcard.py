from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ColumnWildcard:
    r"""ColumnWildcard
    A wildcard object, consisting of an optional list of excluded column names or indexes.
    """
    
    excluded_column_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludedColumnNames') }})
    
