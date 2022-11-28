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
import { DestinyMilestonesDestinyMilestoneContentItemCategory } from "./destinymilestonesdestinymilestonecontentitemcategory";
import { DestinyMilestonesDestinyPublicMilestoneChallengeActivity } from "./destinymilestonesdestinypublicmilestonechallengeactivity";
import { DestinyMilestonesDestinyPublicMilestoneQuest } from "./destinymilestonesdestinypublicmilestonequest";
import { DestinyMilestonesDestinyPublicMilestoneVendor } from "./destinymilestonesdestinypublicmilestonevendor";
// TrendingTrendingEntryDestinyRitualEventContent
/**
 * A destiny event will not necessarily have milestone "custom content", but if it does the details will be here.
**/
var TrendingTrendingEntryDestinyRitualEventContent = /** @class */ (function (_super) {
    __extends(TrendingTrendingEntryDestinyRitualEventContent, _super);
    function TrendingTrendingEntryDestinyRitualEventContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TrendingTrendingEntryDestinyRitualEventContent.prototype, "about", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneContentItemCategory }),
        __metadata("design:type", Array)
    ], TrendingTrendingEntryDestinyRitualEventContent.prototype, "itemCategories", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TrendingTrendingEntryDestinyRitualEventContent.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], TrendingTrendingEntryDestinyRitualEventContent.prototype, "tips", void 0);
    return TrendingTrendingEntryDestinyRitualEventContent;
}(SpeakeasyBase));
export { TrendingTrendingEntryDestinyRitualEventContent };
// TrendingTrendingEntryDestinyRitualMilestoneDetails
/**
 * A destiny event does not necessarily have a related Milestone, but if it does the details will be returned here.
**/
var TrendingTrendingEntryDestinyRitualMilestoneDetails = /** @class */ (function (_super) {
    __extends(TrendingTrendingEntryDestinyRitualMilestoneDetails, _super);
    function TrendingTrendingEntryDestinyRitualMilestoneDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyPublicMilestoneChallengeActivity }),
        __metadata("design:type", Array)
    ], TrendingTrendingEntryDestinyRitualMilestoneDetails.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyPublicMilestoneQuest }),
        __metadata("design:type", Array)
    ], TrendingTrendingEntryDestinyRitualMilestoneDetails.prototype, "availableQuests", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], TrendingTrendingEntryDestinyRitualMilestoneDetails.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TrendingTrendingEntryDestinyRitualMilestoneDetails.prototype, "milestoneHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TrendingTrendingEntryDestinyRitualMilestoneDetails.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], TrendingTrendingEntryDestinyRitualMilestoneDetails.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], TrendingTrendingEntryDestinyRitualMilestoneDetails.prototype, "vendorHashes", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyPublicMilestoneVendor }),
        __metadata("design:type", Array)
    ], TrendingTrendingEntryDestinyRitualMilestoneDetails.prototype, "vendors", void 0);
    return TrendingTrendingEntryDestinyRitualMilestoneDetails;
}(SpeakeasyBase));
export { TrendingTrendingEntryDestinyRitualMilestoneDetails };
var TrendingTrendingEntryDestinyRitual = /** @class */ (function (_super) {
    __extends(TrendingTrendingEntryDestinyRitual, _super);
    function TrendingTrendingEntryDestinyRitual() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], TrendingTrendingEntryDestinyRitual.prototype, "dateEnd", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], TrendingTrendingEntryDestinyRitual.prototype, "dateStart", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TrendingTrendingEntryDestinyRitualEventContent)
    ], TrendingTrendingEntryDestinyRitual.prototype, "eventContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TrendingTrendingEntryDestinyRitual.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TrendingTrendingEntryDestinyRitual.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TrendingTrendingEntryDestinyRitualMilestoneDetails)
    ], TrendingTrendingEntryDestinyRitual.prototype, "milestoneDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TrendingTrendingEntryDestinyRitual.prototype, "subtitle", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TrendingTrendingEntryDestinyRitual.prototype, "title", void 0);
    return TrendingTrendingEntryDestinyRitual;
}(SpeakeasyBase));
export { TrendingTrendingEntryDestinyRitual };
