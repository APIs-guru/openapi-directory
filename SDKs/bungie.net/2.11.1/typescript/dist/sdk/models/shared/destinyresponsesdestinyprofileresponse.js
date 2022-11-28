var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var DestinyResponsesDestinyProfileResponseCharacterActivities = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseCharacterActivities, _super);
    function DestinyResponsesDestinyProfileResponseCharacterActivities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyEntitiesCharactersDestinyCharacterActivitiesComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileResponseCharacterActivities.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseCharacterActivities.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseCharacterActivities.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseCharacterActivities;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseCharacterActivities };
// DestinyResponsesDestinyProfileResponseCharacterCollectibles
/**
 * COMPONENT TYPE: Collectibles
**/
var DestinyResponsesDestinyProfileResponseCharacterCollectibles = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseCharacterCollectibles, _super);
    function DestinyResponsesDestinyProfileResponseCharacterCollectibles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyComponentsCollectiblesDestinyCollectiblesComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileResponseCharacterCollectibles.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseCharacterCollectibles.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseCharacterCollectibles.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseCharacterCollectibles;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseCharacterCollectibles };
// DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups
/**
 * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
 * COMPONENT TYPE: CurrencyLookups
**/
var DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups, _super);
    function DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyComponentsInventoryDestinyCurrenciesComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups };
// DestinyResponsesDestinyProfileResponseCharacterEquipment
/**
 * The character's equipped items, keyed by the Character's Id.
 * COMPONENT TYPE: CharacterEquipment
**/
var DestinyResponsesDestinyProfileResponseCharacterEquipment = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseCharacterEquipment, _super);
    function DestinyResponsesDestinyProfileResponseCharacterEquipment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyEntitiesInventoryDestinyInventoryComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileResponseCharacterEquipment.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseCharacterEquipment.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseCharacterEquipment.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseCharacterEquipment;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseCharacterEquipment };
// DestinyResponsesDestinyProfileResponseCharacterInventories
/**
 * The character-level non-equipped inventory items, keyed by the Character's Id.
 * COMPONENT TYPE: CharacterInventories
**/
var DestinyResponsesDestinyProfileResponseCharacterInventories = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseCharacterInventories, _super);
    function DestinyResponsesDestinyProfileResponseCharacterInventories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyEntitiesInventoryDestinyInventoryComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileResponseCharacterInventories.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseCharacterInventories.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseCharacterInventories.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseCharacterInventories;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseCharacterInventories };
// DestinyResponsesDestinyProfileResponseCharacterKiosks
/**
 * Items available from Kiosks that are available to a specific character as opposed to the account as a whole. It must be combined with data from the profileKiosks property to get a full picture of the character's available items to check out of a kiosk.
 * This component returns information about what Kiosk items are available to you on a *Character* level. Usually, kiosk items will be earned for the entire Profile (all characters) at once. To find those, look in the profileKiosks property.
 * COMPONENT TYPE: Kiosks
**/
var DestinyResponsesDestinyProfileResponseCharacterKiosks = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseCharacterKiosks, _super);
    function DestinyResponsesDestinyProfileResponseCharacterKiosks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyComponentsKiosksDestinyKiosksComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileResponseCharacterKiosks.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseCharacterKiosks.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseCharacterKiosks.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseCharacterKiosks;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseCharacterKiosks };
// DestinyResponsesDestinyProfileResponseCharacterPlugSets
/**
 * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states, per character, that are character-scoped.
 * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
 * COMPONENT TYPE: ItemSockets
**/
var DestinyResponsesDestinyProfileResponseCharacterPlugSets = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseCharacterPlugSets, _super);
    function DestinyResponsesDestinyProfileResponseCharacterPlugSets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyComponentsPlugSetsDestinyPlugSetsComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileResponseCharacterPlugSets.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseCharacterPlugSets.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseCharacterPlugSets.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseCharacterPlugSets;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseCharacterPlugSets };
