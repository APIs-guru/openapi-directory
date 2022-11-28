from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Api2ControllersWebAPIReviewControllerReviewRequest:
    r"""Api2ControllersWebAPIReviewControllerReviewRequest
    Payload for reviews
    """
    
    active_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveMinutes') }, 'form': { 'field_name': 'ActiveMinutes' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comment') }, 'form': { 'field_name': 'Comment' }})
    make_again: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MakeAgain') }, 'form': { 'field_name': 'MakeAgain' }})
    star_rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StarRating') }, 'form': { 'field_name': 'StarRating' }})
    total_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalMinutes') }, 'form': { 'field_name': 'TotalMinutes' }})
    
