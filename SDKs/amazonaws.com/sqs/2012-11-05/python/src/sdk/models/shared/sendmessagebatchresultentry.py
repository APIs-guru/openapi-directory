from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SendMessageBatchResultEntry:
    r"""SendMessageBatchResultEntry
    Encloses a <code>MessageId</code> for a successfully-enqueued message in a <code> <a>SendMessageBatch</a>.</code> 
    """
    
    id: str = field()
    md5_of_message_body: str = field()
    message_id: str = field()
    md5_of_message_attributes: Optional[str] = field(default=None)
    md5_of_message_system_attributes: Optional[str] = field(default=None)
    sequence_number: Optional[str] = field(default=None)
    
