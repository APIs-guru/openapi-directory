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
import { DestinyMilestonesDestinyMilestoneActivityPhase } from "./destinymilestonesdestinymilestoneactivityphase";
// DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus
/**
 * An OPTIONAL component: if it makes sense to talk about this activity variant in terms of whether or not it has been completed or what progress you have made in it, this will be returned. Otherwise, this will be NULL.
**/
var DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus = /** @class */ (function (_super) {
    __extends(DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus, _super);
    function DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus.prototype, "completed", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneActivityPhase }),
        __metadata("design:type", Array)
    ], DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus.prototype, "phases", void 0);
    return DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus;
}(SpeakeasyBase));
export { DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus };
// DestinyMilestonesDestinyMilestoneActivityVariant
/**
 * Represents custom data that we know about an individual variant of an activity.
**/
var DestinyMilestonesDestinyMilestoneActivityVariant = /** @class */ (function (_super) {
    __extends(DestinyMilestonesDestinyMilestoneActivityVariant, _super);
    function DestinyMilestonesDestinyMilestoneActivityVariant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyMilestoneActivityVariant.prototype, "activityHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyMilestoneActivityVariant.prototype, "activityModeHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyMilestoneActivityVariant.prototype, "activityModeType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyMilestonesDestinyMilestoneActivityVariantCompletionStatus)
    ], DestinyMilestonesDestinyMilestoneActivityVariant.prototype, "completionStatus", void 0);
    return DestinyMilestonesDestinyMilestoneActivityVariant;
}(SpeakeasyBase));
export { DestinyMilestonesDestinyMilestoneActivityVariant };
