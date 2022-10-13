from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PositionGroupRecruitingRating:
    average_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageRating' }})
    average_stars: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageStars' }})
    commits: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commits' }})
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conference' }})
    position_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionGroup' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    total_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalRating' }})
    
