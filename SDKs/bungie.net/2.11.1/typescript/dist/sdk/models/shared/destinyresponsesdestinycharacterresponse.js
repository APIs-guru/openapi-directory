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
import { DestinyEntitiesCharactersDestinyCharacterComponent } from "./destinyentitiescharactersdestinycharactercomponent";
import { DestinyComponentsCollectiblesDestinyCollectiblesComponent } from "./destinycomponentscollectiblesdestinycollectiblescomponent";
import { DestinyComponentsInventoryDestinyCurrenciesComponent } from "./destinycomponentsinventorydestinycurrenciescomponent";
import { DestinyEntitiesInventoryDestinyInventoryComponent } from "./destinyentitiesinventorydestinyinventorycomponent";
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
import { DestinyComponentsKiosksDestinyKiosksComponent } from "./destinycomponentskiosksdestinykioskscomponent";
import { DestinyComponentsPlugSetsDestinyPlugSetsComponent } from "./destinycomponentsplugsetsdestinyplugsetscomponent";
import { DestinyComponentsPresentationDestinyPresentationNodesComponent } from "./destinycomponentspresentationdestinypresentationnodescomponent";
import { DestinyEntitiesCharactersDestinyCharacterProgressionComponent } from "./destinyentitiescharactersdestinycharacterprogressioncomponent";
import { DestinyComponentsRecordsDestinyCharacterRecordsComponent } from "./destinycomponentsrecordsdestinycharacterrecordscomponent";
import { DestinyEntitiesCharactersDestinyCharacterRenderComponent } from "./destinyentitiescharactersdestinycharacterrendercomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent } from "./dictionarycomponentresponseofuint32anddestinyitemobjectivescomponent";
// DestinyResponsesDestinyCharacterResponseActivities
/**
 * Activity data - info about current activities available to the player.
 * COMPONENT TYPE: CharacterActivities
**/
var DestinyResponsesDestinyCharacterResponseActivities = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponseActivities, _super);
    function DestinyResponsesDestinyCharacterResponseActivities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesCharactersDestinyCharacterActivitiesComponent)
    ], DestinyResponsesDestinyCharacterResponseActivities.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyCharacterResponseActivities.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyCharacterResponseActivities.prototype, "privacy", void 0);
    return DestinyResponsesDestinyCharacterResponseActivities;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponseActivities };
// DestinyResponsesDestinyCharacterResponseCharacter
/**
 * Base information about the character in question.
 * COMPONENT TYPE: Characters
**/
var DestinyResponsesDestinyCharacterResponseCharacter = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponseCharacter, _super);
    function DestinyResponsesDestinyCharacterResponseCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesCharactersDestinyCharacterComponent)
    ], DestinyResponsesDestinyCharacterResponseCharacter.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyCharacterResponseCharacter.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyCharacterResponseCharacter.prototype, "privacy", void 0);
    return DestinyResponsesDestinyCharacterResponseCharacter;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponseCharacter };
// DestinyResponsesDestinyCharacterResponseCollectibles
/**
 * COMPONENT TYPE: Collectibles
**/
var DestinyResponsesDestinyCharacterResponseCollectibles = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponseCollectibles, _super);
    function DestinyResponsesDestinyCharacterResponseCollectibles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsCollectiblesDestinyCollectiblesComponent)
    ], DestinyResponsesDestinyCharacterResponseCollectibles.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyCharacterResponseCollectibles.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyCharacterResponseCollectibles.prototype, "privacy", void 0);
    return DestinyResponsesDestinyCharacterResponseCollectibles;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponseCollectibles };
// DestinyResponsesDestinyCharacterResponseCurrencyLookups
/**
 * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
 * COMPONENT TYPE: CurrencyLookups
**/
var DestinyResponsesDestinyCharacterResponseCurrencyLookups = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponseCurrencyLookups, _super);
    function DestinyResponsesDestinyCharacterResponseCurrencyLookups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsInventoryDestinyCurrenciesComponent)
    ], DestinyResponsesDestinyCharacterResponseCurrencyLookups.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyCharacterResponseCurrencyLookups.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyCharacterResponseCurrencyLookups.prototype, "privacy", void 0);
    return DestinyResponsesDestinyCharacterResponseCurrencyLookups;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponseCurrencyLookups };
// DestinyResponsesDestinyCharacterResponseEquipment
/**
 * Equipped items on the character.
 * COMPONENT TYPE: CharacterEquipment
**/
var DestinyResponsesDestinyCharacterResponseEquipment = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponseEquipment, _super);
    function DestinyResponsesDestinyCharacterResponseEquipment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesInventoryDestinyInventoryComponent)
    ], DestinyResponsesDestinyCharacterResponseEquipment.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyCharacterResponseEquipment.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyCharacterResponseEquipment.prototype, "privacy", void 0);
    return DestinyResponsesDestinyCharacterResponseEquipment;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponseEquipment };
// DestinyResponsesDestinyCharacterResponseInventory
/**
 * The character-level non-equipped inventory items.
 * COMPONENT TYPE: CharacterInventories
**/
var DestinyResponsesDestinyCharacterResponseInventory = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponseInventory, _super);
    function DestinyResponsesDestinyCharacterResponseInventory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesInventoryDestinyInventoryComponent)
    ], DestinyResponsesDestinyCharacterResponseInventory.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyCharacterResponseInventory.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyCharacterResponseInventory.prototype, "privacy", void 0);
    return DestinyResponsesDestinyCharacterResponseInventory;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponseInventory };
// DestinyResponsesDestinyCharacterResponseItemComponents
/**
 * The set of components belonging to the player's instanced items.
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
**/
var DestinyResponsesDestinyCharacterResponseItemComponents = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponseItemComponents, _super);
    function DestinyResponsesDestinyCharacterResponseItemComponents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent)
    ], DestinyResponsesDestinyCharacterResponseItemComponents.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent)
    ], DestinyResponsesDestinyCharacterResponseItemComponents.prototype, "objectives", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemPerksComponent)
    ], DestinyResponsesDestinyCharacterResponseItemComponents.prototype, "perks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent)
    ], DestinyResponsesDestinyCharacterResponseItemComponents.prototype, "plugObjectives", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent)
    ], DestinyResponsesDestinyCharacterResponseItemComponents.prototype, "plugStates", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemRenderComponent)
    ], DestinyResponsesDestinyCharacterResponseItemComponents.prototype, "renderData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent)
    ], DestinyResponsesDestinyCharacterResponseItemComponents.prototype, "reusablePlugs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent)
    ], DestinyResponsesDestinyCharacterResponseItemComponents.prototype, "sockets", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemStatsComponent)
    ], DestinyResponsesDestinyCharacterResponseItemComponents.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent)
    ], DestinyResponsesDestinyCharacterResponseItemComponents.prototype, "talentGrids", void 0);
    return DestinyResponsesDestinyCharacterResponseItemComponents;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponseItemComponents };
// DestinyResponsesDestinyCharacterResponseKiosks
/**
 * Items available from Kiosks that are available to this specific character.
 * COMPONENT TYPE: Kiosks
**/
var DestinyResponsesDestinyCharacterResponseKiosks = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponseKiosks, _super);
    function DestinyResponsesDestinyCharacterResponseKiosks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsKiosksDestinyKiosksComponent)
    ], DestinyResponsesDestinyCharacterResponseKiosks.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyCharacterResponseKiosks.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyCharacterResponseKiosks.prototype, "privacy", void 0);
    return DestinyResponsesDestinyCharacterResponseKiosks;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponseKiosks };
// DestinyResponsesDestinyCharacterResponsePlugSets
/**
 * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are scoped to this character.
 * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
 * COMPONENT TYPE: ItemSockets
**/
var DestinyResponsesDestinyCharacterResponsePlugSets = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponsePlugSets, _super);
    function DestinyResponsesDestinyCharacterResponsePlugSets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsPlugSetsDestinyPlugSetsComponent)
    ], DestinyResponsesDestinyCharacterResponsePlugSets.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyCharacterResponsePlugSets.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyCharacterResponsePlugSets.prototype, "privacy", void 0);
    return DestinyResponsesDestinyCharacterResponsePlugSets;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponsePlugSets };
// DestinyResponsesDestinyCharacterResponsePresentationNodes
/**
 * COMPONENT TYPE: PresentationNodes
**/
var DestinyResponsesDestinyCharacterResponsePresentationNodes = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponsePresentationNodes, _super);
    function DestinyResponsesDestinyCharacterResponsePresentationNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsPresentationDestinyPresentationNodesComponent)
    ], DestinyResponsesDestinyCharacterResponsePresentationNodes.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyCharacterResponsePresentationNodes.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyCharacterResponsePresentationNodes.prototype, "privacy", void 0);
    return DestinyResponsesDestinyCharacterResponsePresentationNodes;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponsePresentationNodes };
