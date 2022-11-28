import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesCharactersDestinyCharacterActivitiesComponent } from "./destinyentitiescharactersdestinycharacteractivitiescomponent";
import { DestinyComponentsCollectiblesDestinyCollectiblesComponent } from "./destinycomponentscollectiblesdestinycollectiblescomponent";
import { DestinyComponentsInventoryDestinyCurrenciesComponent } from "./destinycomponentsinventorydestinycurrenciescomponent";
import { DestinyEntitiesInventoryDestinyInventoryComponent } from "./destinyentitiesinventorydestinyinventorycomponent";
import { DestinyComponentsKiosksDestinyKiosksComponent } from "./destinycomponentskiosksdestinykioskscomponent";
import { DestinyComponentsPlugSetsDestinyPlugSetsComponent } from "./destinycomponentsplugsetsdestinyplugsetscomponent";
import { DestinyComponentsPresentationDestinyPresentationNodesComponent } from "./destinycomponentspresentationdestinypresentationnodescomponent";
import { DestinyEntitiesCharactersDestinyCharacterProgressionComponent } from "./destinyentitiescharactersdestinycharacterprogressioncomponent";
import { DestinyComponentsRecordsDestinyCharacterRecordsComponent } from "./destinycomponentsrecordsdestinycharacterrecordscomponent";
import { DestinyEntitiesCharactersDestinyCharacterRenderComponent } from "./destinyentitiescharactersdestinycharacterrendercomponent";
import { DestinyComponentsStringVariablesDestinyStringVariablesComponent } from "./destinycomponentsstringvariablesdestinystringvariablescomponent";
import { DestinyBaseItemComponentSetOfuint32 } from "./destinybaseitemcomponentsetofuint32";
import { DestinyEntitiesCharactersDestinyCharacterComponent } from "./destinyentitiescharactersdestinycharactercomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent } from "./dictionarycomponentresponseofint64anddestinyiteminstancecomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent } from "./dictionarycomponentresponseofint64anddestinyitemobjectivescomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemPerksComponent } from "./dictionarycomponentresponseofint64anddestinyitemperkscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent } from "./dictionarycomponentresponseofint64anddestinyitemplugobjectivescomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from "./dictionarycomponentresponseofuint32anddestinyitemplugcomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemRenderComponent } from "./dictionarycomponentresponseofint64anddestinyitemrendercomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent } from "./dictionarycomponentresponseofint64anddestinyitemreusableplugscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent } from "./dictionarycomponentresponseofint64anddestinyitemsocketscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemStatsComponent } from "./dictionarycomponentresponseofint64anddestinyitemstatscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent } from "./dictionarycomponentresponseofint64anddestinyitemtalentgridcomponent";
import { DestinyComponentsMetricsDestinyMetricsComponent } from "./destinycomponentsmetricsdestinymetricscomponent";
import { DestinyComponentsInventoryDestinyPlatformSilverComponent } from "./destinycomponentsinventorydestinyplatformsilvercomponent";
import { DestinyEntitiesProfilesDestinyProfileComponent } from "./destinyentitiesprofilesdestinyprofilecomponent";
import { DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent } from "./destinycomponentscollectiblesdestinyprofilecollectiblescomponent";
import { DestinyComponentsProfilesDestinyProfileProgressionComponent } from "./destinycomponentsprofilesdestinyprofileprogressioncomponent";
import { DestinyComponentsRecordsDestinyProfileRecordsComponent } from "./destinycomponentsrecordsdestinyprofilerecordscomponent";
import { DestinyComponentsProfilesDestinyProfileTransitoryComponent } from "./destinycomponentsprofilesdestinyprofiletransitorycomponent";
import { DestinyEntitiesProfilesDestinyVendorReceiptsComponent } from "./destinyentitiesprofilesdestinyvendorreceiptscomponent";
/**
 * Character activity data - the activities available to this character and its status, keyed by the Character's Id.
 * COMPONENT TYPE: CharacterActivities
**/
export declare class DestinyResponsesDestinyProfileResponseCharacterActivities extends SpeakeasyBase {
    data?: Map<string, DestinyEntitiesCharactersDestinyCharacterActivitiesComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Collectibles
**/
export declare class DestinyResponsesDestinyProfileResponseCharacterCollectibles extends SpeakeasyBase {
    data?: Map<string, DestinyComponentsCollectiblesDestinyCollectiblesComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
 * COMPONENT TYPE: CurrencyLookups
**/
export declare class DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups extends SpeakeasyBase {
    data?: Map<string, DestinyComponentsInventoryDestinyCurrenciesComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * The character's equipped items, keyed by the Character's Id.
 * COMPONENT TYPE: CharacterEquipment
**/
export declare class DestinyResponsesDestinyProfileResponseCharacterEquipment extends SpeakeasyBase {
    data?: Map<string, DestinyEntitiesInventoryDestinyInventoryComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * The character-level non-equipped inventory items, keyed by the Character's Id.
 * COMPONENT TYPE: CharacterInventories
**/
export declare class DestinyResponsesDestinyProfileResponseCharacterInventories extends SpeakeasyBase {
    data?: Map<string, DestinyEntitiesInventoryDestinyInventoryComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Items available from Kiosks that are available to a specific character as opposed to the account as a whole. It must be combined with data from the profileKiosks property to get a full picture of the character's available items to check out of a kiosk.
 * This component returns information about what Kiosk items are available to you on a *Character* level. Usually, kiosk items will be earned for the entire Profile (all characters) at once. To find those, look in the profileKiosks property.
 * COMPONENT TYPE: Kiosks
**/
export declare class DestinyResponsesDestinyProfileResponseCharacterKiosks extends SpeakeasyBase {
    data?: Map<string, DestinyComponentsKiosksDestinyKiosksComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states, per character, that are character-scoped.
 * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
 * COMPONENT TYPE: ItemSockets
**/
export declare class DestinyResponsesDestinyProfileResponseCharacterPlugSets extends SpeakeasyBase {
    data?: Map<string, DestinyComponentsPlugSetsDestinyPlugSetsComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: PresentationNodes
**/
export declare class DestinyResponsesDestinyProfileResponseCharacterPresentationNodes extends SpeakeasyBase {
    data?: Map<string, DestinyComponentsPresentationDestinyPresentationNodesComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Character-level progression data, keyed by the Character's Id.
 * COMPONENT TYPE: CharacterProgressions
**/
export declare class DestinyResponsesDestinyProfileResponseCharacterProgressions extends SpeakeasyBase {
    data?: Map<string, DestinyEntitiesCharactersDestinyCharacterProgressionComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Records
**/
export declare class DestinyResponsesDestinyProfileResponseCharacterRecords extends SpeakeasyBase {
    data?: Map<string, DestinyComponentsRecordsDestinyCharacterRecordsComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Character rendering data - a minimal set of info needed to render a character in 3D - keyed by the Character's Id.
 * COMPONENT TYPE: CharacterRenderData
**/
export declare class DestinyResponsesDestinyProfileResponseCharacterRenderData extends SpeakeasyBase {
    data?: Map<string, DestinyEntitiesCharactersDestinyCharacterRenderComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: StringVariables
**/
export declare class DestinyResponsesDestinyProfileResponseCharacterStringVariables extends SpeakeasyBase {
    data?: Map<string, DestinyComponentsStringVariablesDestinyStringVariablesComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Basic information about each character, keyed by the CharacterId.
 * COMPONENT TYPE: Characters
**/
export declare class DestinyResponsesDestinyProfileResponseCharacters extends SpeakeasyBase {
    data?: Map<string, DestinyEntitiesCharactersDestinyCharacterComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information about instanced items across all returned characters, keyed by the item's instance ID.
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
**/
export declare class DestinyResponsesDestinyProfileResponseItemComponents extends SpeakeasyBase {
    instances?: DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent;
    objectives?: DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent;
    perks?: DictionaryComponentResponseOfint64AndDestinyItemPerksComponent;
    plugObjectives?: DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent;
    plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;
    renderData?: DictionaryComponentResponseOfint64AndDestinyItemRenderComponent;
    reusablePlugs?: DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent;
    sockets?: DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent;
    stats?: DictionaryComponentResponseOfint64AndDestinyItemStatsComponent;
    talentGrids?: DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent;
}
/**
 * COMPONENT TYPE: Metrics
**/
export declare class DestinyResponsesDestinyProfileResponseMetrics extends SpeakeasyBase {
    data?: DestinyComponentsMetricsDestinyMetricsComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Silver quantities for any platform on which this Profile plays destiny.
 *  COMPONENT TYPE: PlatformSilver
**/
export declare class DestinyResponsesDestinyProfileResponsePlatformSilver extends SpeakeasyBase {
    data?: DestinyComponentsInventoryDestinyPlatformSilverComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * The basic information about the Destiny Profile (formerly "Account").
 * COMPONENT TYPE: Profiles
**/
export declare class DestinyResponsesDestinyProfileResponseProfile extends SpeakeasyBase {
    data?: DestinyEntitiesProfilesDestinyProfileComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Collectibles
**/
export declare class DestinyResponsesDestinyProfileResponseProfileCollectibles extends SpeakeasyBase {
    data?: DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * The profile-level currencies owned by the Destiny Profile.
 * COMPONENT TYPE: ProfileCurrencies
**/
export declare class DestinyResponsesDestinyProfileResponseProfileCurrencies extends SpeakeasyBase {
    data?: DestinyEntitiesInventoryDestinyInventoryComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * The profile-level inventory of the Destiny Profile.
 * COMPONENT TYPE: ProfileInventories
**/
export declare class DestinyResponsesDestinyProfileResponseProfileInventory extends SpeakeasyBase {
    data?: DestinyEntitiesInventoryDestinyInventoryComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Items available from Kiosks that are available Profile-wide (i.e. across all characters)
 * This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the characterKiosks property.
 * COMPONENT TYPE: Kiosks
**/
export declare class DestinyResponsesDestinyProfileResponseProfileKiosks extends SpeakeasyBase {
    data?: DestinyComponentsKiosksDestinyKiosksComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are profile-scoped.
 * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
 * COMPONENT TYPE: ItemSockets
**/
export declare class DestinyResponsesDestinyProfileResponseProfilePlugSets extends SpeakeasyBase {
    data?: DestinyComponentsPlugSetsDestinyPlugSetsComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: PresentationNodes
**/
export declare class DestinyResponsesDestinyProfileResponseProfilePresentationNodes extends SpeakeasyBase {
    data?: DestinyComponentsPresentationDestinyPresentationNodesComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * When we have progression information - such as Checklists - that may apply profile-wide, it will be returned here rather than in the per-character progression data.
 * COMPONENT TYPE: ProfileProgression
**/
export declare class DestinyResponsesDestinyProfileResponseProfileProgression extends SpeakeasyBase {
    data?: DestinyComponentsProfilesDestinyProfileProgressionComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Records
**/
export declare class DestinyResponsesDestinyProfileResponseProfileRecords extends SpeakeasyBase {
    data?: DestinyComponentsRecordsDestinyProfileRecordsComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: StringVariables
**/
export declare class DestinyResponsesDestinyProfileResponseProfileStringVariables extends SpeakeasyBase {
    data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Transitory
**/
export declare class DestinyResponsesDestinyProfileResponseProfileTransitoryData extends SpeakeasyBase {
    data?: DestinyComponentsProfilesDestinyProfileTransitoryComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Recent, refundable purchases you have made from vendors. When will you use it? Couldn't say...
 * COMPONENT TYPE: VendorReceipts
**/
export declare class DestinyResponsesDestinyProfileResponseVendorReceipts extends SpeakeasyBase {
    data?: DestinyEntitiesProfilesDestinyVendorReceiptsComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * The response for GetDestinyProfile, with components for character and item-level data.
**/
export declare class DestinyResponsesDestinyProfileResponse extends SpeakeasyBase {
    characterActivities?: DestinyResponsesDestinyProfileResponseCharacterActivities;
    characterCollectibles?: DestinyResponsesDestinyProfileResponseCharacterCollectibles;
    characterCurrencyLookups?: DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups;
    characterEquipment?: DestinyResponsesDestinyProfileResponseCharacterEquipment;
    characterInventories?: DestinyResponsesDestinyProfileResponseCharacterInventories;
    characterKiosks?: DestinyResponsesDestinyProfileResponseCharacterKiosks;
    characterPlugSets?: DestinyResponsesDestinyProfileResponseCharacterPlugSets;
    characterPresentationNodes?: DestinyResponsesDestinyProfileResponseCharacterPresentationNodes;
    characterProgressions?: DestinyResponsesDestinyProfileResponseCharacterProgressions;
    characterRecords?: DestinyResponsesDestinyProfileResponseCharacterRecords;
    characterRenderData?: DestinyResponsesDestinyProfileResponseCharacterRenderData;
    characterStringVariables?: DestinyResponsesDestinyProfileResponseCharacterStringVariables;
    characterUninstancedItemComponents?: Map<string, DestinyBaseItemComponentSetOfuint32>;
    characters?: DestinyResponsesDestinyProfileResponseCharacters;
    itemComponents?: DestinyResponsesDestinyProfileResponseItemComponents;
    metrics?: DestinyResponsesDestinyProfileResponseMetrics;
    platformSilver?: DestinyResponsesDestinyProfileResponsePlatformSilver;
    profile?: DestinyResponsesDestinyProfileResponseProfile;
    profileCollectibles?: DestinyResponsesDestinyProfileResponseProfileCollectibles;
    profileCurrencies?: DestinyResponsesDestinyProfileResponseProfileCurrencies;
    profileInventory?: DestinyResponsesDestinyProfileResponseProfileInventory;
    profileKiosks?: DestinyResponsesDestinyProfileResponseProfileKiosks;
    profilePlugSets?: DestinyResponsesDestinyProfileResponseProfilePlugSets;
    profilePresentationNodes?: DestinyResponsesDestinyProfileResponseProfilePresentationNodes;
    profileProgression?: DestinyResponsesDestinyProfileResponseProfileProgression;
    profileRecords?: DestinyResponsesDestinyProfileResponseProfileRecords;
    profileStringVariables?: DestinyResponsesDestinyProfileResponseProfileStringVariables;
    profileTransitoryData?: DestinyResponsesDestinyProfileResponseProfileTransitoryData;
    vendorReceipts?: DestinyResponsesDestinyProfileResponseVendorReceipts;
}
