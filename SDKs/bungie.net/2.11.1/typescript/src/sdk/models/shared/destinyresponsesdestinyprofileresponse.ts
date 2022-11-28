import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// DestinyResponsesDestinyProfileResponseCharacterActivities
/** 
 * Character activity data - the activities available to this character and its status, keyed by the Character's Id.
 * COMPONENT TYPE: CharacterActivities
**/
export class DestinyResponsesDestinyProfileResponseCharacterActivities extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesCharactersDestinyCharacterActivitiesComponent })
  data?: Map<string, DestinyEntitiesCharactersDestinyCharacterActivitiesComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseCharacterCollectibles
/** 
 * COMPONENT TYPE: Collectibles
**/
export class DestinyResponsesDestinyProfileResponseCharacterCollectibles extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyComponentsCollectiblesDestinyCollectiblesComponent })
  data?: Map<string, DestinyComponentsCollectiblesDestinyCollectiblesComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups
/** 
 * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
 * COMPONENT TYPE: CurrencyLookups
**/
export class DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyComponentsInventoryDestinyCurrenciesComponent })
  data?: Map<string, DestinyComponentsInventoryDestinyCurrenciesComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseCharacterEquipment
/** 
 * The character's equipped items, keyed by the Character's Id.
 * COMPONENT TYPE: CharacterEquipment
**/
export class DestinyResponsesDestinyProfileResponseCharacterEquipment extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesInventoryDestinyInventoryComponent })
  data?: Map<string, DestinyEntitiesInventoryDestinyInventoryComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseCharacterInventories
/** 
 * The character-level non-equipped inventory items, keyed by the Character's Id.
 * COMPONENT TYPE: CharacterInventories
**/
export class DestinyResponsesDestinyProfileResponseCharacterInventories extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesInventoryDestinyInventoryComponent })
  data?: Map<string, DestinyEntitiesInventoryDestinyInventoryComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseCharacterKiosks
/** 
 * Items available from Kiosks that are available to a specific character as opposed to the account as a whole. It must be combined with data from the profileKiosks property to get a full picture of the character's available items to check out of a kiosk.
 * This component returns information about what Kiosk items are available to you on a *Character* level. Usually, kiosk items will be earned for the entire Profile (all characters) at once. To find those, look in the profileKiosks property.
 * COMPONENT TYPE: Kiosks
**/
export class DestinyResponsesDestinyProfileResponseCharacterKiosks extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyComponentsKiosksDestinyKiosksComponent })
  data?: Map<string, DestinyComponentsKiosksDestinyKiosksComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseCharacterPlugSets
/** 
 * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states, per character, that are character-scoped.
 * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
 * COMPONENT TYPE: ItemSockets
**/
export class DestinyResponsesDestinyProfileResponseCharacterPlugSets extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyComponentsPlugSetsDestinyPlugSetsComponent })
  data?: Map<string, DestinyComponentsPlugSetsDestinyPlugSetsComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseCharacterPresentationNodes
/** 
 * COMPONENT TYPE: PresentationNodes
**/
export class DestinyResponsesDestinyProfileResponseCharacterPresentationNodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyComponentsPresentationDestinyPresentationNodesComponent })
  data?: Map<string, DestinyComponentsPresentationDestinyPresentationNodesComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseCharacterProgressions
/** 
 * Character-level progression data, keyed by the Character's Id.
 * COMPONENT TYPE: CharacterProgressions
**/
export class DestinyResponsesDestinyProfileResponseCharacterProgressions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesCharactersDestinyCharacterProgressionComponent })
  data?: Map<string, DestinyEntitiesCharactersDestinyCharacterProgressionComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseCharacterRecords
/** 
 * COMPONENT TYPE: Records
**/
export class DestinyResponsesDestinyProfileResponseCharacterRecords extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyComponentsRecordsDestinyCharacterRecordsComponent })
  data?: Map<string, DestinyComponentsRecordsDestinyCharacterRecordsComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseCharacterRenderData
/** 
 * Character rendering data - a minimal set of info needed to render a character in 3D - keyed by the Character's Id.
 * COMPONENT TYPE: CharacterRenderData
**/
export class DestinyResponsesDestinyProfileResponseCharacterRenderData extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesCharactersDestinyCharacterRenderComponent })
  data?: Map<string, DestinyEntitiesCharactersDestinyCharacterRenderComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseCharacterStringVariables
