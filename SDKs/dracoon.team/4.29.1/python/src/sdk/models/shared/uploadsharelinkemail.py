from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UploadShareLinkEmail:
    r"""UploadShareLinkEmail
    Request model for sending an email of an Upload Share link
    """
    
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    recipients: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    receiver_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiverLanguage') }})
    
