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
import { DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent } from "./dictionarycomponentresponseofuint32anddestinyiteminstancecomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent } from "./dictionarycomponentresponseofuint32anddestinyitemobjectivescomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent } from "./dictionarycomponentresponseofuint32anddestinyitemperkscomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent } from "./dictionarycomponentresponseofuint32anddestinyitemplugobjectivescomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from "./dictionarycomponentresponseofuint32anddestinyitemplugcomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent } from "./dictionarycomponentresponseofuint32anddestinyitemrendercomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent } from "./dictionarycomponentresponseofuint32anddestinyitemreusableplugscomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent } from "./dictionarycomponentresponseofuint32anddestinyitemsocketscomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent } from "./dictionarycomponentresponseofuint32anddestinyitemstatscomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent } from "./dictionarycomponentresponseofuint32anddestinyitemtalentgridcomponent";
import { DestinyComponentsCollectiblesDestinyCollectiblesComponent } from "./destinycomponentscollectiblesdestinycollectiblescomponent";
// DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents
/**
 * Item components, keyed by the item hash of the items pointed at collectibles found under the requested Presentation Node.
 * NOTE: I had a lot of hemming and hawing about whether these should be keyed by collectible hash or item hash... but ultimately having it be keyed by item hash meant that UI that already uses DestinyItemComponentSet data wouldn't have to have a special override to do the collectible -> item lookup once you delve into an item's details, and it also meant that you didn't have to remember that the Hash being used as the key for plugSets was different from the Hash being used for the other Dictionaries. As a result, using the Item Hash felt like the least crappy solution.
 * We may all come to regret this decision. We will see.
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
**/
var DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents, _super);
    function DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemInstanceComponent)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents.prototype, "objectives", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents.prototype, "perks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemPlugObjectivesComponent)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents.prototype, "plugObjectives", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents.prototype, "plugStates", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemRenderComponent)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents.prototype, "renderData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemReusablePlugsComponent)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents.prototype, "reusablePlugs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemSocketsComponent)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents.prototype, "sockets", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemStatsComponent)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemTalentGridComponent)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents.prototype, "talentGrids", void 0);
    return DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents };
// DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles
/**
 * COMPONENT TYPE: Collectibles
**/
var DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles, _super);
    function DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsCollectiblesDestinyCollectiblesComponent)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles.prototype, "privacy", void 0);
    return DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles };
// DestinyResponsesDestinyCollectibleNodeDetailResponse
/**
 * Returns the detailed information about a Collectible Presentation Node and any Collectibles that are direct descendants.
**/
var DestinyResponsesDestinyCollectibleNodeDetailResponse = /** @class */ (function (_super) {
    __extends(DestinyResponsesDestinyCollectibleNodeDetailResponse, _super);
    function DestinyResponsesDestinyCollectibleNodeDetailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibleItemComponents)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponse.prototype, "collectibleItemComponents", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyResponsesDestinyCollectibleNodeDetailResponseCollectibles)
    ], DestinyResponsesDestinyCollectibleNodeDetailResponse.prototype, "collectibles", void 0);
    return DestinyResponsesDestinyCollectibleNodeDetailResponse;
}(SpeakeasyBase));
export { DestinyResponsesDestinyCollectibleNodeDetailResponse };
