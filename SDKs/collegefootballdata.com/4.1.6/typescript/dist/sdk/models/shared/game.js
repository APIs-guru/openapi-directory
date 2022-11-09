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
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=attendance" }),
        __metadata("design:type", Number)
    ], Game.prototype, "attendance", void 0);
    __decorate([
        Metadata({ data: "json, name=away_conference" }),
        __metadata("design:type", String)
    ], Game.prototype, "awayConference", void 0);
    __decorate([
        Metadata({ data: "json, name=away_id" }),
        __metadata("design:type", Number)
    ], Game.prototype, "awayId", void 0);
    __decorate([
        Metadata({ data: "json, name=away_line_scores" }),
        __metadata("design:type", Array)
    ], Game.prototype, "awayLineScores", void 0);
    __decorate([
        Metadata({ data: "json, name=away_points" }),
        __metadata("design:type", Number)
    ], Game.prototype, "awayPoints", void 0);
    __decorate([
        Metadata({ data: "json, name=away_post_win_prob" }),
        __metadata("design:type", Number)
    ], Game.prototype, "awayPostWinProb", void 0);
    __decorate([
        Metadata({ data: "json, name=away_team" }),
        __metadata("design:type", String)
    ], Game.prototype, "awayTeam", void 0);
    __decorate([
        Metadata({ data: "json, name=conference_game" }),
        __metadata("design:type", Boolean)
    ], Game.prototype, "conferenceGame", void 0);
    __decorate([
        Metadata({ data: "json, name=excitement_index" }),
        __metadata("design:type", Number)
    ], Game.prototype, "excitementIndex", void 0);
    __decorate([
        Metadata({ data: "json, name=highlights" }),
        __metadata("design:type", String)
    ], Game.prototype, "highlights", void 0);
    __decorate([
        Metadata({ data: "json, name=home_conference" }),
        __metadata("design:type", String)
    ], Game.prototype, "homeConference", void 0);
    __decorate([
        Metadata({ data: "json, name=home_id" }),
        __metadata("design:type", Number)
    ], Game.prototype, "homeId", void 0);
    __decorate([
        Metadata({ data: "json, name=home_line_scores" }),
        __metadata("design:type", Array)
    ], Game.prototype, "homeLineScores", void 0);
    __decorate([
        Metadata({ data: "json, name=home_points" }),
        __metadata("design:type", Number)
    ], Game.prototype, "homePoints", void 0);
    __decorate([
        Metadata({ data: "json, name=home_post_win_prob" }),
        __metadata("design:type", Number)
    ], Game.prototype, "homePostWinProb", void 0);
    __decorate([
        Metadata({ data: "json, name=home_team" }),
        __metadata("design:type", String)
    ], Game.prototype, "homeTeam", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Game.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=neutral_site" }),
        __metadata("design:type", Boolean)
    ], Game.prototype, "neutralSite", void 0);
    __decorate([
        Metadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], Game.prototype, "notes", void 0);
    __decorate([
        Metadata({ data: "json, name=season" }),
        __metadata("design:type", Number)
    ], Game.prototype, "season", void 0);
    __decorate([
        Metadata({ data: "json, name=season_type" }),
        __metadata("design:type", String)
    ], Game.prototype, "seasonType", void 0);
    __decorate([
        Metadata({ data: "json, name=start_date" }),
        __metadata("design:type", String)
    ], Game.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "json, name=start_time_tbd" }),
        __metadata("design:type", Boolean)
    ], Game.prototype, "startTimeTbd", void 0);
    __decorate([
        Metadata({ data: "json, name=venue" }),
        __metadata("design:type", String)
    ], Game.prototype, "venue", void 0);
    __decorate([
        Metadata({ data: "json, name=venue_id" }),
        __metadata("design:type", Number)
    ], Game.prototype, "venueId", void 0);
    __decorate([
        Metadata({ data: "json, name=week" }),
        __metadata("design:type", Number)
    ], Game.prototype, "week", void 0);
    return Game;
}(SpeakeasyBase));
export { Game };
