from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResponseCard:
    r"""ResponseCard
    If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent).
    """
    
    content_type: Optional[ContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    generic_attachments: Optional[List[GenericAttachment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genericAttachments') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
