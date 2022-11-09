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
var AdvancedSeasonStatDefenseFieldPosition = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStatDefenseFieldPosition, _super);
    function AdvancedSeasonStatDefenseFieldPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=averagePredictedPoints" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefenseFieldPosition.prototype, "averagePredictedPoints", void 0);
    __decorate([
        Metadata({ data: "json, name=averageStart" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefenseFieldPosition.prototype, "averageStart", void 0);
    return AdvancedSeasonStatDefenseFieldPosition;
}(SpeakeasyBase));
export { AdvancedSeasonStatDefenseFieldPosition };
var AdvancedSeasonStatDefenseHavoc = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStatDefenseHavoc, _super);
    function AdvancedSeasonStatDefenseHavoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=db" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefenseHavoc.prototype, "db", void 0);
    __decorate([
        Metadata({ data: "json, name=frontSeven" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefenseHavoc.prototype, "frontSeven", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefenseHavoc.prototype, "total", void 0);
    return AdvancedSeasonStatDefenseHavoc;
}(SpeakeasyBase));
export { AdvancedSeasonStatDefenseHavoc };
var AdvancedSeasonStatDefensePassingDowns = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStatDefensePassingDowns, _super);
    function AdvancedSeasonStatDefensePassingDowns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefensePassingDowns.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefensePassingDowns.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefensePassingDowns.prototype, "rate", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefensePassingDowns.prototype, "successRate", void 0);
    return AdvancedSeasonStatDefensePassingDowns;
}(SpeakeasyBase));
export { AdvancedSeasonStatDefensePassingDowns };
var AdvancedSeasonStatDefensePassingPlays = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStatDefensePassingPlays, _super);
    function AdvancedSeasonStatDefensePassingPlays() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefensePassingPlays.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefensePassingPlays.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefensePassingPlays.prototype, "rate", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefensePassingPlays.prototype, "successRate", void 0);
    __decorate([
        Metadata({ data: "json, name=totalPPA" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefensePassingPlays.prototype, "totalPpa", void 0);
    return AdvancedSeasonStatDefensePassingPlays;
}(SpeakeasyBase));
export { AdvancedSeasonStatDefensePassingPlays };
var AdvancedSeasonStatDefenseRushingPlays = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStatDefenseRushingPlays, _super);
    function AdvancedSeasonStatDefenseRushingPlays() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefenseRushingPlays.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefenseRushingPlays.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefenseRushingPlays.prototype, "rate", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefenseRushingPlays.prototype, "successRate", void 0);
    __decorate([
        Metadata({ data: "json, name=totalPPA" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefenseRushingPlays.prototype, "totalPpa", void 0);
    return AdvancedSeasonStatDefenseRushingPlays;
}(SpeakeasyBase));
export { AdvancedSeasonStatDefenseRushingPlays };
var AdvancedSeasonStatDefenseStandardDowns = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStatDefenseStandardDowns, _super);
    function AdvancedSeasonStatDefenseStandardDowns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefenseStandardDowns.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefenseStandardDowns.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefenseStandardDowns.prototype, "rate", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefenseStandardDowns.prototype, "successRate", void 0);
    return AdvancedSeasonStatDefenseStandardDowns;
}(SpeakeasyBase));
export { AdvancedSeasonStatDefenseStandardDowns };
var AdvancedSeasonStatDefense = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStatDefense, _super);
    function AdvancedSeasonStatDefense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=drives" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "drives", void 0);
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=fieldPosition" }),
        __metadata("design:type", AdvancedSeasonStatDefenseFieldPosition)
    ], AdvancedSeasonStatDefense.prototype, "fieldPosition", void 0);
    __decorate([
        Metadata({ data: "json, name=havoc" }),
        __metadata("design:type", AdvancedSeasonStatDefenseHavoc)
    ], AdvancedSeasonStatDefense.prototype, "havoc", void 0);
    __decorate([
        Metadata({ data: "json, name=lineYards" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "lineYards", void 0);
    __decorate([
        Metadata({ data: "json, name=lineYardsTotal" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "lineYardsTotal", void 0);
    __decorate([
        Metadata({ data: "json, name=openFieldYards" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "openFieldYards", void 0);
    __decorate([
        Metadata({ data: "json, name=openFieldYardsTotal" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "openFieldYardsTotal", void 0);
    __decorate([
        Metadata({ data: "json, name=passingDowns" }),
        __metadata("design:type", AdvancedSeasonStatDefensePassingDowns)
    ], AdvancedSeasonStatDefense.prototype, "passingDowns", void 0);
    __decorate([
        Metadata({ data: "json, name=passingPlays" }),
        __metadata("design:type", AdvancedSeasonStatDefensePassingPlays)
    ], AdvancedSeasonStatDefense.prototype, "passingPlays", void 0);
    __decorate([
        Metadata({ data: "json, name=plays" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "plays", void 0);
    __decorate([
        Metadata({ data: "json, name=pointsPerOpportunity" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "pointsPerOpportunity", void 0);
    __decorate([
        Metadata({ data: "json, name=powerSuccess" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "powerSuccess", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=rushingPlays" }),
        __metadata("design:type", AdvancedSeasonStatDefenseRushingPlays)
    ], AdvancedSeasonStatDefense.prototype, "rushingPlays", void 0);
    __decorate([
        Metadata({ data: "json, name=secondLevelYards" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "secondLevelYards", void 0);
    __decorate([
        Metadata({ data: "json, name=secondLevelYardsTotal" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "secondLevelYardsTotal", void 0);
    __decorate([
        Metadata({ data: "json, name=standardDowns" }),
        __metadata("design:type", AdvancedSeasonStatDefenseStandardDowns)
    ], AdvancedSeasonStatDefense.prototype, "standardDowns", void 0);
    __decorate([
        Metadata({ data: "json, name=stuffRate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "stuffRate", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "successRate", void 0);
    __decorate([
        Metadata({ data: "json, name=totalPPA" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatDefense.prototype, "totalPpa", void 0);
    return AdvancedSeasonStatDefense;
}(SpeakeasyBase));
export { AdvancedSeasonStatDefense };
var AdvancedSeasonStatOffenseFieldPosition = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStatOffenseFieldPosition, _super);
    function AdvancedSeasonStatOffenseFieldPosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=averagePredictedPoints" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffenseFieldPosition.prototype, "averagePredictedPoints", void 0);
    __decorate([
        Metadata({ data: "json, name=averageStart" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffenseFieldPosition.prototype, "averageStart", void 0);
    return AdvancedSeasonStatOffenseFieldPosition;
}(SpeakeasyBase));
export { AdvancedSeasonStatOffenseFieldPosition };
var AdvancedSeasonStatOffenseHavoc = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStatOffenseHavoc, _super);
    function AdvancedSeasonStatOffenseHavoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=db" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffenseHavoc.prototype, "db", void 0);
    __decorate([
        Metadata({ data: "json, name=frontSeven" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffenseHavoc.prototype, "frontSeven", void 0);
    __decorate([
        Metadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffenseHavoc.prototype, "total", void 0);
    return AdvancedSeasonStatOffenseHavoc;
}(SpeakeasyBase));
export { AdvancedSeasonStatOffenseHavoc };
var AdvancedSeasonStatOffensePassingDowns = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStatOffensePassingDowns, _super);
    function AdvancedSeasonStatOffensePassingDowns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffensePassingDowns.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffensePassingDowns.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffensePassingDowns.prototype, "rate", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffensePassingDowns.prototype, "successRate", void 0);
    return AdvancedSeasonStatOffensePassingDowns;
}(SpeakeasyBase));
export { AdvancedSeasonStatOffensePassingDowns };
var AdvancedSeasonStatOffensePassingPlays = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStatOffensePassingPlays, _super);
    function AdvancedSeasonStatOffensePassingPlays() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffensePassingPlays.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffensePassingPlays.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffensePassingPlays.prototype, "rate", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffensePassingPlays.prototype, "successRate", void 0);
    __decorate([
        Metadata({ data: "json, name=totalPPA" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffensePassingPlays.prototype, "totalPpa", void 0);
    return AdvancedSeasonStatOffensePassingPlays;
}(SpeakeasyBase));
export { AdvancedSeasonStatOffensePassingPlays };
var AdvancedSeasonStatOffenseRushingPlays = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStatOffenseRushingPlays, _super);
    function AdvancedSeasonStatOffenseRushingPlays() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffenseRushingPlays.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffenseRushingPlays.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffenseRushingPlays.prototype, "rate", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffenseRushingPlays.prototype, "successRate", void 0);
    __decorate([
        Metadata({ data: "json, name=totalPPA" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffenseRushingPlays.prototype, "totalPpa", void 0);
    return AdvancedSeasonStatOffenseRushingPlays;
}(SpeakeasyBase));
export { AdvancedSeasonStatOffenseRushingPlays };
var AdvancedSeasonStatOffenseStandardDowns = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStatOffenseStandardDowns, _super);
    function AdvancedSeasonStatOffenseStandardDowns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffenseStandardDowns.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffenseStandardDowns.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=rate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffenseStandardDowns.prototype, "rate", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffenseStandardDowns.prototype, "successRate", void 0);
    return AdvancedSeasonStatOffenseStandardDowns;
}(SpeakeasyBase));
export { AdvancedSeasonStatOffenseStandardDowns };
var AdvancedSeasonStatOffense = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStatOffense, _super);
    function AdvancedSeasonStatOffense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=drives" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "drives", void 0);
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=fieldPosition" }),
        __metadata("design:type", AdvancedSeasonStatOffenseFieldPosition)
    ], AdvancedSeasonStatOffense.prototype, "fieldPosition", void 0);
    __decorate([
        Metadata({ data: "json, name=havoc" }),
        __metadata("design:type", AdvancedSeasonStatOffenseHavoc)
    ], AdvancedSeasonStatOffense.prototype, "havoc", void 0);
    __decorate([
        Metadata({ data: "json, name=lineYards" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "lineYards", void 0);
    __decorate([
        Metadata({ data: "json, name=lineYardsTotal" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "lineYardsTotal", void 0);
    __decorate([
        Metadata({ data: "json, name=openFieldYards" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "openFieldYards", void 0);
    __decorate([
        Metadata({ data: "json, name=openFieldYardsTotal" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "openFieldYardsTotal", void 0);
    __decorate([
        Metadata({ data: "json, name=passingDowns" }),
        __metadata("design:type", AdvancedSeasonStatOffensePassingDowns)
    ], AdvancedSeasonStatOffense.prototype, "passingDowns", void 0);
    __decorate([
        Metadata({ data: "json, name=passingPlays" }),
        __metadata("design:type", AdvancedSeasonStatOffensePassingPlays)
    ], AdvancedSeasonStatOffense.prototype, "passingPlays", void 0);
    __decorate([
        Metadata({ data: "json, name=plays" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "plays", void 0);
    __decorate([
        Metadata({ data: "json, name=pointsPerOpportunity" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "pointsPerOpportunity", void 0);
    __decorate([
        Metadata({ data: "json, name=powerSuccess" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "powerSuccess", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=rushingPlays" }),
        __metadata("design:type", AdvancedSeasonStatOffenseRushingPlays)
    ], AdvancedSeasonStatOffense.prototype, "rushingPlays", void 0);
    __decorate([
        Metadata({ data: "json, name=secondLevelYards" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "secondLevelYards", void 0);
    __decorate([
        Metadata({ data: "json, name=secondLevelYardsTotal" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "secondLevelYardsTotal", void 0);
    __decorate([
        Metadata({ data: "json, name=standardDowns" }),
        __metadata("design:type", AdvancedSeasonStatOffenseStandardDowns)
    ], AdvancedSeasonStatOffense.prototype, "standardDowns", void 0);
    __decorate([
        Metadata({ data: "json, name=stuffRate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "stuffRate", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "successRate", void 0);
    __decorate([
        Metadata({ data: "json, name=totalPPA" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStatOffense.prototype, "totalPpa", void 0);
    return AdvancedSeasonStatOffense;
}(SpeakeasyBase));
export { AdvancedSeasonStatOffense };
var AdvancedSeasonStat = /** @class */ (function (_super) {
    __extends(AdvancedSeasonStat, _super);
    function AdvancedSeasonStat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=conference" }),
        __metadata("design:type", String)
    ], AdvancedSeasonStat.prototype, "conference", void 0);
    __decorate([
        Metadata({ data: "json, name=defense" }),
        __metadata("design:type", AdvancedSeasonStatDefense)
    ], AdvancedSeasonStat.prototype, "defense", void 0);
    __decorate([
        Metadata({ data: "json, name=offense" }),
        __metadata("design:type", AdvancedSeasonStatOffense)
    ], AdvancedSeasonStat.prototype, "offense", void 0);
    __decorate([
        Metadata({ data: "json, name=season" }),
        __metadata("design:type", Number)
    ], AdvancedSeasonStat.prototype, "season", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], AdvancedSeasonStat.prototype, "team", void 0);
    return AdvancedSeasonStat;
}(SpeakeasyBase));
export { AdvancedSeasonStat };