// DestinyResponsesDestinyCharacterResponseProgressions
/**
 * Character progression data, including Milestones.
 * COMPONENT TYPE: CharacterProgressions
**/
var DestinyResponsesDestinyCharacterResponseProgressions = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponseProgressions, _super);
    function DestinyResponsesDestinyCharacterResponseProgressions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesCharactersDestinyCharacterProgressionComponent)
    ], DestinyResponsesDestinyCharacterResponseProgressions.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyCharacterResponseProgressions.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyCharacterResponseProgressions.prototype, "privacy", void 0);
    return DestinyResponsesDestinyCharacterResponseProgressions;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponseProgressions };
// DestinyResponsesDestinyCharacterResponseRecords
/**
 * COMPONENT TYPE: Records
**/
var DestinyResponsesDestinyCharacterResponseRecords = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponseRecords, _super);
    function DestinyResponsesDestinyCharacterResponseRecords() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsRecordsDestinyCharacterRecordsComponent)
    ], DestinyResponsesDestinyCharacterResponseRecords.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyCharacterResponseRecords.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyCharacterResponseRecords.prototype, "privacy", void 0);
    return DestinyResponsesDestinyCharacterResponseRecords;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponseRecords };
// DestinyResponsesDestinyCharacterResponseRenderData
/**
 * Character rendering data - a minimal set of information about equipment and dyes used for rendering.
 * COMPONENT TYPE: CharacterRenderData
**/
var DestinyResponsesDestinyCharacterResponseRenderData = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponseRenderData, _super);
    function DestinyResponsesDestinyCharacterResponseRenderData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesCharactersDestinyCharacterRenderComponent)
    ], DestinyResponsesDestinyCharacterResponseRenderData.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyCharacterResponseRenderData.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyCharacterResponseRenderData.prototype, "privacy", void 0);
    return DestinyResponsesDestinyCharacterResponseRenderData;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponseRenderData };
// DestinyResponsesDestinyCharacterResponseUninstancedItemComponents
/**
 * The set of components belonging to the player's UNinstanced items. Because apparently now those too can have information relevant to the character's state.
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
**/
var DestinyResponsesDestinyCharacterResponseUninstancedItemComponents = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponseUninstancedItemComponents, _super);
    function DestinyResponsesDestinyCharacterResponseUninstancedItemComponents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent)
    ], DestinyResponsesDestinyCharacterResponseUninstancedItemComponents.prototype, "objectives", void 0);
    return DestinyResponsesDestinyCharacterResponseUninstancedItemComponents;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponseUninstancedItemComponents };
// DestinyResponsesDestinyCharacterResponse
/**
 * The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.
**/
var DestinyResponsesDestinyCharacterResponse = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCharacterResponse, _super);
    function DestinyResponsesDestinyCharacterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCharacterResponseActivities)
    ], DestinyResponsesDestinyCharacterResponse.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCharacterResponseCharacter)
    ], DestinyResponsesDestinyCharacterResponse.prototype, "character", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCharacterResponseCollectibles)
    ], DestinyResponsesDestinyCharacterResponse.prototype, "collectibles", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCharacterResponseCurrencyLookups)
    ], DestinyResponsesDestinyCharacterResponse.prototype, "currencyLookups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCharacterResponseEquipment)
    ], DestinyResponsesDestinyCharacterResponse.prototype, "equipment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCharacterResponseInventory)
    ], DestinyResponsesDestinyCharacterResponse.prototype, "inventory", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCharacterResponseItemComponents)
    ], DestinyResponsesDestinyCharacterResponse.prototype, "itemComponents", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCharacterResponseKiosks)
    ], DestinyResponsesDestinyCharacterResponse.prototype, "kiosks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCharacterResponsePlugSets)
    ], DestinyResponsesDestinyCharacterResponse.prototype, "plugSets", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCharacterResponsePresentationNodes)
    ], DestinyResponsesDestinyCharacterResponse.prototype, "presentationNodes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCharacterResponseProgressions)
    ], DestinyResponsesDestinyCharacterResponse.prototype, "progressions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCharacterResponseRecords)
    ], DestinyResponsesDestinyCharacterResponse.prototype, "records", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCharacterResponseRenderData)
    ], DestinyResponsesDestinyCharacterResponse.prototype, "renderData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCharacterResponseUninstancedItemComponents)
    ], DestinyResponsesDestinyCharacterResponse.prototype, "uninstancedItemComponents", void 0);
    return DestinyResponsesDestinyCharacterResponse;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCharacterResponse };
