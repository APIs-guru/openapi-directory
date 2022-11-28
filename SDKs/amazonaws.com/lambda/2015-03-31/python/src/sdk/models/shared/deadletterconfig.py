from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeadLetterConfig:
    r"""DeadLetterConfig
    The <a href=\"https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq\">dead-letter queue</a> for failed asynchronous invocations.
    """
    
    target_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetArn') }})
    
