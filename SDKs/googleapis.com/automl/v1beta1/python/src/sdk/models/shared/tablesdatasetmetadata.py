from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TablesDatasetMetadata:
    r"""TablesDatasetMetadata
    Metadata for a dataset used for AutoML Tables.
    """
    
    ml_use_column_spec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mlUseColumnSpecId') }})
    primary_table_spec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryTableSpecId') }})
    stats_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statsUpdateTime') }})
    target_column_correlations: Optional[dict[str, CorrelationStats]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetColumnCorrelations') }})
    target_column_spec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetColumnSpecId') }})
    weight_column_spec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weightColumnSpecId') }})
    
