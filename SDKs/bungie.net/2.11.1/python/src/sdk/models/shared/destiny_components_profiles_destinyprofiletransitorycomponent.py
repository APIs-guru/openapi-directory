from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity:
    r"""DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity
    If you are in an activity, this is some transitory info about the activity currently being played.
    """
    
    end_time: Optional[datetime] = field(default=None)
    highest_opposing_faction_score: Optional[float] = field(default=None)
    number_of_opponents: Optional[int] = field(default=None)
    number_of_players: Optional[int] = field(default=None)
    score: Optional[float] = field(default=None)
    start_time: Optional[datetime] = field(default=None)
    

@dataclass
class DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability:
    r"""DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability
    Information about whether and what might prevent you from joining this person on a fireteam.
    """
    
    closed_reasons: Optional[int] = field(default=None)
    open_slots: Optional[int] = field(default=None)
    privacy_setting: Optional[int] = field(default=None)
    

@dataclass
class DestinyComponentsProfilesDestinyProfileTransitoryComponent:
    r"""DestinyComponentsProfilesDestinyProfileTransitoryComponent
    This is an experimental set of data that Bungie considers to be \"transitory\" - information that may be useful for API users, but that is coming from a non-authoritative data source about information that could potentially change at a more frequent pace than Bungie.net will receive updates about it.
    This information is provided exclusively for convenience should any of it be useful to users: we provide no guarantees to the accuracy or timeliness of data that comes from this source. Know that this data can potentially be out-of-date or even wrong entirely if the user disconnected from the game or suddenly changed their status before we can receive refreshed data.
    """
    
    current_activity: Optional[DestinyComponentsProfilesDestinyProfileTransitoryComponentCurrentActivity] = field(default=None)
    joinability: Optional[DestinyComponentsProfilesDestinyProfileTransitoryComponentJoinability] = field(default=None)
    last_orbited_destination_hash: Optional[int] = field(default=None)
    party_members: Optional[List[DestinyComponentsProfilesDestinyProfileTransitoryPartyMember]] = field(default=None)
    tracking: Optional[List[DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry]] = field(default=None)
    
