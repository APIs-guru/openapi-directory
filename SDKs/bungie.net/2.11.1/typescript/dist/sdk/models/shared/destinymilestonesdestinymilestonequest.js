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
import { DestinyMilestonesDestinyMilestoneActivityVariant } from "./destinymilestonesdestinymilestoneactivityvariant";
import { DestinyChallengesDestinyChallengeStatus } from "./destinychallengesdestinychallengestatus";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";
// DestinyMilestonesDestinyMilestoneQuestActivity
/**
 * *IF* the Milestone has an active Activity that can give you greater details about what you need to do, it will be returned here. Remember to associate this with the DestinyMilestoneDefinition's activities to get details about the activity, including what specific quest it is related to if you have multiple quests to choose from.
**/
var DestinyMilestonesDestinyMilestoneQuestActivity = /** @class */ (function (_super) {
    __extends(DestinyMilestonesDestinyMilestoneQuestActivity, _super);
    function DestinyMilestonesDestinyMilestoneQuestActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyMilestoneQuestActivity.prototype, "activityHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyMilestoneQuestActivity.prototype, "activityModeHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyMilestoneQuestActivity.prototype, "activityModeType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyMilestonesDestinyMilestoneQuestActivity.prototype, "modifierHashes", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyMilestonesDestinyMilestoneActivityVariant }),
        __metadata("design:type", Array)
    ], DestinyMilestonesDestinyMilestoneQuestActivity.prototype, "variants", void 0);
    return DestinyMilestonesDestinyMilestoneQuestActivity;
}(SpeakeasyBase));
export { DestinyMilestonesDestinyMilestoneQuestActivity };
// DestinyMilestonesDestinyMilestoneQuestStatus
/**
 * The current status of the quest for the character making the request.
**/
var DestinyMilestonesDestinyMilestoneQuestStatus = /** @class */ (function (_super) {
    __extends(DestinyMilestonesDestinyMilestoneQuestStatus, _super);
    function DestinyMilestonesDestinyMilestoneQuestStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyMilestonesDestinyMilestoneQuestStatus.prototype, "completed", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyMilestoneQuestStatus.prototype, "itemInstanceId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyMilestoneQuestStatus.prototype, "questHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyMilestonesDestinyMilestoneQuestStatus.prototype, "redeemed", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyMilestonesDestinyMilestoneQuestStatus.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyMilestoneQuestStatus.prototype, "stepHash", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyQuestsDestinyObjectiveProgress }),
        __metadata("design:type", Array)
    ], DestinyMilestonesDestinyMilestoneQuestStatus.prototype, "stepObjectives", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyMilestonesDestinyMilestoneQuestStatus.prototype, "tracked", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyMilestoneQuestStatus.prototype, "vendorHash", void 0);
    return DestinyMilestonesDestinyMilestoneQuestStatus;
}(SpeakeasyBase));
export { DestinyMilestonesDestinyMilestoneQuestStatus };
// DestinyMilestonesDestinyMilestoneQuest
/**
 * If a Milestone has one or more Quests, this will contain the live information for the character's status with one of those quests.
**/
var DestinyMilestonesDestinyMilestoneQuest = /** @class */ (function (_super) {
    __extends(DestinyMilestonesDestinyMilestoneQuest, _super);
    function DestinyMilestonesDestinyMilestoneQuest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyMilestonesDestinyMilestoneQuestActivity)
    ], DestinyMilestonesDestinyMilestoneQuest.prototype, "activity", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyChallengesDestinyChallengeStatus }),
        __metadata("design:type", Array)
    ], DestinyMilestonesDestinyMilestoneQuest.prototype, "challenges", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyMilestonesDestinyMilestoneQuest.prototype, "questItemHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyMilestonesDestinyMilestoneQuestStatus)
    ], DestinyMilestonesDestinyMilestoneQuest.prototype, "status", void 0);
    return DestinyMilestonesDestinyMilestoneQuest;
}(SpeakeasyBase));
export { DestinyMilestonesDestinyMilestoneQuest };
