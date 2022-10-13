from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import destination
from . import replacementemailcontent
from . import messagetag


@dataclass_json
@dataclass
class BulkEmailEntry:
    destination: destination.Destination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    replacement_email_content: Optional[replacementemailcontent.ReplacementEmailContent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplacementEmailContent' }})
    replacement_tags: Optional[List[messagetag.MessageTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplacementTags' }})
    
