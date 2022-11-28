from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor:
    r"""DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor
    A shortcut for getting the background color of the user's currently equipped emblem without having to do a DestinyInventoryItemDefinition lookup.
    """
    
    alpha: Optional[str] = field(default=None)
    blue: Optional[str] = field(default=None)
    green: Optional[str] = field(default=None)
    red: Optional[str] = field(default=None)
    

@dataclass
class DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression:
    r"""DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression
    The progression that indicates your character's level. Not their light level, but their character level: you know, the thing you max out a couple hours in and then ignore for the sake of light level.
    """
    
    current_progress: Optional[int] = field(default=None)
    current_reset_count: Optional[int] = field(default=None)
    daily_limit: Optional[int] = field(default=None)
    daily_progress: Optional[int] = field(default=None)
    level: Optional[int] = field(default=None)
    level_cap: Optional[int] = field(default=None)
    next_level_at: Optional[int] = field(default=None)
    progress_to_next_level: Optional[int] = field(default=None)
    progression_hash: Optional[int] = field(default=None)
    reward_item_states: Optional[List[int]] = field(default=None)
    season_resets: Optional[List[DestinyDestinyProgressionResetEntry]] = field(default=None)
    step_index: Optional[int] = field(default=None)
    weekly_limit: Optional[int] = field(default=None)
    weekly_progress: Optional[int] = field(default=None)
    

@dataclass
class DestinyEntitiesCharactersDestinyCharacterComponent:
    r"""DestinyEntitiesCharactersDestinyCharacterComponent
    This component contains base properties of the character. You'll probably want to always request this component, but hey you do you.
    """
    
    base_character_level: Optional[int] = field(default=None)
    character_id: Optional[int] = field(default=None)
    class_hash: Optional[int] = field(default=None)
    class_type: Optional[int] = field(default=None)
    date_last_played: Optional[datetime] = field(default=None)
    emblem_background_path: Optional[str] = field(default=None)
    emblem_color: Optional[DestinyEntitiesCharactersDestinyCharacterComponentEmblemColor] = field(default=None)
    emblem_hash: Optional[int] = field(default=None)
    emblem_path: Optional[str] = field(default=None)
    gender_hash: Optional[int] = field(default=None)
    gender_type: Optional[int] = field(default=None)
    level_progression: Optional[DestinyEntitiesCharactersDestinyCharacterComponentLevelProgression] = field(default=None)
    light: Optional[int] = field(default=None)
    membership_id: Optional[int] = field(default=None)
    membership_type: Optional[int] = field(default=None)
    minutes_played_this_session: Optional[int] = field(default=None)
    minutes_played_total: Optional[int] = field(default=None)
    percent_to_next_level: Optional[float] = field(default=None)
    race_hash: Optional[int] = field(default=None)
    race_type: Optional[int] = field(default=None)
    stats: Optional[dict[str, int]] = field(default=None)
    title_record_hash: Optional[int] = field(default=None)
    
