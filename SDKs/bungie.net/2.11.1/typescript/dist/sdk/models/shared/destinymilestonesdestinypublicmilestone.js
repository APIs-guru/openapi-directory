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
import { DestinyMilestonesDestinyPublicMilestoneChallengeActivity } from "./destinymilestonesdestinypublicmilestonechallengeactivity";
import { DestinyMilestonesDestinyPublicMilestoneQuest } from "./destinymilestonesdestinypublicmilestonequest";
import { DestinyMilestonesDestinyPublicMilestoneVendor } from "./destinymilestonesdestinypublicmilestonevendor";
// DestinyMilestonesDestinyPublicMilestone
/**
 * Information about milestones, presented in a character state-agnostic manner. Combine this data with DestinyMilestoneDefinition to get a full picture of the milestone, which is basically a checklist of things to do in the game. Think of this as GetPublicAdvisors 3.0, for those who used the Destiny 1 API.
**/
var DestinyMilestonesDestinyPublicMilestone = /** @class */ (function (_super) {
    __extends(DestinyMilestonesDestinyPublicMilestone, _super);
    function DestinyMilestonesDestinyPublicMilestone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyPublicMilestoneChallengeActivity }),
        __metadata("design:type", Array)
    ], DestinyMilestonesDestinyPublicMilestone.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyPublicMilestoneQuest }),
        __metadata("design:type", Array)
    ], DestinyMilestonesDestinyPublicMilestone.prototype, "availableQuests", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DestinyMilestonesDestinyPublicMilestone.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyPublicMilestone.prototype, "milestoneHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyPublicMilestone.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Date)
    ], DestinyMilestonesDestinyPublicMilestone.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyMilestonesDestinyPublicMilestone.prototype, "vendorHashes", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyPublicMilestoneVendor }),
        __metadata("design:type", Array)
    ], DestinyMilestonesDestinyPublicMilestone.prototype, "vendors", void 0);
    return DestinyMilestonesDestinyPublicMilestone;
}(SpeakeasyBase));
export { DestinyMilestonesDestinyPublicMilestone };