/** 
 * COMPONENT TYPE: StringVariables
**/
export class DestinyResponsesDestinyProfileResponseCharacterStringVariables extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyComponentsStringVariablesDestinyStringVariablesComponent })
  data?: Map<string, DestinyComponentsStringVariablesDestinyStringVariablesComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseCharacters
/** 
 * Basic information about each character, keyed by the CharacterId.
 * COMPONENT TYPE: Characters
**/
export class DestinyResponsesDestinyProfileResponseCharacters extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesCharactersDestinyCharacterComponent })
  data?: Map<string, DestinyEntitiesCharactersDestinyCharacterComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseItemComponents
/** 
 * Information about instanced items across all returned characters, keyed by the item's instance ID.
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
**/
export class DestinyResponsesDestinyProfileResponseItemComponents extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instances?: DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent;

  @SpeakeasyMetadata()
  objectives?: DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent;

  @SpeakeasyMetadata()
  perks?: DictionaryComponentResponseOfint64AndDestinyItemPerksComponent;

  @SpeakeasyMetadata()
  plugObjectives?: DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent;

  @SpeakeasyMetadata()
  plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;

  @SpeakeasyMetadata()
  renderData?: DictionaryComponentResponseOfint64AndDestinyItemRenderComponent;

  @SpeakeasyMetadata()
  reusablePlugs?: DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent;

  @SpeakeasyMetadata()
  sockets?: DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent;

  @SpeakeasyMetadata()
  stats?: DictionaryComponentResponseOfint64AndDestinyItemStatsComponent;

  @SpeakeasyMetadata()
  talentGrids?: DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent;
}


