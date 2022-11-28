from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DocumentMetadataResponseInfo:
    r"""DocumentMetadataResponseInfo
    Details about the response to a document review request.
    """
    
    reviewer_response: Optional[List[DocumentReviewerResponseSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewerResponse') }})
    
