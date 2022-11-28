from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DestinyEntitiesCharactersDestinyCharacterActivitiesComponent:
    r"""DestinyEntitiesCharactersDestinyCharacterActivitiesComponent
    This component holds activity data for a character. It will tell you about the character's current activity status, as well as activities that are available to the user.
    """
    
    available_activities: Optional[List[DestinyDestinyActivity]] = field(default=None)
    current_activity_hash: Optional[int] = field(default=None)
    current_activity_mode_hash: Optional[int] = field(default=None)
    current_activity_mode_hashes: Optional[List[int]] = field(default=None)
    current_activity_mode_type: Optional[int] = field(default=None)
    current_activity_mode_types: Optional[List[int]] = field(default=None)
    current_playlist_activity_hash: Optional[int] = field(default=None)
    date_activity_started: Optional[datetime] = field(default=None)
    last_completed_story_hash: Optional[int] = field(default=None)
    
