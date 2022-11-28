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
// DestinyComponentsKiosksDestinyKioskItemFlavorObjective
/**
 * I may regret naming it this way - but this represents when an item has an objective that doesn't serve a beneficial purpose, but rather is used for "flavor" or additional information. For instance, when Emblems track specific stats, those stats are represented as Objectives on the item.
**/
var DestinyComponentsKiosksDestinyKioskItemFlavorObjective = /** @class */ (function (_super) {
    __extends(DestinyComponentsKiosksDestinyKioskItemFlavorObjective, _super);
    function DestinyComponentsKiosksDestinyKioskItemFlavorObjective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsKiosksDestinyKioskItemFlavorObjective.prototype, "activityHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyComponentsKiosksDestinyKioskItemFlavorObjective.prototype, "complete", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsKiosksDestinyKioskItemFlavorObjective.prototype, "completionValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsKiosksDestinyKioskItemFlavorObjective.prototype, "destinationHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsKiosksDestinyKioskItemFlavorObjective.prototype, "objectiveHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsKiosksDestinyKioskItemFlavorObjective.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyComponentsKiosksDestinyKioskItemFlavorObjective.prototype, "visible", void 0);
    return DestinyComponentsKiosksDestinyKioskItemFlavorObjective;
}(SpeakeasyBase));
export { DestinyComponentsKiosksDestinyKioskItemFlavorObjective };
var DestinyComponentsKiosksDestinyKioskItem = /** @class */ (function (_super) {
    __extends(DestinyComponentsKiosksDestinyKioskItem, _super);
    function DestinyComponentsKiosksDestinyKioskItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyComponentsKiosksDestinyKioskItem.prototype, "canAcquire", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyComponentsKiosksDestinyKioskItem.prototype, "failureIndexes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyComponentsKiosksDestinyKioskItemFlavorObjective)
    ], DestinyComponentsKiosksDestinyKioskItem.prototype, "flavorObjective", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyComponentsKiosksDestinyKioskItem.prototype, "index", void 0);
    return DestinyComponentsKiosksDestinyKioskItem;
}(SpeakeasyBase));
export { DestinyComponentsKiosksDestinyKioskItem };
