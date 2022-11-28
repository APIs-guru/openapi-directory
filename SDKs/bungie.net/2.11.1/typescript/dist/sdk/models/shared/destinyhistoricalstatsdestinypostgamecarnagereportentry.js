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
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from "./destinyhistoricalstatsdestinyhistoricalstatsvalue";
import { DestinyHistoricalStatsDestinyHistoricalWeaponStats } from "./destinyhistoricalstatsdestinyhistoricalweaponstats";
// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended
/**
 * Extended data extracted from the activity blob.
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsValue }),
        __metadata("design:type", Map)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended.prototype, "values", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalWeaponStats }),
        __metadata("design:type", Array)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended.prototype, "weapons", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended };
// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo
/**
 * Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo.prototype, "applicableMembershipTypes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo.prototype, "crossSaveOverride", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo.prototype, "iconPath", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo.prototype, "membershipId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo.prototype, "membershipType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo.prototype, "supplementalDisplayName", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo };
// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo
/**
 * Details about the player as they are known in game (platform display name, Destiny emblem)
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo.prototype, "applicableMembershipTypes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo.prototype, "crossSaveOverride", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo.prototype, "iconPath", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo.prototype, "membershipId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo.prototype, "membershipType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo.prototype, "supplementalDisplayName", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo };
// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer
/**
 * Identity details of the player
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerBungieNetUserInfo)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer.prototype, "bungieNetUserInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer.prototype, "characterClass", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer.prototype, "characterLevel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer.prototype, "clanName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer.prototype, "clanTag", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer.prototype, "classHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayerDestinyUserInfo)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer.prototype, "destinyUserInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer.prototype, "emblemHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer.prototype, "genderHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer.prototype, "lightLevel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer.prototype, "raceHash", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer };
// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic
/**
 * Basic stat value.
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic };
// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga
/**
 * Per game average for the statistic, if applicable
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga };
// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted
/**
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted };
// DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore
/**
 * Score of the player if available
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore.prototype, "activityId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreBasic)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScorePga)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore.prototype, "pga", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore.prototype, "statId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScoreWeighted)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore.prototype, "weighted", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore };
var DestinyHistoricalStatsDestinyPostGameCarnageReportEntry = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportEntry, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntry.prototype, "characterId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportEntryExtended)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntry.prototype, "extended", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportEntryPlayer)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntry.prototype, "player", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportEntryScore)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntry.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntry.prototype, "standing", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: DestinyHistoricalStatsDestinyHistoricalStatsValue }),
        __metadata("design:type", Map)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportEntry.prototype, "values", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportEntry;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportEntry };
