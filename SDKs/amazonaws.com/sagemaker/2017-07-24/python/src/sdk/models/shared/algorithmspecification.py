from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlgorithmSpecification:
    r"""AlgorithmSpecification
    <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html\">Algorithms</a>. For information about using your own algorithms, see <a href=\"https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html\">Using Your Own Algorithms with Amazon SageMaker</a>. </p>
    """
    
    training_input_mode: TrainingInputModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingInputMode') }})
    algorithm_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmName') }})
    enable_sage_maker_metrics_time_series: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableSageMakerMetricsTimeSeries') }})
    metric_definitions: Optional[List[MetricDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricDefinitions') }})
    training_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingImage') }})
    