// DestinyResponsesDestinyProfileResponseCharacterPresentationNodes
/**
 * COMPONENT TYPE: PresentationNodes
**/
var DestinyResponsesDestinyProfileResponseCharacterPresentationNodes = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseCharacterPresentationNodes, _super);
    function DestinyResponsesDestinyProfileResponseCharacterPresentationNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyComponentsPresentationDestinyPresentationNodesComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileResponseCharacterPresentationNodes.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseCharacterPresentationNodes.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseCharacterPresentationNodes.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseCharacterPresentationNodes;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseCharacterPresentationNodes };
// DestinyResponsesDestinyProfileResponseCharacterProgressions
/**
 * Character-level progression data, keyed by the Character's Id.
 * COMPONENT TYPE: CharacterProgressions
**/
var DestinyResponsesDestinyProfileResponseCharacterProgressions = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseCharacterProgressions, _super);
    function DestinyResponsesDestinyProfileResponseCharacterProgressions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyEntitiesCharactersDestinyCharacterProgressionComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileResponseCharacterProgressions.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseCharacterProgressions.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseCharacterProgressions.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseCharacterProgressions;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseCharacterProgressions };
// DestinyResponsesDestinyProfileResponseCharacterRecords
/**
 * COMPONENT TYPE: Records
**/
var DestinyResponsesDestinyProfileResponseCharacterRecords = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseCharacterRecords, _super);
    function DestinyResponsesDestinyProfileResponseCharacterRecords() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyComponentsRecordsDestinyCharacterRecordsComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileResponseCharacterRecords.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseCharacterRecords.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseCharacterRecords.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseCharacterRecords;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseCharacterRecords };
// DestinyResponsesDestinyProfileResponseCharacterRenderData
/**
 * Character rendering data - a minimal set of info needed to render a character in 3D - keyed by the Character's Id.
 * COMPONENT TYPE: CharacterRenderData
**/
var DestinyResponsesDestinyProfileResponseCharacterRenderData = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseCharacterRenderData, _super);
    function DestinyResponsesDestinyProfileResponseCharacterRenderData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyEntitiesCharactersDestinyCharacterRenderComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileResponseCharacterRenderData.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseCharacterRenderData.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseCharacterRenderData.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseCharacterRenderData;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseCharacterRenderData };
// DestinyResponsesDestinyProfileResponseCharacterStringVariables
/**
 * COMPONENT TYPE: StringVariables
**/
var DestinyResponsesDestinyProfileResponseCharacterStringVariables = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseCharacterStringVariables, _super);
    function DestinyResponsesDestinyProfileResponseCharacterStringVariables() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyComponentsStringVariablesDestinyStringVariablesComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileResponseCharacterStringVariables.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseCharacterStringVariables.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseCharacterStringVariables.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseCharacterStringVariables;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseCharacterStringVariables };
// DestinyResponsesDestinyProfileResponseCharacters
/**
 * Basic information about each character, keyed by the CharacterId.
 * COMPONENT TYPE: Characters
**/
var DestinyResponsesDestinyProfileResponseCharacters = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseCharacters, _super);
    function DestinyResponsesDestinyProfileResponseCharacters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyEntitiesCharactersDestinyCharacterComponent }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileResponseCharacters.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseCharacters.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseCharacters.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseCharacters;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseCharacters };
// DestinyResponsesDestinyProfileResponseItemComponents
/**
 * Information about instanced items across all returned characters, keyed by the item's instance ID.
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
**/
var DestinyResponsesDestinyProfileResponseItemComponents = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseItemComponents, _super);
    function DestinyResponsesDestinyProfileResponseItemComponents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent)
    ], DestinyResponsesDestinyProfileResponseItemComponents.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent)
    ], DestinyResponsesDestinyProfileResponseItemComponents.prototype, "objectives", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemPerksComponent)
    ], DestinyResponsesDestinyProfileResponseItemComponents.prototype, "perks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent)
    ], DestinyResponsesDestinyProfileResponseItemComponents.prototype, "plugObjectives", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent)
    ], DestinyResponsesDestinyProfileResponseItemComponents.prototype, "plugStates", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemRenderComponent)
    ], DestinyResponsesDestinyProfileResponseItemComponents.prototype, "renderData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent)
    ], DestinyResponsesDestinyProfileResponseItemComponents.prototype, "reusablePlugs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent)
    ], DestinyResponsesDestinyProfileResponseItemComponents.prototype, "sockets", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemStatsComponent)
    ], DestinyResponsesDestinyProfileResponseItemComponents.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent)
    ], DestinyResponsesDestinyProfileResponseItemComponents.prototype, "talentGrids", void 0);
    return DestinyResponsesDestinyProfileResponseItemComponents;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseItemComponents };
