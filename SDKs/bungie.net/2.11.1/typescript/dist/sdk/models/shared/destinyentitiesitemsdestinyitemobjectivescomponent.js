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
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";
// DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective
/**
 * I may regret naming it this way - but this represents when an item has an objective that doesn't serve a beneficial purpose, but rather is used for "flavor" or additional information. For instance, when Emblems track specific stats, those stats are represented as Objectives on the item.
**/
var DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective = /** @class */ (function (_super) {
    __extends(DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective, _super);
    function DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective.prototype, "activityHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective.prototype, "complete", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective.prototype, "completionValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective.prototype, "destinationHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective.prototype, "objectiveHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective.prototype, "visible", void 0);
    return DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective;
}(SpeakeasyBase));
export { DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective };
// DestinyEntitiesItemsDestinyItemObjectivesComponent
/**
 * Items can have objectives and progression. When you request this block, you will obtain information about any Objectives and progression tied to this item.
**/
var DestinyEntitiesItemsDestinyItemObjectivesComponent = /** @class */ (function (_super) {
    __extends(DestinyEntitiesItemsDestinyItemObjectivesComponent, _super);
    function DestinyEntitiesItemsDestinyItemObjectivesComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DestinyEntitiesItemsDestinyItemObjectivesComponent.prototype, "dateCompleted", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesItemsDestinyItemObjectivesComponentFlavorObjective)
    ], DestinyEntitiesItemsDestinyItemObjectivesComponent.prototype, "flavorObjective", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyQuestsDestinyObjectiveProgress }),
        __metadata("design:type", Array)
    ], DestinyEntitiesItemsDestinyItemObjectivesComponent.prototype, "objectives", void 0);
    return DestinyEntitiesItemsDestinyItemObjectivesComponent;
}(SpeakeasyBase));
export { DestinyEntitiesItemsDestinyItemObjectivesComponent };
