from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetryStrategy:
    r"""RetryStrategy
    The retry strategy to use when a training job fails due to an <code>InternalServerError</code>. <code>RetryStrategy</code> is specified as part of the <code>CreateTrainingJob</code> and <code>CreateHyperParameterTuningJob</code> requests. You can add the <code>StoppingCondition</code> parameter to the request to limit the training time for the complete job.
    """
    
    maximum_retry_attempts: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRetryAttempts') }})
    
