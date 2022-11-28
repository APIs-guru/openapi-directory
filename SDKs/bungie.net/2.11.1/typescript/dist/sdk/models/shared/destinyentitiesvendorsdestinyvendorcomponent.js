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
// DestinyEntitiesVendorsDestinyVendorComponentProgression
/**
 * If the Vendor has a related Reputation, this is the Progression data that represents the character's Reputation level with this Vendor.
**/
var DestinyEntitiesVendorsDestinyVendorComponentProgression = /** @class */ (function (_super) {
    __extends(DestinyEntitiesVendorsDestinyVendorComponentProgression, _super);
    function DestinyEntitiesVendorsDestinyVendorComponentProgression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponentProgression.prototype, "currentProgress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponentProgression.prototype, "currentResetCount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponentProgression.prototype, "dailyLimit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponentProgression.prototype, "dailyProgress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponentProgression.prototype, "level", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponentProgression.prototype, "levelCap", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponentProgression.prototype, "nextLevelAt", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponentProgression.prototype, "progressToNextLevel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponentProgression.prototype, "progressionHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyEntitiesVendorsDestinyVendorComponentProgression.prototype, "rewardItemStates", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyDestinyProgressionResetEntry }),
        __metadata("design:type", Array)
    ], DestinyEntitiesVendorsDestinyVendorComponentProgression.prototype, "seasonResets", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponentProgression.prototype, "stepIndex", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponentProgression.prototype, "weeklyLimit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponentProgression.prototype, "weeklyProgress", void 0);
    return DestinyEntitiesVendorsDestinyVendorComponentProgression;
}(SpeakeasyBase));
export { DestinyEntitiesVendorsDestinyVendorComponentProgression };
// DestinyEntitiesVendorsDestinyVendorComponent
/**
 * This component contains essential/summary information about the vendor.
**/
var DestinyEntitiesVendorsDestinyVendorComponent = /** @class */ (function (_super) {
    __extends(DestinyEntitiesVendorsDestinyVendorComponent, _super);
    function DestinyEntitiesVendorsDestinyVendorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyEntitiesVendorsDestinyVendorComponent.prototype, "canPurchase", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyEntitiesVendorsDestinyVendorComponent.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DestinyEntitiesVendorsDestinyVendorComponent.prototype, "nextRefreshDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyEntitiesVendorsDestinyVendorComponentProgression)
    ], DestinyEntitiesVendorsDestinyVendorComponent.prototype, "progression", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponent.prototype, "seasonalRank", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponent.prototype, "vendorHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyEntitiesVendorsDestinyVendorComponent.prototype, "vendorLocationIndex", void 0);
    return DestinyEntitiesVendorsDestinyVendorComponent;
}(SpeakeasyBase));
export { DestinyEntitiesVendorsDestinyVendorComponent };
