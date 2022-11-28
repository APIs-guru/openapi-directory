from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Review:
    r"""Review
    An Android app review.
    """
    
    author_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorName') }})
    comments: Optional[List[Comment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    review_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewId') }})
    
