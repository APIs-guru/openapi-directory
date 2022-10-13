from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import correlationstats


@dataclass_json
@dataclass
class TablesDatasetMetadata:
    ml_use_column_spec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mlUseColumnSpecId' }})
    primary_table_spec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryTableSpecId' }})
    stats_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statsUpdateTime' }})
    target_column_correlations: Optional[dict[str, correlationstats.CorrelationStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetColumnCorrelations' }})
    target_column_spec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetColumnSpecId' }})
    weight_column_spec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weightColumnSpecId' }})
    
