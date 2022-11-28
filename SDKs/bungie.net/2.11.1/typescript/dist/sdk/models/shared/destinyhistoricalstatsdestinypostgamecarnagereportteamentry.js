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
// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic
/**
 * Basic stat value.
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic };
// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga
/**
 * Per game average for the statistic, if applicable
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga };
// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted
/**
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted };
// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore
/**
 * Score earned by the team
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore.prototype, "activityId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreBasic)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScorePga)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore.prototype, "pga", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore.prototype, "statId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScoreWeighted)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore.prototype, "weighted", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore };
// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic
/**
 * Basic stat value.
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic };
// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga
/**
 * Per game average for the statistic, if applicable
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga };
// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted
/**
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted };
// DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding
/**
 * Team's standing relative to other teams.
**/
var DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding.prototype, "activityId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingBasic)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingPga)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding.prototype, "pga", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding.prototype, "statId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStandingWeighted)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding.prototype, "weighted", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding };
var DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry, _super);
    function DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryScore)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry.prototype, "score", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntryStanding)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry.prototype, "standing", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry.prototype, "teamId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry.prototype, "teamName", void 0);
    return DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyPostGameCarnageReportTeamEntry };
