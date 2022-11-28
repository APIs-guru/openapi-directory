from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyResponsesDestinyCharacterResponseActivities:
    r"""DestinyResponsesDestinyCharacterResponseActivities
    Activity data - info about current activities available to the player.
    COMPONENT TYPE: CharacterActivities
    """
    
    data: Optional[DestinyEntitiesCharactersDestinyCharacterActivitiesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCharacterResponseCharacter:
    r"""DestinyResponsesDestinyCharacterResponseCharacter
    Base information about the character in question.
    COMPONENT TYPE: Characters
    """
    
    data: Optional[DestinyEntitiesCharactersDestinyCharacterComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCharacterResponseCollectibles:
    r"""DestinyResponsesDestinyCharacterResponseCollectibles
    COMPONENT TYPE: Collectibles
    """
    
    data: Optional[DestinyComponentsCollectiblesDestinyCollectiblesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCharacterResponseCurrencyLookups:
    r"""DestinyResponsesDestinyCharacterResponseCurrencyLookups
    A \"lookup\" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
    COMPONENT TYPE: CurrencyLookups
    """
    
    data: Optional[DestinyComponentsInventoryDestinyCurrenciesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCharacterResponseEquipment:
    r"""DestinyResponsesDestinyCharacterResponseEquipment
    Equipped items on the character.
    COMPONENT TYPE: CharacterEquipment
    """
    
    data: Optional[DestinyEntitiesInventoryDestinyInventoryComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCharacterResponseInventory:
    r"""DestinyResponsesDestinyCharacterResponseInventory
    The character-level non-equipped inventory items.
    COMPONENT TYPE: CharacterInventories
    """
    
    data: Optional[DestinyEntitiesInventoryDestinyInventoryComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCharacterResponseItemComponents:
    r"""DestinyResponsesDestinyCharacterResponseItemComponents
    The set of components belonging to the player's instanced items.
    COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
    """
    
    instances: Optional[DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent] = field(default=None)
    objectives: Optional[DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent] = field(default=None)
    perks: Optional[DictionaryComponentResponseOfint64AndDestinyItemPerksComponent] = field(default=None)
    plug_objectives: Optional[DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent] = field(default=None)
    plug_states: Optional[DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent] = field(default=None)
    render_data: Optional[DictionaryComponentResponseOfint64AndDestinyItemRenderComponent] = field(default=None)
    reusable_plugs: Optional[DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent] = field(default=None)
    sockets: Optional[DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent] = field(default=None)
    stats: Optional[DictionaryComponentResponseOfint64AndDestinyItemStatsComponent] = field(default=None)
    talent_grids: Optional[DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCharacterResponseKiosks:
    r"""DestinyResponsesDestinyCharacterResponseKiosks
    Items available from Kiosks that are available to this specific character. 
    COMPONENT TYPE: Kiosks
    """
    
    data: Optional[DestinyComponentsKiosksDestinyKiosksComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCharacterResponsePlugSets:
    r"""DestinyResponsesDestinyCharacterResponsePlugSets
    When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are scoped to this character.
    This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
    COMPONENT TYPE: ItemSockets
    """
    
    data: Optional[DestinyComponentsPlugSetsDestinyPlugSetsComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCharacterResponsePresentationNodes:
    r"""DestinyResponsesDestinyCharacterResponsePresentationNodes
    COMPONENT TYPE: PresentationNodes
    """
    
    data: Optional[DestinyComponentsPresentationDestinyPresentationNodesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCharacterResponseProgressions:
    r"""DestinyResponsesDestinyCharacterResponseProgressions
    Character progression data, including Milestones.
    COMPONENT TYPE: CharacterProgressions
    """
    
    data: Optional[DestinyEntitiesCharactersDestinyCharacterProgressionComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCharacterResponseRecords:
    r"""DestinyResponsesDestinyCharacterResponseRecords
    COMPONENT TYPE: Records
    """
    
    data: Optional[DestinyComponentsRecordsDestinyCharacterRecordsComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCharacterResponseRenderData:
    r"""DestinyResponsesDestinyCharacterResponseRenderData
    Character rendering data - a minimal set of information about equipment and dyes used for rendering.
    COMPONENT TYPE: CharacterRenderData
    """
    
    data: Optional[DestinyEntitiesCharactersDestinyCharacterRenderComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCharacterResponseUninstancedItemComponents:
    r"""DestinyResponsesDestinyCharacterResponseUninstancedItemComponents
    The set of components belonging to the player's UNinstanced items. Because apparently now those too can have information relevant to the character's state.
    COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
    """
    
    objectives: Optional[DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyCharacterResponse:
    r"""DestinyResponsesDestinyCharacterResponse
    The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.
    """
    
    activities: Optional[DestinyResponsesDestinyCharacterResponseActivities] = field(default=None)
    character: Optional[DestinyResponsesDestinyCharacterResponseCharacter] = field(default=None)
    collectibles: Optional[DestinyResponsesDestinyCharacterResponseCollectibles] = field(default=None)
    currency_lookups: Optional[DestinyResponsesDestinyCharacterResponseCurrencyLookups] = field(default=None)
    equipment: Optional[DestinyResponsesDestinyCharacterResponseEquipment] = field(default=None)
    inventory: Optional[DestinyResponsesDestinyCharacterResponseInventory] = field(default=None)
    item_components: Optional[DestinyResponsesDestinyCharacterResponseItemComponents] = field(default=None)
    kiosks: Optional[DestinyResponsesDestinyCharacterResponseKiosks] = field(default=None)
    plug_sets: Optional[DestinyResponsesDestinyCharacterResponsePlugSets] = field(default=None)
    presentation_nodes: Optional[DestinyResponsesDestinyCharacterResponsePresentationNodes] = field(default=None)
    progressions: Optional[DestinyResponsesDestinyCharacterResponseProgressions] = field(default=None)
    records: Optional[DestinyResponsesDestinyCharacterResponseRecords] = field(default=None)
    render_data: Optional[DestinyResponsesDestinyCharacterResponseRenderData] = field(default=None)
    uninstanced_item_components: Optional[DestinyResponsesDestinyCharacterResponseUninstancedItemComponents] = field(default=None)
    
