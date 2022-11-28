from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyItemComponentSetOfint32:
    instances: Optional[DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent] = field(default=None)
    objectives: Optional[DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent] = field(default=None)
    perks: Optional[DictionaryComponentResponseOfint32AndDestinyItemPerksComponent] = field(default=None)
    plug_objectives: Optional[DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent] = field(default=None)
    plug_states: Optional[DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent] = field(default=None)
    render_data: Optional[DictionaryComponentResponseOfint32AndDestinyItemRenderComponent] = field(default=None)
    reusable_plugs: Optional[DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent] = field(default=None)
    sockets: Optional[DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent] = field(default=None)
    stats: Optional[DictionaryComponentResponseOfint32AndDestinyItemStatsComponent] = field(default=None)
    talent_grids: Optional[DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent] = field(default=None)
    
