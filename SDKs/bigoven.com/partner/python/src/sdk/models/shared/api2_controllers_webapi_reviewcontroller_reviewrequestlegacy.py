from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Api2ControllersWebAPIReviewControllerReviewRequestLegacy:
    active_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveMinutes' }, 'form': { 'field_name': 'ActiveMinutes' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }, 'form': { 'field_name': 'Comment' }})
    guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GUID' }, 'form': { 'field_name': 'GUID' }})
    make_again: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MakeAgain' }, 'form': { 'field_name': 'MakeAgain' }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentID' }, 'form': { 'field_name': 'ParentID' }})
    star_rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StarRating' }, 'form': { 'field_name': 'StarRating' }})
    total_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalMinutes' }, 'form': { 'field_name': 'TotalMinutes' }})
    
