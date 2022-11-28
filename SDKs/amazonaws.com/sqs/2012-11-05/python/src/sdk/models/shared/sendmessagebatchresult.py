from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class SendMessageBatchResult:
    r"""SendMessageBatchResult
    For each message in the batch, the response contains a <code> <a>SendMessageBatchResultEntry</a> </code> tag if the message succeeds or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message fails.
    """
    
    failed: List[BatchResultErrorEntry] = field()
    successful: List[SendMessageBatchResultEntry] = field()
    
