from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SendMessageResult:
    r"""SendMessageResult
    The <code>MD5OfMessageBody</code> and <code>MessageId</code> elements.
    """
    
    md5_of_message_attributes: Optional[str] = field(default=None)
    md5_of_message_body: Optional[str] = field(default=None)
    md5_of_message_system_attributes: Optional[str] = field(default=None)
    message_id: Optional[str] = field(default=None)
    sequence_number: Optional[str] = field(default=None)
    
