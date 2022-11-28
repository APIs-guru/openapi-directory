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
var TeamGameTeamsStats = /** @class */ (function (_super) {
    __extends(TeamGameTeamsStats, _super);
    function TeamGameTeamsStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], TeamGameTeamsStats.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stat" }),
        __metadata("design:type", String)
    ], TeamGameTeamsStats.prototype, "stat", void 0);
    return TeamGameTeamsStats;
}(SpeakeasyBase));
export { TeamGameTeamsStats };
var TeamGameTeams = /** @class */ (function (_super) {
    __extends(TeamGameTeams, _super);
    function TeamGameTeams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conference" }),
        __metadata("design:type", String)
    ], TeamGameTeams.prototype, "conference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=homeAway" }),
        __metadata("design:type", Boolean)
    ], TeamGameTeams.prototype, "homeAway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=points" }),
        __metadata("design:type", Number)
    ], TeamGameTeams.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=school" }),
        __metadata("design:type", String)
    ], TeamGameTeams.prototype, "school", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stats", elemType: TeamGameTeamsStats }),
        __metadata("design:type", Array)
    ], TeamGameTeams.prototype, "stats", void 0);
    return TeamGameTeams;
}(SpeakeasyBase));
export { TeamGameTeams };
var TeamGame = /** @class */ (function (_super) {
    __extends(TeamGame, _super);
    function TeamGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TeamGame.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=teams", elemType: TeamGameTeams }),
        __metadata("design:type", Array)
    ], TeamGame.prototype, "teams", void 0);
    return TeamGame;
}(SpeakeasyBase));
export { TeamGame };
