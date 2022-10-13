from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LabelingJobStoppingConditions:
    max_human_labeled_object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxHumanLabeledObjectCount' }})
    max_percentage_of_input_dataset_labeled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxPercentageOfInputDatasetLabeled' }})
    