// DestinyResponsesDestinyProfileResponseMetrics
/** 
 * COMPONENT TYPE: Metrics
**/
export class DestinyResponsesDestinyProfileResponseMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsMetricsDestinyMetricsComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponsePlatformSilver
/** 
 * Silver quantities for any platform on which this Profile plays destiny.
 *  COMPONENT TYPE: PlatformSilver
**/
export class DestinyResponsesDestinyProfileResponsePlatformSilver extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsInventoryDestinyPlatformSilverComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseProfile
/** 
 * The basic information about the Destiny Profile (formerly "Account").
 * COMPONENT TYPE: Profiles
**/
export class DestinyResponsesDestinyProfileResponseProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesProfilesDestinyProfileComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseProfileCollectibles
/** 
 * COMPONENT TYPE: Collectibles
**/
export class DestinyResponsesDestinyProfileResponseProfileCollectibles extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseProfileCurrencies
/** 
 * The profile-level currencies owned by the Destiny Profile.
 * COMPONENT TYPE: ProfileCurrencies
**/
export class DestinyResponsesDestinyProfileResponseProfileCurrencies extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesInventoryDestinyInventoryComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseProfileInventory
/** 
 * The profile-level inventory of the Destiny Profile.
 * COMPONENT TYPE: ProfileInventories
**/
export class DestinyResponsesDestinyProfileResponseProfileInventory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesInventoryDestinyInventoryComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseProfileKiosks
/** 
 * Items available from Kiosks that are available Profile-wide (i.e. across all characters)
 * This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the characterKiosks property.
 * COMPONENT TYPE: Kiosks
**/
export class DestinyResponsesDestinyProfileResponseProfileKiosks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsKiosksDestinyKiosksComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseProfilePlugSets
/** 
 * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are profile-scoped.
 * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
 * COMPONENT TYPE: ItemSockets
**/
export class DestinyResponsesDestinyProfileResponseProfilePlugSets extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsPlugSetsDestinyPlugSetsComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseProfilePresentationNodes
/** 
 * COMPONENT TYPE: PresentationNodes
**/
export class DestinyResponsesDestinyProfileResponseProfilePresentationNodes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsPresentationDestinyPresentationNodesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseProfileProgression
/** 
 * When we have progression information - such as Checklists - that may apply profile-wide, it will be returned here rather than in the per-character progression data.
 * COMPONENT TYPE: ProfileProgression
**/
export class DestinyResponsesDestinyProfileResponseProfileProgression extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsProfilesDestinyProfileProgressionComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseProfileRecords
/** 
 * COMPONENT TYPE: Records
**/
export class DestinyResponsesDestinyProfileResponseProfileRecords extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsRecordsDestinyProfileRecordsComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseProfileStringVariables
/** 
 * COMPONENT TYPE: StringVariables
**/
export class DestinyResponsesDestinyProfileResponseProfileStringVariables extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseProfileTransitoryData
/** 
 * COMPONENT TYPE: Transitory
**/
export class DestinyResponsesDestinyProfileResponseProfileTransitoryData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsProfilesDestinyProfileTransitoryComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponseVendorReceipts
/** 
 * Recent, refundable purchases you have made from vendors. When will you use it? Couldn't say...
 * COMPONENT TYPE: VendorReceipts
**/
export class DestinyResponsesDestinyProfileResponseVendorReceipts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesProfilesDestinyVendorReceiptsComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyProfileResponse
/** 
 * The response for GetDestinyProfile, with components for character and item-level data.
**/
export class DestinyResponsesDestinyProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  characterActivities?: DestinyResponsesDestinyProfileResponseCharacterActivities;

  @SpeakeasyMetadata()
  characterCollectibles?: DestinyResponsesDestinyProfileResponseCharacterCollectibles;

  @SpeakeasyMetadata()
  characterCurrencyLookups?: DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups;

  @SpeakeasyMetadata()
  characterEquipment?: DestinyResponsesDestinyProfileResponseCharacterEquipment;

  @SpeakeasyMetadata()
  characterInventories?: DestinyResponsesDestinyProfileResponseCharacterInventories;

  @SpeakeasyMetadata()
  characterKiosks?: DestinyResponsesDestinyProfileResponseCharacterKiosks;

  @SpeakeasyMetadata()
  characterPlugSets?: DestinyResponsesDestinyProfileResponseCharacterPlugSets;

  @SpeakeasyMetadata()
  characterPresentationNodes?: DestinyResponsesDestinyProfileResponseCharacterPresentationNodes;

  @SpeakeasyMetadata()
  characterProgressions?: DestinyResponsesDestinyProfileResponseCharacterProgressions;

  @SpeakeasyMetadata()
  characterRecords?: DestinyResponsesDestinyProfileResponseCharacterRecords;

  @SpeakeasyMetadata()
  characterRenderData?: DestinyResponsesDestinyProfileResponseCharacterRenderData;

  @SpeakeasyMetadata()
  characterStringVariables?: DestinyResponsesDestinyProfileResponseCharacterStringVariables;

  @SpeakeasyMetadata({ elemType: DestinyBaseItemComponentSetOfuint32 })
  characterUninstancedItemComponents?: Map<string, DestinyBaseItemComponentSetOfuint32>;

  @SpeakeasyMetadata()
  characters?: DestinyResponsesDestinyProfileResponseCharacters;

  @SpeakeasyMetadata()
  itemComponents?: DestinyResponsesDestinyProfileResponseItemComponents;

  @SpeakeasyMetadata()
  metrics?: DestinyResponsesDestinyProfileResponseMetrics;

  @SpeakeasyMetadata()
  platformSilver?: DestinyResponsesDestinyProfileResponsePlatformSilver;

  @SpeakeasyMetadata()
  profile?: DestinyResponsesDestinyProfileResponseProfile;

  @SpeakeasyMetadata()
  profileCollectibles?: DestinyResponsesDestinyProfileResponseProfileCollectibles;

  @SpeakeasyMetadata()
  profileCurrencies?: DestinyResponsesDestinyProfileResponseProfileCurrencies;

  @SpeakeasyMetadata()
  profileInventory?: DestinyResponsesDestinyProfileResponseProfileInventory;

  @SpeakeasyMetadata()
  profileKiosks?: DestinyResponsesDestinyProfileResponseProfileKiosks;

  @SpeakeasyMetadata()
  profilePlugSets?: DestinyResponsesDestinyProfileResponseProfilePlugSets;

  @SpeakeasyMetadata()
  profilePresentationNodes?: DestinyResponsesDestinyProfileResponseProfilePresentationNodes;

  @SpeakeasyMetadata()
  profileProgression?: DestinyResponsesDestinyProfileResponseProfileProgression;

  @SpeakeasyMetadata()
  profileRecords?: DestinyResponsesDestinyProfileResponseProfileRecords;

  @SpeakeasyMetadata()
  profileStringVariables?: DestinyResponsesDestinyProfileResponseProfileStringVariables;

  @SpeakeasyMetadata()
  profileTransitoryData?: DestinyResponsesDestinyProfileResponseProfileTransitoryData;

  @SpeakeasyMetadata()
  vendorReceipts?: DestinyResponsesDestinyProfileResponseVendorReceipts;
}
