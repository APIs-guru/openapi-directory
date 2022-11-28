from dataclasses import dataclass, field
from typing import List
from . import *


@dataclass
class DeleteMessageBatchResult:
    r"""DeleteMessageBatchResult
    For each message in the batch, the response contains a <code> <a>DeleteMessageBatchResultEntry</a> </code> tag if the message is deleted or a <code> <a>BatchResultErrorEntry</a> </code> tag if the message can't be deleted.
    """
    
    failed: List[BatchResultErrorEntry] = field()
    successful: List[DeleteMessageBatchResultEntry] = field()
    
