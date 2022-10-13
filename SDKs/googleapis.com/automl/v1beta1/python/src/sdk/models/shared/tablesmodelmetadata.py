from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import columnspec
from . import tablesmodelcolumninfo
from . import columnspec


@dataclass_json
@dataclass
class TablesModelMetadata:
    disable_early_stopping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableEarlyStopping' }})
    input_feature_column_specs: Optional[List[columnspec.ColumnSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputFeatureColumnSpecs' }})
    optimization_objective: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optimizationObjective' }})
    optimization_objective_precision_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optimizationObjectivePrecisionValue' }})
    optimization_objective_recall_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optimizationObjectiveRecallValue' }})
    tables_model_column_info: Optional[List[tablesmodelcolumninfo.TablesModelColumnInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tablesModelColumnInfo' }})
    target_column_spec: Optional[columnspec.ColumnSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetColumnSpec' }})
    train_budget_milli_node_hours: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainBudgetMilliNodeHours' }})
    train_cost_milli_node_hours: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainCostMilliNodeHours' }})
    
