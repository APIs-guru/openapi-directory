from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TablesModelMetadata:
    r"""TablesModelMetadata
    Model metadata specific to AutoML Tables.
    """
    
    disable_early_stopping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableEarlyStopping') }})
    input_feature_column_specs: Optional[List[ColumnSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputFeatureColumnSpecs') }})
    optimization_objective: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizationObjective') }})
    optimization_objective_precision_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizationObjectivePrecisionValue') }})
    optimization_objective_recall_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizationObjectiveRecallValue') }})
    tables_model_column_info: Optional[List[TablesModelColumnInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tablesModelColumnInfo') }})
    target_column_spec: Optional[ColumnSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetColumnSpec') }})
    train_budget_milli_node_hours: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainBudgetMilliNodeHours') }})
    train_cost_milli_node_hours: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainCostMilliNodeHours') }})
    
