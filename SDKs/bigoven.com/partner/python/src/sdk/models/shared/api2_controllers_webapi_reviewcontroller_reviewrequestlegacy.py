from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Api2ControllersWebAPIReviewControllerReviewRequestLegacy:
    r"""Api2ControllersWebAPIReviewControllerReviewRequestLegacy
    Legacy -- This object here is deprecated. Please use the new \"ReviewRequest\" structure for all future development
    """
    
    active_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveMinutes') }, 'form': { 'field_name': 'ActiveMinutes' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Comment') }, 'form': { 'field_name': 'Comment' }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GUID') }, 'form': { 'field_name': 'GUID' }})
    make_again: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MakeAgain') }, 'form': { 'field_name': 'MakeAgain' }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentID') }, 'form': { 'field_name': 'ParentID' }})
    star_rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StarRating') }, 'form': { 'field_name': 'StarRating' }})
    total_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalMinutes') }, 'form': { 'field_name': 'TotalMinutes' }})
    
