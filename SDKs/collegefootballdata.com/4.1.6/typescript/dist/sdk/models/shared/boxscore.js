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
var BoxScorePlayersPpaAverage = /** @class */ (function (_super) {
    __extends(BoxScorePlayersPpaAverage, _super);
    function BoxScorePlayersPpaAverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=passing" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersPpaAverage.prototype, "passing", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter1" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersPpaAverage.prototype, "quarter1", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter2" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersPpaAverage.prototype, "quarter2", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter3" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersPpaAverage.prototype, "quarter3", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter4" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersPpaAverage.prototype, "quarter4", void 0);
    __decorate([
        Metadata({ data: "json, name=rushing" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersPpaAverage.prototype, "rushing", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersPpaAverage.prototype, "total", void 0);
    return BoxScorePlayersPpaAverage;
}(SpeakeasyBase));
export { BoxScorePlayersPpaAverage };
var BoxScorePlayersPpaCumulative = /** @class */ (function (_super) {
    __extends(BoxScorePlayersPpaCumulative, _super);
    function BoxScorePlayersPpaCumulative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=passing" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersPpaCumulative.prototype, "passing", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter1" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersPpaCumulative.prototype, "quarter1", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter2" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersPpaCumulative.prototype, "quarter2", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter3" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersPpaCumulative.prototype, "quarter3", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter4" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersPpaCumulative.prototype, "quarter4", void 0);
    __decorate([
        Metadata({ data: "json, name=rushing" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersPpaCumulative.prototype, "rushing", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersPpaCumulative.prototype, "total", void 0);
    return BoxScorePlayersPpaCumulative;
}(SpeakeasyBase));
export { BoxScorePlayersPpaCumulative };
var BoxScorePlayersPpa = /** @class */ (function (_super) {
    __extends(BoxScorePlayersPpa, _super);
    function BoxScorePlayersPpa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=average" }),
        __metadata("design:type", BoxScorePlayersPpaAverage)
    ], BoxScorePlayersPpa.prototype, "average", void 0);
    __decorate([
        Metadata({ data: "json, name=cumulative" }),
        __metadata("design:type", BoxScorePlayersPpaCumulative)
    ], BoxScorePlayersPpa.prototype, "cumulative", void 0);
    __decorate([
        Metadata({ data: "json, name=player" }),
        __metadata("design:type", String)
    ], BoxScorePlayersPpa.prototype, "player", void 0);
    __decorate([
        Metadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], BoxScorePlayersPpa.prototype, "position", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], BoxScorePlayersPpa.prototype, "team", void 0);
    return BoxScorePlayersPpa;
}(SpeakeasyBase));
export { BoxScorePlayersPpa };
var BoxScorePlayersUsage = /** @class */ (function (_super) {
    __extends(BoxScorePlayersUsage, _super);
    function BoxScorePlayersUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=passing" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersUsage.prototype, "passing", void 0);
    __decorate([
        Metadata({ data: "json, name=player" }),
        __metadata("design:type", String)
    ], BoxScorePlayersUsage.prototype, "player", void 0);
    __decorate([
        Metadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], BoxScorePlayersUsage.prototype, "position", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter1" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersUsage.prototype, "quarter1", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter2" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersUsage.prototype, "quarter2", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter3" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersUsage.prototype, "quarter3", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter4" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersUsage.prototype, "quarter4", void 0);
    __decorate([
        Metadata({ data: "json, name=rushing" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersUsage.prototype, "rushing", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], BoxScorePlayersUsage.prototype, "team", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BoxScorePlayersUsage.prototype, "total", void 0);
    return BoxScorePlayersUsage;
}(SpeakeasyBase));
export { BoxScorePlayersUsage };
var BoxScorePlayers = /** @class */ (function (_super) {
    __extends(BoxScorePlayers, _super);
    function BoxScorePlayers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ppa", elemType: shared.BoxScorePlayersPpa }),
        __metadata("design:type", Array)
    ], BoxScorePlayers.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=usage", elemType: shared.BoxScorePlayersUsage }),
        __metadata("design:type", Array)
    ], BoxScorePlayers.prototype, "usage", void 0);
    return BoxScorePlayers;
}(SpeakeasyBase));
export { BoxScorePlayers };
var BoxScoreTeamsCumulativePpaOverall = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsCumulativePpaOverall, _super);
    function BoxScoreTeamsCumulativePpaOverall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=quarter1" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaOverall.prototype, "quarter1", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter2" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaOverall.prototype, "quarter2", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter3" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaOverall.prototype, "quarter3", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter4" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaOverall.prototype, "quarter4", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaOverall.prototype, "total", void 0);
    return BoxScoreTeamsCumulativePpaOverall;
}(SpeakeasyBase));
export { BoxScoreTeamsCumulativePpaOverall };
var BoxScoreTeamsCumulativePpaPassing = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsCumulativePpaPassing, _super);
    function BoxScoreTeamsCumulativePpaPassing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=quarter1" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaPassing.prototype, "quarter1", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter2" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaPassing.prototype, "quarter2", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter3" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaPassing.prototype, "quarter3", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter4" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaPassing.prototype, "quarter4", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaPassing.prototype, "total", void 0);
    return BoxScoreTeamsCumulativePpaPassing;
}(SpeakeasyBase));
export { BoxScoreTeamsCumulativePpaPassing };
var BoxScoreTeamsCumulativePpaRushing = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsCumulativePpaRushing, _super);
    function BoxScoreTeamsCumulativePpaRushing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=quarter1" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaRushing.prototype, "quarter1", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter2" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaRushing.prototype, "quarter2", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter3" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaRushing.prototype, "quarter3", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter4" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaRushing.prototype, "quarter4", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpaRushing.prototype, "total", void 0);
    return BoxScoreTeamsCumulativePpaRushing;
}(SpeakeasyBase));
export { BoxScoreTeamsCumulativePpaRushing };
var BoxScoreTeamsCumulativePpa = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsCumulativePpa, _super);
    function BoxScoreTeamsCumulativePpa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=overall" }),
        __metadata("design:type", BoxScoreTeamsCumulativePpaOverall)
    ], BoxScoreTeamsCumulativePpa.prototype, "overall", void 0);
    __decorate([
        Metadata({ data: "json, name=passing" }),
        __metadata("design:type", BoxScoreTeamsCumulativePpaPassing)
    ], BoxScoreTeamsCumulativePpa.prototype, "passing", void 0);
    __decorate([
        Metadata({ data: "json, name=plays" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsCumulativePpa.prototype, "plays", void 0);
    __decorate([
        Metadata({ data: "json, name=rushing" }),
        __metadata("design:type", BoxScoreTeamsCumulativePpaRushing)
    ], BoxScoreTeamsCumulativePpa.prototype, "rushing", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], BoxScoreTeamsCumulativePpa.prototype, "team", void 0);
    return BoxScoreTeamsCumulativePpa;
}(SpeakeasyBase));
export { BoxScoreTeamsCumulativePpa };
var BoxScoreTeamsExplosivenessOverall = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsExplosivenessOverall, _super);
    function BoxScoreTeamsExplosivenessOverall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=quarter1" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsExplosivenessOverall.prototype, "quarter1", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter2" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsExplosivenessOverall.prototype, "quarter2", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter3" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsExplosivenessOverall.prototype, "quarter3", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter4" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsExplosivenessOverall.prototype, "quarter4", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsExplosivenessOverall.prototype, "total", void 0);
    return BoxScoreTeamsExplosivenessOverall;
}(SpeakeasyBase));
export { BoxScoreTeamsExplosivenessOverall };
var BoxScoreTeamsExplosiveness = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsExplosiveness, _super);
    function BoxScoreTeamsExplosiveness() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=overall" }),
        __metadata("design:type", BoxScoreTeamsExplosivenessOverall)
    ], BoxScoreTeamsExplosiveness.prototype, "overall", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], BoxScoreTeamsExplosiveness.prototype, "team", void 0);
    return BoxScoreTeamsExplosiveness;
}(SpeakeasyBase));
export { BoxScoreTeamsExplosiveness };
var BoxScoreTeamsFieldPosition = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsFieldPosition, _super);
    function BoxScoreTeamsFieldPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=averageStart" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsFieldPosition.prototype, "averageStart", void 0);
    __decorate([
        Metadata({ data: "json, name=averageStartingPredictedPoints" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsFieldPosition.prototype, "averageStartingPredictedPoints", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], BoxScoreTeamsFieldPosition.prototype, "team", void 0);
    return BoxScoreTeamsFieldPosition;
}(SpeakeasyBase));
export { BoxScoreTeamsFieldPosition };
var BoxScoreTeamsHavoc = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsHavoc, _super);
    function BoxScoreTeamsHavoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=db" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsHavoc.prototype, "db", void 0);
    __decorate([
        Metadata({ data: "json, name=frontSeven" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsHavoc.prototype, "frontSeven", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], BoxScoreTeamsHavoc.prototype, "team", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsHavoc.prototype, "total", void 0);
    return BoxScoreTeamsHavoc;
}(SpeakeasyBase));
export { BoxScoreTeamsHavoc };
var BoxScoreTeamsPpaOverall = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsPpaOverall, _super);
    function BoxScoreTeamsPpaOverall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=quarter1" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaOverall.prototype, "quarter1", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter2" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaOverall.prototype, "quarter2", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter3" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaOverall.prototype, "quarter3", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter4" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaOverall.prototype, "quarter4", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaOverall.prototype, "total", void 0);
    return BoxScoreTeamsPpaOverall;
}(SpeakeasyBase));
export { BoxScoreTeamsPpaOverall };
var BoxScoreTeamsPpaPassing = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsPpaPassing, _super);
    function BoxScoreTeamsPpaPassing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=quarter1" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaPassing.prototype, "quarter1", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter2" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaPassing.prototype, "quarter2", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter3" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaPassing.prototype, "quarter3", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter4" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaPassing.prototype, "quarter4", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaPassing.prototype, "total", void 0);
    return BoxScoreTeamsPpaPassing;
}(SpeakeasyBase));
export { BoxScoreTeamsPpaPassing };
var BoxScoreTeamsPpaRushing = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsPpaRushing, _super);
    function BoxScoreTeamsPpaRushing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=quarter1" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaRushing.prototype, "quarter1", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter2" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaRushing.prototype, "quarter2", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter3" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaRushing.prototype, "quarter3", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter4" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaRushing.prototype, "quarter4", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpaRushing.prototype, "total", void 0);
    return BoxScoreTeamsPpaRushing;
}(SpeakeasyBase));
export { BoxScoreTeamsPpaRushing };
var BoxScoreTeamsPpa = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsPpa, _super);
    function BoxScoreTeamsPpa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=overall" }),
        __metadata("design:type", BoxScoreTeamsPpaOverall)
    ], BoxScoreTeamsPpa.prototype, "overall", void 0);
    __decorate([
        Metadata({ data: "json, name=passing" }),
        __metadata("design:type", BoxScoreTeamsPpaPassing)
    ], BoxScoreTeamsPpa.prototype, "passing", void 0);
    __decorate([
        Metadata({ data: "json, name=plays" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsPpa.prototype, "plays", void 0);
    __decorate([
        Metadata({ data: "json, name=rushing" }),
        __metadata("design:type", BoxScoreTeamsPpaRushing)
    ], BoxScoreTeamsPpa.prototype, "rushing", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], BoxScoreTeamsPpa.prototype, "team", void 0);
    return BoxScoreTeamsPpa;
}(SpeakeasyBase));
export { BoxScoreTeamsPpa };
var BoxScoreTeamsRushing = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsRushing, _super);
    function BoxScoreTeamsRushing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=lineYards" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsRushing.prototype, "lineYards", void 0);
    __decorate([
        Metadata({ data: "json, name=lineYardsAverage" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsRushing.prototype, "lineYardsAverage", void 0);
    __decorate([
        Metadata({ data: "json, name=openFieldYards" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsRushing.prototype, "openFieldYards", void 0);
    __decorate([
        Metadata({ data: "json, name=openFieldYardsAverage" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsRushing.prototype, "openFieldYardsAverage", void 0);
    __decorate([
        Metadata({ data: "json, name=powerSuccess" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsRushing.prototype, "powerSuccess", void 0);
    __decorate([
        Metadata({ data: "json, name=secondLevelYards" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsRushing.prototype, "secondLevelYards", void 0);
    __decorate([
        Metadata({ data: "json, name=secondLevelYardsAverage" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsRushing.prototype, "secondLevelYardsAverage", void 0);
    __decorate([
        Metadata({ data: "json, name=stuffRate" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsRushing.prototype, "stuffRate", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], BoxScoreTeamsRushing.prototype, "team", void 0);
    return BoxScoreTeamsRushing;
}(SpeakeasyBase));
export { BoxScoreTeamsRushing };
var BoxScoreTeamsScoringOpportunities = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsScoringOpportunities, _super);
    function BoxScoreTeamsScoringOpportunities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=opportunities" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsScoringOpportunities.prototype, "opportunities", void 0);
    __decorate([
        Metadata({ data: "json, name=points" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsScoringOpportunities.prototype, "points", void 0);
    __decorate([
        Metadata({ data: "json, name=pointsPerOpportunity" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsScoringOpportunities.prototype, "pointsPerOpportunity", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], BoxScoreTeamsScoringOpportunities.prototype, "team", void 0);
    return BoxScoreTeamsScoringOpportunities;
}(SpeakeasyBase));
export { BoxScoreTeamsScoringOpportunities };
var BoxScoreTeamsSuccessRatesOverall = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsSuccessRatesOverall, _super);
    function BoxScoreTeamsSuccessRatesOverall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=quarter1" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesOverall.prototype, "quarter1", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter2" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesOverall.prototype, "quarter2", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter3" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesOverall.prototype, "quarter3", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter4" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesOverall.prototype, "quarter4", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesOverall.prototype, "total", void 0);
    return BoxScoreTeamsSuccessRatesOverall;
}(SpeakeasyBase));
export { BoxScoreTeamsSuccessRatesOverall };
var BoxScoreTeamsSuccessRatesPassingDowns = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsSuccessRatesPassingDowns, _super);
    function BoxScoreTeamsSuccessRatesPassingDowns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=quarter1" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesPassingDowns.prototype, "quarter1", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter2" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesPassingDowns.prototype, "quarter2", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter3" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesPassingDowns.prototype, "quarter3", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter4" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesPassingDowns.prototype, "quarter4", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesPassingDowns.prototype, "total", void 0);
    return BoxScoreTeamsSuccessRatesPassingDowns;
}(SpeakeasyBase));
export { BoxScoreTeamsSuccessRatesPassingDowns };
var BoxScoreTeamsSuccessRatesStandardDowns = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsSuccessRatesStandardDowns, _super);
    function BoxScoreTeamsSuccessRatesStandardDowns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=quarter1" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesStandardDowns.prototype, "quarter1", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter2" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesStandardDowns.prototype, "quarter2", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter3" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesStandardDowns.prototype, "quarter3", void 0);
    __decorate([
        Metadata({ data: "json, name=quarter4" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesStandardDowns.prototype, "quarter4", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BoxScoreTeamsSuccessRatesStandardDowns.prototype, "total", void 0);
    return BoxScoreTeamsSuccessRatesStandardDowns;
}(SpeakeasyBase));
export { BoxScoreTeamsSuccessRatesStandardDowns };
var BoxScoreTeamsSuccessRates = /** @class */ (function (_super) {
    __extends(BoxScoreTeamsSuccessRates, _super);
    function BoxScoreTeamsSuccessRates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=overall" }),
        __metadata("design:type", BoxScoreTeamsSuccessRatesOverall)
    ], BoxScoreTeamsSuccessRates.prototype, "overall", void 0);
    __decorate([
        Metadata({ data: "json, name=passingDowns" }),
        __metadata("design:type", BoxScoreTeamsSuccessRatesPassingDowns)
    ], BoxScoreTeamsSuccessRates.prototype, "passingDowns", void 0);
    __decorate([
        Metadata({ data: "json, name=standardDowns" }),
        __metadata("design:type", BoxScoreTeamsSuccessRatesStandardDowns)
    ], BoxScoreTeamsSuccessRates.prototype, "standardDowns", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], BoxScoreTeamsSuccessRates.prototype, "team", void 0);
    return BoxScoreTeamsSuccessRates;
}(SpeakeasyBase));
export { BoxScoreTeamsSuccessRates };
var BoxScoreTeams = /** @class */ (function (_super) {
    __extends(BoxScoreTeams, _super);
    function BoxScoreTeams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=cumulativePpa", elemType: shared.BoxScoreTeamsCumulativePpa }),
        __metadata("design:type", Array)
    ], BoxScoreTeams.prototype, "cumulativePpa", void 0);
    __decorate([
        Metadata({ data: "json, name=explosiveness", elemType: shared.BoxScoreTeamsExplosiveness }),
        __metadata("design:type", Array)
    ], BoxScoreTeams.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=fieldPosition", elemType: shared.BoxScoreTeamsFieldPosition }),
        __metadata("design:type", Array)
    ], BoxScoreTeams.prototype, "fieldPosition", void 0);
    __decorate([
        Metadata({ data: "json, name=havoc", elemType: shared.BoxScoreTeamsHavoc }),
        __metadata("design:type", Array)
    ], BoxScoreTeams.prototype, "havoc", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa", elemType: shared.BoxScoreTeamsPpa }),
        __metadata("design:type", Array)
    ], BoxScoreTeams.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=rushing", elemType: shared.BoxScoreTeamsRushing }),
        __metadata("design:type", Array)
    ], BoxScoreTeams.prototype, "rushing", void 0);
    __decorate([
        Metadata({ data: "json, name=scoringOpportunities", elemType: shared.BoxScoreTeamsScoringOpportunities }),
        __metadata("design:type", Array)
    ], BoxScoreTeams.prototype, "scoringOpportunities", void 0);
    __decorate([
        Metadata({ data: "json, name=successRates", elemType: shared.BoxScoreTeamsSuccessRates }),
        __metadata("design:type", Array)
    ], BoxScoreTeams.prototype, "successRates", void 0);
    return BoxScoreTeams;
}(SpeakeasyBase));
export { BoxScoreTeams };
var BoxScore = /** @class */ (function (_super) {
    __extends(BoxScore, _super);
    function BoxScore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=players" }),
        __metadata("design:type", BoxScorePlayers)
    ], BoxScore.prototype, "players", void 0);
    __decorate([
        Metadata({ data: "json, name=teams" }),
        __metadata("design:type", BoxScoreTeams)
    ], BoxScore.prototype, "teams", void 0);
    return BoxScore;
}(SpeakeasyBase));
export { BoxScore };
