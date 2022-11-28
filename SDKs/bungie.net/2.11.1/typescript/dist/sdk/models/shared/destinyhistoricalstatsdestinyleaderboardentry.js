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
// DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo
/**
 * Details about the player as they are known on BungieNet. This will be undefined if the player has marked their credential private, or does not have a BungieNet account.
**/
var DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo, _super);
    function DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo.prototype, "applicableMembershipTypes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo.prototype, "crossSaveOverride", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo.prototype, "iconPath", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo.prototype, "membershipId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo.prototype, "membershipType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo.prototype, "supplementalDisplayName", void 0);
    return DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo };
// DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo
/**
 * Details about the player as they are known in game (platform display name, Destiny emblem)
**/
var DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo, _super);
    function DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo.prototype, "applicableMembershipTypes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo.prototype, "crossSaveOverride", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo.prototype, "iconPath", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo.prototype, "isPublic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo.prototype, "membershipId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo.prototype, "membershipType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo.prototype, "supplementalDisplayName", void 0);
    return DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo };
// DestinyHistoricalStatsDestinyLeaderboardEntryPlayer
/**
 * Identity details of the player
**/
var DestinyHistoricalStatsDestinyLeaderboardEntryPlayer = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyLeaderboardEntryPlayer, _super);
    function DestinyHistoricalStatsDestinyLeaderboardEntryPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyLeaderboardEntryPlayerBungieNetUserInfo)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayer.prototype, "bungieNetUserInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayer.prototype, "characterClass", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayer.prototype, "characterLevel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayer.prototype, "clanName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayer.prototype, "clanTag", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayer.prototype, "classHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyLeaderboardEntryPlayerDestinyUserInfo)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayer.prototype, "destinyUserInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayer.prototype, "emblemHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayer.prototype, "genderHash", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayer.prototype, "lightLevel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryPlayer.prototype, "raceHash", void 0);
    return DestinyHistoricalStatsDestinyLeaderboardEntryPlayer;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyLeaderboardEntryPlayer };
// DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic
/**
 * Basic stat value.
**/
var DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic, _super);
    function DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic };
// DestinyHistoricalStatsDestinyLeaderboardEntryValuePga
/**
 * Per game average for the statistic, if applicable
**/
var DestinyHistoricalStatsDestinyLeaderboardEntryValuePga = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyLeaderboardEntryValuePga, _super);
    function DestinyHistoricalStatsDestinyLeaderboardEntryValuePga() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryValuePga.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryValuePga.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyLeaderboardEntryValuePga;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyLeaderboardEntryValuePga };
// DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted
/**
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
var DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted, _super);
    function DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted };
// DestinyHistoricalStatsDestinyLeaderboardEntryValue
/**
 * Value of the stat for this player
**/
var DestinyHistoricalStatsDestinyLeaderboardEntryValue = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyLeaderboardEntryValue, _super);
    function DestinyHistoricalStatsDestinyLeaderboardEntryValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryValue.prototype, "activityId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyLeaderboardEntryValueBasic)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryValue.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyLeaderboardEntryValuePga)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryValue.prototype, "pga", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryValue.prototype, "statId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyLeaderboardEntryValueWeighted)
    ], DestinyHistoricalStatsDestinyLeaderboardEntryValue.prototype, "weighted", void 0);
    return DestinyHistoricalStatsDestinyLeaderboardEntryValue;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyLeaderboardEntryValue };
var DestinyHistoricalStatsDestinyLeaderboardEntry = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyLeaderboardEntry, _super);
    function DestinyHistoricalStatsDestinyLeaderboardEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntry.prototype, "characterId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyLeaderboardEntryPlayer)
    ], DestinyHistoricalStatsDestinyLeaderboardEntry.prototype, "player", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyLeaderboardEntry.prototype, "rank", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyLeaderboardEntryValue)
    ], DestinyHistoricalStatsDestinyLeaderboardEntry.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyLeaderboardEntry;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyLeaderboardEntry };
