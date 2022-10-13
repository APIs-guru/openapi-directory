from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Api2ControllersWebAPIReviewControllerReviewRequest:
    active_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveMinutes' }, 'form': { 'field_name': 'ActiveMinutes' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }, 'form': { 'field_name': 'Comment' }})
    make_again: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MakeAgain' }, 'form': { 'field_name': 'MakeAgain' }})
    star_rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StarRating' }, 'form': { 'field_name': 'StarRating' }})
    total_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalMinutes' }, 'form': { 'field_name': 'TotalMinutes' }})
    
