from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class Message:
    r"""Message
    An Amazon SQS message.
    """
    
    attributes: Optional[dict[str, str]] = field(default=None)
    body: Optional[str] = field(default=None)
    md5_of_body: Optional[str] = field(default=None)
    md5_of_message_attributes: Optional[str] = field(default=None)
    message_attributes: Optional[dict[str, MessageAttributeValue]] = field(default=None)
    message_id: Optional[str] = field(default=None)
    receipt_handle: Optional[str] = field(default=None)
    
