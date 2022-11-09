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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var PlayClock = /** @class */ (function (_super) {
    __extends(PlayClock, _super);
    function PlayClock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=minutes" }),
        __metadata("design:type", Number)
    ], PlayClock.prototype, "minutes", void 0);
    __decorate([
        Metadata({ data: "json, name=seconds" }),
        __metadata("design:type", Number)
    ], PlayClock.prototype, "seconds", void 0);
    return PlayClock;
}(SpeakeasyBase));
export { PlayClock };
var Play = /** @class */ (function (_super) {
    __extends(Play, _super);
    function Play() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=away" }),
        __metadata("design:type", String)
    ], Play.prototype, "away", void 0);
    __decorate([
        Metadata({ data: "json, name=clock" }),
        __metadata("design:type", PlayClock)
    ], Play.prototype, "clock", void 0);
    __decorate([
        Metadata({ data: "json, name=defense" }),
        __metadata("design:type", String)
    ], Play.prototype, "defense", void 0);
    __decorate([
        Metadata({ data: "json, name=defense_conference" }),
        __metadata("design:type", String)
    ], Play.prototype, "defenseConference", void 0);
    __decorate([
        Metadata({ data: "json, name=defense_score" }),
        __metadata("design:type", Number)
    ], Play.prototype, "defenseScore", void 0);
    __decorate([
        Metadata({ data: "json, name=defense_timeouts" }),
        __metadata("design:type", Number)
    ], Play.prototype, "defenseTimeouts", void 0);
    __decorate([
        Metadata({ data: "json, name=distance" }),
        __metadata("design:type", Number)
    ], Play.prototype, "distance", void 0);
    __decorate([
        Metadata({ data: "json, name=down" }),
        __metadata("design:type", Number)
    ], Play.prototype, "down", void 0);
    __decorate([
        Metadata({ data: "json, name=drive_id" }),
        __metadata("design:type", Number)
    ], Play.prototype, "driveId", void 0);
    __decorate([
        Metadata({ data: "json, name=drive_number" }),
        __metadata("design:type", Number)
    ], Play.prototype, "driveNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=game_id" }),
        __metadata("design:type", Number)
    ], Play.prototype, "gameId", void 0);
    __decorate([
        Metadata({ data: "json, name=home" }),
        __metadata("design:type", String)
    ], Play.prototype, "home", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Play.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=offense" }),
        __metadata("design:type", String)
    ], Play.prototype, "offense", void 0);
    __decorate([
        Metadata({ data: "json, name=offense_conference" }),
        __metadata("design:type", String)
    ], Play.prototype, "offenseConference", void 0);
    __decorate([
        Metadata({ data: "json, name=offense_score" }),
        __metadata("design:type", Number)
    ], Play.prototype, "offenseScore", void 0);
    __decorate([
        Metadata({ data: "json, name=offense_timeouts" }),
        __metadata("design:type", Number)
    ], Play.prototype, "offenseTimeouts", void 0);
    __decorate([
        Metadata({ data: "json, name=period" }),
        __metadata("design:type", Number)
    ], Play.prototype, "period", void 0);
    __decorate([
        Metadata({ data: "json, name=play_number" }),
        __metadata("design:type", Number)
    ], Play.prototype, "playNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=play_text" }),
        __metadata("design:type", String)
    ], Play.prototype, "playText", void 0);
    __decorate([
        Metadata({ data: "json, name=play_type" }),
        __metadata("design:type", String)
    ], Play.prototype, "playType", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], Play.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=scoring" }),
        __metadata("design:type", Boolean)
    ], Play.prototype, "scoring", void 0);
    __decorate([
        Metadata({ data: "json, name=wallclock" }),
        __metadata("design:type", String)
    ], Play.prototype, "wallclock", void 0);
    __decorate([
        Metadata({ data: "json, name=yard_line" }),
        __metadata("design:type", Number)
    ], Play.prototype, "yardLine", void 0);
    __decorate([
        Metadata({ data: "json, name=yards_gained" }),
        __metadata("design:type", Number)
    ], Play.prototype, "yardsGained", void 0);
    __decorate([
        Metadata({ data: "json, name=yards_to_goal" }),
        __metadata("design:type", Number)
    ], Play.prototype, "yardsToGoal", void 0);
    return Play;
}(SpeakeasyBase));
export { Play };
