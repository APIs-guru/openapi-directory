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
import { DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent } from "./dictionarycomponentresponseofint32anddestinyiteminstancecomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent } from "./dictionarycomponentresponseofint32anddestinyitemobjectivescomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemPerksComponent } from "./dictionarycomponentresponseofint32anddestinyitemperkscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent } from "./dictionarycomponentresponseofint32anddestinyitemplugobjectivescomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from "./dictionarycomponentresponseofuint32anddestinyitemplugcomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemRenderComponent } from "./dictionarycomponentresponseofint32anddestinyitemrendercomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent } from "./dictionarycomponentresponseofint32anddestinyitemreusableplugscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent } from "./dictionarycomponentresponseofint32anddestinyitemsocketscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemStatsComponent } from "./dictionarycomponentresponseofint32anddestinyitemstatscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent } from "./dictionarycomponentresponseofint32anddestinyitemtalentgridcomponent";
var DestinyItemComponentSetOfint32 = /** @class */ (function (_super) {
    __extends(DestinyItemComponentSetOfint32, _super);
    function DestinyItemComponentSetOfint32() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent)
    ], DestinyItemComponentSetOfint32.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent)
    ], DestinyItemComponentSetOfint32.prototype, "objectives", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemPerksComponent)
    ], DestinyItemComponentSetOfint32.prototype, "perks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent)
    ], DestinyItemComponentSetOfint32.prototype, "plugObjectives", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent)
    ], DestinyItemComponentSetOfint32.prototype, "plugStates", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemRenderComponent)
    ], DestinyItemComponentSetOfint32.prototype, "renderData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent)
    ], DestinyItemComponentSetOfint32.prototype, "reusablePlugs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent)
    ], DestinyItemComponentSetOfint32.prototype, "sockets", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemStatsComponent)
    ], DestinyItemComponentSetOfint32.prototype, "stats", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent)
    ], DestinyItemComponentSetOfint32.prototype, "talentGrids", void 0);
    return DestinyItemComponentSetOfint32;
}(SpeakeasyBase));
export { DestinyItemComponentSetOfint32 };
