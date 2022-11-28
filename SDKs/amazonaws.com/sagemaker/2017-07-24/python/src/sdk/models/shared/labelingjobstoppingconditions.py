from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LabelingJobStoppingConditions:
    r"""LabelingJobStoppingConditions
    <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.</p> <note> <p>Labeling jobs fail after 30 days with an appropriate client error message.</p> </note>
    """
    
    max_human_labeled_object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxHumanLabeledObjectCount') }})
    max_percentage_of_input_dataset_labeled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxPercentageOfInputDatasetLabeled') }})
    
