from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetQueueURLResult:
    r"""GetQueueURLResult
    For more information, see <a href=\"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-api-responses.html\">Interpreting Responses</a> in the <i>Amazon SQS Developer Guide</i>.
    """
    
    queue_url: Optional[str] = field(default=None)
    
