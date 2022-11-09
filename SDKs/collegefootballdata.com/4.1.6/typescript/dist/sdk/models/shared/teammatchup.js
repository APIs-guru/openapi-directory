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
import * as shared from "../shared";
var TeamMatchupGames = /** @class */ (function (_super) {
    __extends(TeamMatchupGames, _super);
    function TeamMatchupGames() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=awayScore" }),
        __metadata("design:type", Number)
    ], TeamMatchupGames.prototype, "awayScore", void 0);
    __decorate([
        Metadata({ data: "json, name=awayTeam" }),
        __metadata("design:type", String)
    ], TeamMatchupGames.prototype, "awayTeam", void 0);
    __decorate([
        Metadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], TeamMatchupGames.prototype, "date", void 0);
    __decorate([
        Metadata({ data: "json, name=homeScore" }),
        __metadata("design:type", Number)
    ], TeamMatchupGames.prototype, "homeScore", void 0);
    __decorate([
        Metadata({ data: "json, name=homeTeam" }),
        __metadata("design:type", String)
    ], TeamMatchupGames.prototype, "homeTeam", void 0);
    __decorate([
        Metadata({ data: "json, name=neutralSite" }),
        __metadata("design:type", Boolean)
    ], TeamMatchupGames.prototype, "neutralSite", void 0);
    __decorate([
        Metadata({ data: "json, name=season" }),
        __metadata("design:type", Number)
    ], TeamMatchupGames.prototype, "season", void 0);
    __decorate([
        Metadata({ data: "json, name=season_type" }),
        __metadata("design:type", String)
    ], TeamMatchupGames.prototype, "seasonType", void 0);
    __decorate([
        Metadata({ data: "json, name=venue" }),
        __metadata("design:type", String)
    ], TeamMatchupGames.prototype, "venue", void 0);
    __decorate([
        Metadata({ data: "json, name=week" }),
        __metadata("design:type", Number)
    ], TeamMatchupGames.prototype, "week", void 0);
    __decorate([
        Metadata({ data: "json, name=winner" }),
        __metadata("design:type", String)
    ], TeamMatchupGames.prototype, "winner", void 0);
    return TeamMatchupGames;
}(SpeakeasyBase));
export { TeamMatchupGames };
var TeamMatchup = /** @class */ (function (_super) {
    __extends(TeamMatchup, _super);
    function TeamMatchup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=endYear" }),
        __metadata("design:type", Number)
    ], TeamMatchup.prototype, "endYear", void 0);
    __decorate([
        Metadata({ data: "json, name=games", elemType: shared.TeamMatchupGames }),
        __metadata("design:type", Array)
    ], TeamMatchup.prototype, "games", void 0);
    __decorate([
        Metadata({ data: "json, name=startYear" }),
        __metadata("design:type", Number)
    ], TeamMatchup.prototype, "startYear", void 0);
    __decorate([
        Metadata({ data: "json, name=team1" }),
        __metadata("design:type", String)
    ], TeamMatchup.prototype, "team1", void 0);
    __decorate([
        Metadata({ data: "json, name=team1Wins" }),
        __metadata("design:type", Number)
    ], TeamMatchup.prototype, "team1Wins", void 0);
    __decorate([
        Metadata({ data: "json, name=team2" }),
        __metadata("design:type", String)
    ], TeamMatchup.prototype, "team2", void 0);
    __decorate([
        Metadata({ data: "json, name=team2Wins" }),
        __metadata("design:type", Number)
    ], TeamMatchup.prototype, "team2Wins", void 0);
    __decorate([
        Metadata({ data: "json, name=ties" }),
        __metadata("design:type", Number)
    ], TeamMatchup.prototype, "ties", void 0);
    return TeamMatchup;
}(SpeakeasyBase));
export { TeamMatchup };
