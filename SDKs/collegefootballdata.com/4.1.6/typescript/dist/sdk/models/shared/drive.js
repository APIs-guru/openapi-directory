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
var DriveEndTime = /** @class */ (function (_super) {
    __extends(DriveEndTime, _super);
    function DriveEndTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minutes" }),
        __metadata("design:type", Number)
    ], DriveEndTime.prototype, "minutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seconds" }),
        __metadata("design:type", Number)
    ], DriveEndTime.prototype, "seconds", void 0);
    return DriveEndTime;
}(SpeakeasyBase));
export { DriveEndTime };
var DriveStartTime = /** @class */ (function (_super) {
    __extends(DriveStartTime, _super);
    function DriveStartTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minutes" }),
        __metadata("design:type", Number)
    ], DriveStartTime.prototype, "minutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seconds" }),
        __metadata("design:type", Number)
    ], DriveStartTime.prototype, "seconds", void 0);
    return DriveStartTime;
}(SpeakeasyBase));
export { DriveStartTime };
var Drive = /** @class */ (function (_super) {
    __extends(Drive, _super);
    function Drive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defense" }),
        __metadata("design:type", String)
    ], Drive.prototype, "defense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defense_conference" }),
        __metadata("design:type", String)
    ], Drive.prototype, "defenseConference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drive_number" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "driveNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drive_result" }),
        __metadata("design:type", String)
    ], Drive.prototype, "driveResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_defense_score" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "endDefenseScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_offense_score" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "endOffenseScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_period" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "endPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_time" }),
        __metadata("design:type", DriveEndTime)
    ], Drive.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_yardline" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "endYardline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end_yards_to_goal" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "endYardsToGoal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=game_id" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "gameId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_home_offense" }),
        __metadata("design:type", Boolean)
    ], Drive.prototype, "isHomeOffense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offense" }),
        __metadata("design:type", String)
    ], Drive.prototype, "offense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offense_conference" }),
        __metadata("design:type", String)
    ], Drive.prototype, "offenseConference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plays" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "plays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scoring" }),
        __metadata("design:type", Boolean)
    ], Drive.prototype, "scoring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_defense_score" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "startDefenseScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_offense_score" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "startOffenseScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_period" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "startPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_time" }),
        __metadata("design:type", DriveStartTime)
    ], Drive.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_yardline" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "startYardline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_yards_to_goal" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "startYardsToGoal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=yards" }),
        __metadata("design:type", Number)
    ], Drive.prototype, "yards", void 0);
    return Drive;
}(SpeakeasyBase));
export { Drive };
