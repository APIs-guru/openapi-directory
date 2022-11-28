from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TablesModelColumnInfo:
    r"""TablesModelColumnInfo
    An information specific to given column and Tables Model, in context of the Model and the predictions created by it.
    """
    
    column_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnDisplayName') }})
    column_spec_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnSpecName') }})
    feature_importance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featureImportance') }})
    
