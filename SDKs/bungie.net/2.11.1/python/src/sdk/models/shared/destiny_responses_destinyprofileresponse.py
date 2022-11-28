from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyResponsesDestinyProfileResponseCharacterActivities:
    r"""DestinyResponsesDestinyProfileResponseCharacterActivities
    Character activity data - the activities available to this character and its status, keyed by the Character's Id.
    COMPONENT TYPE: CharacterActivities
    """
    
    data: Optional[dict[str, DestinyEntitiesCharactersDestinyCharacterActivitiesComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseCharacterCollectibles:
    r"""DestinyResponsesDestinyProfileResponseCharacterCollectibles
    COMPONENT TYPE: Collectibles
    """
    
    data: Optional[dict[str, DestinyComponentsCollectiblesDestinyCollectiblesComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups:
    r"""DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups
    A \"lookup\" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
    COMPONENT TYPE: CurrencyLookups
    """
    
    data: Optional[dict[str, DestinyComponentsInventoryDestinyCurrenciesComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseCharacterEquipment:
    r"""DestinyResponsesDestinyProfileResponseCharacterEquipment
    The character's equipped items, keyed by the Character's Id.
    COMPONENT TYPE: CharacterEquipment
    """
    
    data: Optional[dict[str, DestinyEntitiesInventoryDestinyInventoryComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseCharacterInventories:
    r"""DestinyResponsesDestinyProfileResponseCharacterInventories
    The character-level non-equipped inventory items, keyed by the Character's Id.
    COMPONENT TYPE: CharacterInventories
    """
    
    data: Optional[dict[str, DestinyEntitiesInventoryDestinyInventoryComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseCharacterKiosks:
    r"""DestinyResponsesDestinyProfileResponseCharacterKiosks
    Items available from Kiosks that are available to a specific character as opposed to the account as a whole. It must be combined with data from the profileKiosks property to get a full picture of the character's available items to check out of a kiosk.
    This component returns information about what Kiosk items are available to you on a *Character* level. Usually, kiosk items will be earned for the entire Profile (all characters) at once. To find those, look in the profileKiosks property.
    COMPONENT TYPE: Kiosks
    """
    
    data: Optional[dict[str, DestinyComponentsKiosksDestinyKiosksComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseCharacterPlugSets:
    r"""DestinyResponsesDestinyProfileResponseCharacterPlugSets
    When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states, per character, that are character-scoped.
    This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
    COMPONENT TYPE: ItemSockets
    """
    
    data: Optional[dict[str, DestinyComponentsPlugSetsDestinyPlugSetsComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseCharacterPresentationNodes:
    r"""DestinyResponsesDestinyProfileResponseCharacterPresentationNodes
    COMPONENT TYPE: PresentationNodes
    """
    
    data: Optional[dict[str, DestinyComponentsPresentationDestinyPresentationNodesComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseCharacterProgressions:
    r"""DestinyResponsesDestinyProfileResponseCharacterProgressions
    Character-level progression data, keyed by the Character's Id.
    COMPONENT TYPE: CharacterProgressions
    """
    
    data: Optional[dict[str, DestinyEntitiesCharactersDestinyCharacterProgressionComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseCharacterRecords:
    r"""DestinyResponsesDestinyProfileResponseCharacterRecords
    COMPONENT TYPE: Records
    """
    
    data: Optional[dict[str, DestinyComponentsRecordsDestinyCharacterRecordsComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseCharacterRenderData:
    r"""DestinyResponsesDestinyProfileResponseCharacterRenderData
    Character rendering data - a minimal set of info needed to render a character in 3D - keyed by the Character's Id.
    COMPONENT TYPE: CharacterRenderData
    """
    
    data: Optional[dict[str, DestinyEntitiesCharactersDestinyCharacterRenderComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseCharacterStringVariables:
    r"""DestinyResponsesDestinyProfileResponseCharacterStringVariables
    COMPONENT TYPE: StringVariables
    """
    
    data: Optional[dict[str, DestinyComponentsStringVariablesDestinyStringVariablesComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseCharacters:
    r"""DestinyResponsesDestinyProfileResponseCharacters
    Basic information about each character, keyed by the CharacterId.
    COMPONENT TYPE: Characters
    """
    
    data: Optional[dict[str, DestinyEntitiesCharactersDestinyCharacterComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseItemComponents:
    r"""DestinyResponsesDestinyProfileResponseItemComponents
    Information about instanced items across all returned characters, keyed by the item's instance ID.
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
class DestinyResponsesDestinyProfileResponseMetrics:
    r"""DestinyResponsesDestinyProfileResponseMetrics
    COMPONENT TYPE: Metrics
    """
    
    data: Optional[DestinyComponentsMetricsDestinyMetricsComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponsePlatformSilver:
    r"""DestinyResponsesDestinyProfileResponsePlatformSilver
    Silver quantities for any platform on which this Profile plays destiny.
     COMPONENT TYPE: PlatformSilver
    """
    
    data: Optional[DestinyComponentsInventoryDestinyPlatformSilverComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseProfile:
    r"""DestinyResponsesDestinyProfileResponseProfile
    The basic information about the Destiny Profile (formerly \"Account\").
    COMPONENT TYPE: Profiles
    """
    
    data: Optional[DestinyEntitiesProfilesDestinyProfileComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseProfileCollectibles:
    r"""DestinyResponsesDestinyProfileResponseProfileCollectibles
    COMPONENT TYPE: Collectibles
    """
    
    data: Optional[DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseProfileCurrencies:
    r"""DestinyResponsesDestinyProfileResponseProfileCurrencies
    The profile-level currencies owned by the Destiny Profile.
    COMPONENT TYPE: ProfileCurrencies
    """
    
    data: Optional[DestinyEntitiesInventoryDestinyInventoryComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseProfileInventory:
    r"""DestinyResponsesDestinyProfileResponseProfileInventory
    The profile-level inventory of the Destiny Profile.
    COMPONENT TYPE: ProfileInventories
    """
    
    data: Optional[DestinyEntitiesInventoryDestinyInventoryComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseProfileKiosks:
    r"""DestinyResponsesDestinyProfileResponseProfileKiosks
    Items available from Kiosks that are available Profile-wide (i.e. across all characters)
    This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the characterKiosks property.
    COMPONENT TYPE: Kiosks
    """
    
    data: Optional[DestinyComponentsKiosksDestinyKiosksComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseProfilePlugSets:
    r"""DestinyResponsesDestinyProfileResponseProfilePlugSets
    When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are profile-scoped.
    This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
    COMPONENT TYPE: ItemSockets
    """
    
    data: Optional[DestinyComponentsPlugSetsDestinyPlugSetsComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseProfilePresentationNodes:
    r"""DestinyResponsesDestinyProfileResponseProfilePresentationNodes
    COMPONENT TYPE: PresentationNodes
    """
    
    data: Optional[DestinyComponentsPresentationDestinyPresentationNodesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseProfileProgression:
    r"""DestinyResponsesDestinyProfileResponseProfileProgression
    When we have progression information - such as Checklists - that may apply profile-wide, it will be returned here rather than in the per-character progression data.
    COMPONENT TYPE: ProfileProgression
    """
    
    data: Optional[DestinyComponentsProfilesDestinyProfileProgressionComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseProfileRecords:
    r"""DestinyResponsesDestinyProfileResponseProfileRecords
    COMPONENT TYPE: Records
    """
    
    data: Optional[DestinyComponentsRecordsDestinyProfileRecordsComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseProfileStringVariables:
    r"""DestinyResponsesDestinyProfileResponseProfileStringVariables
    COMPONENT TYPE: StringVariables
    """
    
    data: Optional[DestinyComponentsStringVariablesDestinyStringVariablesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseProfileTransitoryData:
    r"""DestinyResponsesDestinyProfileResponseProfileTransitoryData
    COMPONENT TYPE: Transitory
    """
    
    data: Optional[DestinyComponentsProfilesDestinyProfileTransitoryComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponseVendorReceipts:
    r"""DestinyResponsesDestinyProfileResponseVendorReceipts
    Recent, refundable purchases you have made from vendors. When will you use it? Couldn't say...
    COMPONENT TYPE: VendorReceipts
    """
    
    data: Optional[DestinyEntitiesProfilesDestinyVendorReceiptsComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyProfileResponse:
    r"""DestinyResponsesDestinyProfileResponse
    The response for GetDestinyProfile, with components for character and item-level data.
    """
    
    character_activities: Optional[DestinyResponsesDestinyProfileResponseCharacterActivities] = field(default=None)
    character_collectibles: Optional[DestinyResponsesDestinyProfileResponseCharacterCollectibles] = field(default=None)
    character_currency_lookups: Optional[DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups] = field(default=None)
    character_equipment: Optional[DestinyResponsesDestinyProfileResponseCharacterEquipment] = field(default=None)
    character_inventories: Optional[DestinyResponsesDestinyProfileResponseCharacterInventories] = field(default=None)
    character_kiosks: Optional[DestinyResponsesDestinyProfileResponseCharacterKiosks] = field(default=None)
    character_plug_sets: Optional[DestinyResponsesDestinyProfileResponseCharacterPlugSets] = field(default=None)
    character_presentation_nodes: Optional[DestinyResponsesDestinyProfileResponseCharacterPresentationNodes] = field(default=None)
    character_progressions: Optional[DestinyResponsesDestinyProfileResponseCharacterProgressions] = field(default=None)
    character_records: Optional[DestinyResponsesDestinyProfileResponseCharacterRecords] = field(default=None)
    character_render_data: Optional[DestinyResponsesDestinyProfileResponseCharacterRenderData] = field(default=None)
    character_string_variables: Optional[DestinyResponsesDestinyProfileResponseCharacterStringVariables] = field(default=None)
    character_uninstanced_item_components: Optional[dict[str, DestinyBaseItemComponentSetOfuint32]] = field(default=None)
    characters: Optional[DestinyResponsesDestinyProfileResponseCharacters] = field(default=None)
    item_components: Optional[DestinyResponsesDestinyProfileResponseItemComponents] = field(default=None)
    metrics: Optional[DestinyResponsesDestinyProfileResponseMetrics] = field(default=None)
    platform_silver: Optional[DestinyResponsesDestinyProfileResponsePlatformSilver] = field(default=None)
    profile: Optional[DestinyResponsesDestinyProfileResponseProfile] = field(default=None)
    profile_collectibles: Optional[DestinyResponsesDestinyProfileResponseProfileCollectibles] = field(default=None)
    profile_currencies: Optional[DestinyResponsesDestinyProfileResponseProfileCurrencies] = field(default=None)
    profile_inventory: Optional[DestinyResponsesDestinyProfileResponseProfileInventory] = field(default=None)
    profile_kiosks: Optional[DestinyResponsesDestinyProfileResponseProfileKiosks] = field(default=None)
    profile_plug_sets: Optional[DestinyResponsesDestinyProfileResponseProfilePlugSets] = field(default=None)
    profile_presentation_nodes: Optional[DestinyResponsesDestinyProfileResponseProfilePresentationNodes] = field(default=None)
    profile_progression: Optional[DestinyResponsesDestinyProfileResponseProfileProgression] = field(default=None)
    profile_records: Optional[DestinyResponsesDestinyProfileResponseProfileRecords] = field(default=None)
    profile_string_variables: Optional[DestinyResponsesDestinyProfileResponseProfileStringVariables] = field(default=None)
    profile_transitory_data: Optional[DestinyResponsesDestinyProfileResponseProfileTransitoryData] = field(default=None)
    vendor_receipts: Optional[DestinyResponsesDestinyProfileResponseVendorReceipts] = field(default=None)
    
