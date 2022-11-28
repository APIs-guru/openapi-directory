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
import { DestinyDestinyProgressionResetEntry } from "./destinydestinyprogressionresetentry";
import { DestinyDestinyTalentNode } from "./destinydestinytalentnode";
// DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression
/**
 * If the item has a progression, it will be detailed here. A progression means that the item can gain experience. Thresholds of experience are what determines whether and when a talent node can be activated.
**/
var DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression = /** @class */ (function (_super) {
    __extends(DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression, _super);
    function DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression.prototype, "currentProgress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression.prototype, "currentResetCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression.prototype, "dailyLimit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression.prototype, "dailyProgress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression.prototype, "levelCap", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression.prototype, "nextLevelAt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression.prototype, "progressToNextLevel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression.prototype, "progressionHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression.prototype, "rewardItemStates", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDestinyProgressionResetEntry }),
        __metadata("design:type", Array)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression.prototype, "seasonResets", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression.prototype, "stepIndex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression.prototype, "weeklyLimit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression.prototype, "weeklyProgress", void 0);
    return DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression;
}(SpeakeasyBase));
export { DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression };
// DestinyEntitiesItemsDestinyItemTalentGridComponent
/**
 * Well, we're here in Destiny 2, and Talent Grids are unfortunately still around.
 * The good news is that they're pretty much only being used for certain base information on items and for Builds/Subclasses. The bad news is that they still suck. If you really want this information, grab this component.
 * An important note is that talent grids are defined as such:
 * A Grid has 1:M Nodes, which has 1:M Steps.
 * Any given node can only have a single step active at one time, which represents the actual visual contents and effects of the Node (for instance, if you see a "Super Cool Bonus" node, the actual icon and text for the node is coming from the current Step of that node).
 * Nodes can be grouped into exclusivity sets *and* as of D2, exclusivity groups (which are collections of exclusivity sets that affect each other).
 * See DestinyTalentGridDefinition for more information. Brace yourself, the water's cold out there in the deep end.
**/
var DestinyEntitiesItemsDestinyItemTalentGridComponent = /** @class */ (function (_super) {
    __extends(DestinyEntitiesItemsDestinyItemTalentGridComponent, _super);
    function DestinyEntitiesItemsDestinyItemTalentGridComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesItemsDestinyItemTalentGridComponentGridProgression)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponent.prototype, "gridProgression", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponent.prototype, "isGridComplete", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDestinyTalentNode }),
        __metadata("design:type", Array)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponent.prototype, "nodes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemTalentGridComponent.prototype, "talentGridHash", void 0);
    return DestinyEntitiesItemsDestinyItemTalentGridComponent;
}(SpeakeasyBase));
export { DestinyEntitiesItemsDestinyItemTalentGridComponent };
