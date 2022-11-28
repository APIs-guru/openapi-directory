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
import { DestinyMilestonesDestinyMilestoneChallengeActivity } from "./destinymilestonesdestinymilestonechallengeactivity";
import { DestinyMilestonesDestinyMilestoneQuest } from "./destinymilestonesdestinymilestonequest";
import { DestinyMilestonesDestinyMilestoneRewardCategory } from "./destinymilestonesdestinymilestonerewardcategory";
import { DestinyMilestonesDestinyMilestoneVendor } from "./destinymilestonesdestinymilestonevendor";
// DestinyMilestonesDestinyMilestone
/**
 * Represents a runtime instance of a user's milestone status. Live Milestone data should be combined with DestinyMilestoneDefinition data to show the user a picture of what is available for them to do in the game, and their status in regards to said "things to do." Consider it a big, wonky to-do list, or Advisors 3.0 for those who remember the Destiny 1 API.
**/
var DestinyMilestonesDestinyMilestone = /** @class */ (function (_super) {
    __extends(DestinyMilestonesDestinyMilestone, _super);
    function DestinyMilestonesDestinyMilestone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneChallengeActivity }),
        __metadata("design:type", Array)
    ], DestinyMilestonesDestinyMilestone.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneQuest }),
        __metadata("design:type", Array)
    ], DestinyMilestonesDestinyMilestone.prototype, "availableQuests", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DestinyMilestonesDestinyMilestone.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyMilestone.prototype, "milestoneHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyMilestone.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneRewardCategory }),
        __metadata("design:type", Array)
    ], DestinyMilestonesDestinyMilestone.prototype, "rewards", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DestinyMilestonesDestinyMilestone.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DestinyMilestonesDestinyMilestone.prototype, "values", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyMilestonesDestinyMilestone.prototype, "vendorHashes", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneVendor }),
        __metadata("design:type", Array)
    ], DestinyMilestonesDestinyMilestone.prototype, "vendors", void 0);
    return DestinyMilestonesDestinyMilestone;
}(SpeakeasyBase));
export { DestinyMilestonesDestinyMilestone };
