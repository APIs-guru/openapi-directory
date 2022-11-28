from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class MessageAttributeValue:
    r"""MessageAttributeValue
    <p>The user-specified message attribute value. For string data types, the <code>Value</code> attribute has the same restrictions on the content as the message body. For more information, see <code> <a>SendMessage</a>.</code> </p> <p> <code>Name</code>, <code>type</code>, <code>value</code> and the message body must not be empty or null. All parts of the message attribute, including <code>Name</code>, <code>Type</code>, and <code>Value</code>, are part of the message size restriction (256 KB or 262,144 bytes).</p>
    """
    
    data_type: str = field()
    binary_list_values: Optional[List[str]] = field(default=None)
    binary_value: Optional[str] = field(default=None)
    string_list_values: Optional[List[str]] = field(default=None)
    string_value: Optional[str] = field(default=None)
    
