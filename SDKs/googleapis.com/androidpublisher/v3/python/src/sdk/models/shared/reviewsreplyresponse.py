from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReviewsReplyResponse:
    r"""ReviewsReplyResponse
    Response on status of replying to a review.
    """
    
    result: Optional[ReviewReplyResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