// DestinyResponsesDestinyProfileResponseMetrics
/**
 * COMPONENT TYPE: Metrics
**/
var DestinyResponsesDestinyProfileResponseMetrics = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseMetrics, _super);
    function DestinyResponsesDestinyProfileResponseMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsMetricsDestinyMetricsComponent)
    ], DestinyResponsesDestinyProfileResponseMetrics.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseMetrics.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseMetrics.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseMetrics;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseMetrics };
// DestinyResponsesDestinyProfileResponsePlatformSilver
/**
 * Silver quantities for any platform on which this Profile plays destiny.
 *  COMPONENT TYPE: PlatformSilver
**/
var DestinyResponsesDestinyProfileResponsePlatformSilver = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponsePlatformSilver, _super);
    function DestinyResponsesDestinyProfileResponsePlatformSilver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsInventoryDestinyPlatformSilverComponent)
    ], DestinyResponsesDestinyProfileResponsePlatformSilver.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponsePlatformSilver.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponsePlatformSilver.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponsePlatformSilver;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponsePlatformSilver };
// DestinyResponsesDestinyProfileResponseProfile
/**
 * The basic information about the Destiny Profile (formerly "Account").
 * COMPONENT TYPE: Profiles
**/
var DestinyResponsesDestinyProfileResponseProfile = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseProfile, _super);
    function DestinyResponsesDestinyProfileResponseProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesProfilesDestinyProfileComponent)
    ], DestinyResponsesDestinyProfileResponseProfile.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseProfile.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseProfile.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseProfile;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseProfile };
// DestinyResponsesDestinyProfileResponseProfileCollectibles
/**
 * COMPONENT TYPE: Collectibles
**/
var DestinyResponsesDestinyProfileResponseProfileCollectibles = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseProfileCollectibles, _super);
    function DestinyResponsesDestinyProfileResponseProfileCollectibles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent)
    ], DestinyResponsesDestinyProfileResponseProfileCollectibles.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseProfileCollectibles.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseProfileCollectibles.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseProfileCollectibles;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseProfileCollectibles };
// DestinyResponsesDestinyProfileResponseProfileCurrencies
/**
 * The profile-level currencies owned by the Destiny Profile.
 * COMPONENT TYPE: ProfileCurrencies
**/
var DestinyResponsesDestinyProfileResponseProfileCurrencies = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseProfileCurrencies, _super);
    function DestinyResponsesDestinyProfileResponseProfileCurrencies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesInventoryDestinyInventoryComponent)
    ], DestinyResponsesDestinyProfileResponseProfileCurrencies.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseProfileCurrencies.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseProfileCurrencies.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseProfileCurrencies;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseProfileCurrencies };
// DestinyResponsesDestinyProfileResponseProfileInventory
/**
 * The profile-level inventory of the Destiny Profile.
 * COMPONENT TYPE: ProfileInventories
**/
var DestinyResponsesDestinyProfileResponseProfileInventory = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseProfileInventory, _super);
    function DestinyResponsesDestinyProfileResponseProfileInventory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesInventoryDestinyInventoryComponent)
    ], DestinyResponsesDestinyProfileResponseProfileInventory.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseProfileInventory.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseProfileInventory.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseProfileInventory;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseProfileInventory };
// DestinyResponsesDestinyProfileResponseProfileKiosks
/**
 * Items available from Kiosks that are available Profile-wide (i.e. across all characters)
 * This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the characterKiosks property.
 * COMPONENT TYPE: Kiosks
**/
var DestinyResponsesDestinyProfileResponseProfileKiosks = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseProfileKiosks, _super);
    function DestinyResponsesDestinyProfileResponseProfileKiosks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsKiosksDestinyKiosksComponent)
    ], DestinyResponsesDestinyProfileResponseProfileKiosks.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseProfileKiosks.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseProfileKiosks.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseProfileKiosks;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseProfileKiosks };
// DestinyResponsesDestinyProfileResponseProfilePlugSets
/**
 * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are profile-scoped.
 * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
 * COMPONENT TYPE: ItemSockets
**/
var DestinyResponsesDestinyProfileResponseProfilePlugSets = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseProfilePlugSets, _super);
    function DestinyResponsesDestinyProfileResponseProfilePlugSets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsPlugSetsDestinyPlugSetsComponent)
    ], DestinyResponsesDestinyProfileResponseProfilePlugSets.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseProfilePlugSets.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseProfilePlugSets.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseProfilePlugSets;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseProfilePlugSets };
// DestinyResponsesDestinyProfileResponseProfilePresentationNodes
/**
 * COMPONENT TYPE: PresentationNodes
**/
var DestinyResponsesDestinyProfileResponseProfilePresentationNodes = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseProfilePresentationNodes, _super);
    function DestinyResponsesDestinyProfileResponseProfilePresentationNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsPresentationDestinyPresentationNodesComponent)
    ], DestinyResponsesDestinyProfileResponseProfilePresentationNodes.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseProfilePresentationNodes.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseProfilePresentationNodes.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseProfilePresentationNodes;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseProfilePresentationNodes };
// DestinyResponsesDestinyProfileResponseProfileProgression
/**
 * When we have progression information - such as Checklists - that may apply profile-wide, it will be returned here rather than in the per-character progression data.
 * COMPONENT TYPE: ProfileProgression
**/
var DestinyResponsesDestinyProfileResponseProfileProgression = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseProfileProgression, _super);
    function DestinyResponsesDestinyProfileResponseProfileProgression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsProfilesDestinyProfileProgressionComponent)
    ], DestinyResponsesDestinyProfileResponseProfileProgression.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseProfileProgression.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseProfileProgression.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseProfileProgression;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseProfileProgression };
// DestinyResponsesDestinyProfileResponseProfileRecords
/**
 * COMPONENT TYPE: Records
**/
var DestinyResponsesDestinyProfileResponseProfileRecords = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseProfileRecords, _super);
    function DestinyResponsesDestinyProfileResponseProfileRecords() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsRecordsDestinyProfileRecordsComponent)
    ], DestinyResponsesDestinyProfileResponseProfileRecords.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseProfileRecords.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseProfileRecords.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseProfileRecords;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseProfileRecords };
// DestinyResponsesDestinyProfileResponseProfileStringVariables
/**
 * COMPONENT TYPE: StringVariables
**/
var DestinyResponsesDestinyProfileResponseProfileStringVariables = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseProfileStringVariables, _super);
    function DestinyResponsesDestinyProfileResponseProfileStringVariables() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsStringVariablesDestinyStringVariablesComponent)
    ], DestinyResponsesDestinyProfileResponseProfileStringVariables.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseProfileStringVariables.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseProfileStringVariables.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseProfileStringVariables;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseProfileStringVariables };
// DestinyResponsesDestinyProfileResponseProfileTransitoryData
/**
 * COMPONENT TYPE: Transitory
**/
var DestinyResponsesDestinyProfileResponseProfileTransitoryData = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseProfileTransitoryData, _super);
    function DestinyResponsesDestinyProfileResponseProfileTransitoryData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsProfilesDestinyProfileTransitoryComponent)
    ], DestinyResponsesDestinyProfileResponseProfileTransitoryData.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseProfileTransitoryData.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseProfileTransitoryData.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseProfileTransitoryData;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseProfileTransitoryData };
// DestinyResponsesDestinyProfileResponseVendorReceipts
/**
 * Recent, refundable purchases you have made from vendors. When will you use it? Couldn't say...
 * COMPONENT TYPE: VendorReceipts
**/
var DestinyResponsesDestinyProfileResponseVendorReceipts = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponseVendorReceipts, _super);
    function DestinyResponsesDestinyProfileResponseVendorReceipts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesProfilesDestinyVendorReceiptsComponent)
    ], DestinyResponsesDestinyProfileResponseVendorReceipts.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyProfileResponseVendorReceipts.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyProfileResponseVendorReceipts.prototype, "privacy", void 0);
    return DestinyResponsesDestinyProfileResponseVendorReceipts;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponseVendorReceipts };
// DestinyResponsesDestinyProfileResponse
/**
 * The response for GetDestinyProfile, with components for character and item-level data.
**/
var DestinyResponsesDestinyProfileResponse = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyProfileResponse, _super);
    function DestinyResponsesDestinyProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseCharacterActivities)
    ], DestinyResponsesDestinyProfileResponse.prototype, "characterActivities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseCharacterCollectibles)
    ], DestinyResponsesDestinyProfileResponse.prototype, "characterCollectibles", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups)
    ], DestinyResponsesDestinyProfileResponse.prototype, "characterCurrencyLookups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseCharacterEquipment)
    ], DestinyResponsesDestinyProfileResponse.prototype, "characterEquipment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseCharacterInventories)
    ], DestinyResponsesDestinyProfileResponse.prototype, "characterInventories", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseCharacterKiosks)
    ], DestinyResponsesDestinyProfileResponse.prototype, "characterKiosks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseCharacterPlugSets)
    ], DestinyResponsesDestinyProfileResponse.prototype, "characterPlugSets", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseCharacterPresentationNodes)
    ], DestinyResponsesDestinyProfileResponse.prototype, "characterPresentationNodes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseCharacterProgressions)
    ], DestinyResponsesDestinyProfileResponse.prototype, "characterProgressions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseCharacterRecords)
    ], DestinyResponsesDestinyProfileResponse.prototype, "characterRecords", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseCharacterRenderData)
    ], DestinyResponsesDestinyProfileResponse.prototype, "characterRenderData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseCharacterStringVariables)
    ], DestinyResponsesDestinyProfileResponse.prototype, "characterStringVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyBaseItemComponentSetOfuint32 }),
        __metadata("design:type", Map)
    ], DestinyResponsesDestinyProfileResponse.prototype, "characterUninstancedItemComponents", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseCharacters)
    ], DestinyResponsesDestinyProfileResponse.prototype, "characters", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseItemComponents)
    ], DestinyResponsesDestinyProfileResponse.prototype, "itemComponents", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseMetrics)
    ], DestinyResponsesDestinyProfileResponse.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponsePlatformSilver)
    ], DestinyResponsesDestinyProfileResponse.prototype, "platformSilver", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseProfile)
    ], DestinyResponsesDestinyProfileResponse.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseProfileCollectibles)
    ], DestinyResponsesDestinyProfileResponse.prototype, "profileCollectibles", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseProfileCurrencies)
    ], DestinyResponsesDestinyProfileResponse.prototype, "profileCurrencies", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseProfileInventory)
    ], DestinyResponsesDestinyProfileResponse.prototype, "profileInventory", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseProfileKiosks)
    ], DestinyResponsesDestinyProfileResponse.prototype, "profileKiosks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseProfilePlugSets)
    ], DestinyResponsesDestinyProfileResponse.prototype, "profilePlugSets", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseProfilePresentationNodes)
    ], DestinyResponsesDestinyProfileResponse.prototype, "profilePresentationNodes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseProfileProgression)
    ], DestinyResponsesDestinyProfileResponse.prototype, "profileProgression", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseProfileRecords)
    ], DestinyResponsesDestinyProfileResponse.prototype, "profileRecords", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseProfileStringVariables)
    ], DestinyResponsesDestinyProfileResponse.prototype, "profileStringVariables", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseProfileTransitoryData)
    ], DestinyResponsesDestinyProfileResponse.prototype, "profileTransitoryData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyProfileResponseVendorReceipts)
    ], DestinyResponsesDestinyProfileResponse.prototype, "vendorReceipts", void 0);
    return DestinyResponsesDestinyProfileResponse;
}(SpeakeasyBase));
export { DestinyResponsesDestinyProfileResponse };
