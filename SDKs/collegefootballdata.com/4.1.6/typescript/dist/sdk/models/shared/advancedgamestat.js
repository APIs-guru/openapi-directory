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
var AdvancedGameStatDefensePassingDowns = /** @class */ (function (_super) {
    __extends(AdvancedGameStatDefensePassingDowns, _super);
    function AdvancedGameStatDefensePassingDowns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefensePassingDowns.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefensePassingDowns.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefensePassingDowns.prototype, "successRate", void 0);
    return AdvancedGameStatDefensePassingDowns;
}(SpeakeasyBase));
export { AdvancedGameStatDefensePassingDowns };
var AdvancedGameStatDefensePassingPlays = /** @class */ (function (_super) {
    __extends(AdvancedGameStatDefensePassingPlays, _super);
    function AdvancedGameStatDefensePassingPlays() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefensePassingPlays.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefensePassingPlays.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefensePassingPlays.prototype, "successRate", void 0);
    __decorate([
        Metadata({ data: "json, name=totalPPA" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefensePassingPlays.prototype, "totalPpa", void 0);
    return AdvancedGameStatDefensePassingPlays;
}(SpeakeasyBase));
export { AdvancedGameStatDefensePassingPlays };
var AdvancedGameStatDefenseRushingPlays = /** @class */ (function (_super) {
    __extends(AdvancedGameStatDefenseRushingPlays, _super);
    function AdvancedGameStatDefenseRushingPlays() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefenseRushingPlays.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefenseRushingPlays.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefenseRushingPlays.prototype, "successRate", void 0);
    __decorate([
        Metadata({ data: "json, name=totalPPA" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefenseRushingPlays.prototype, "totalPpa", void 0);
    return AdvancedGameStatDefenseRushingPlays;
}(SpeakeasyBase));
export { AdvancedGameStatDefenseRushingPlays };
var AdvancedGameStatDefenseStandardDowns = /** @class */ (function (_super) {
    __extends(AdvancedGameStatDefenseStandardDowns, _super);
    function AdvancedGameStatDefenseStandardDowns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefenseStandardDowns.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefenseStandardDowns.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefenseStandardDowns.prototype, "successRate", void 0);
    return AdvancedGameStatDefenseStandardDowns;
}(SpeakeasyBase));
export { AdvancedGameStatDefenseStandardDowns };
var AdvancedGameStatDefense = /** @class */ (function (_super) {
    __extends(AdvancedGameStatDefense, _super);
    function AdvancedGameStatDefense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=drives" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefense.prototype, "drives", void 0);
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefense.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=lineYards" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefense.prototype, "lineYards", void 0);
    __decorate([
        Metadata({ data: "json, name=lineYardsTotal" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefense.prototype, "lineYardsTotal", void 0);
    __decorate([
        Metadata({ data: "json, name=openFieldYards" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefense.prototype, "openFieldYards", void 0);
    __decorate([
        Metadata({ data: "json, name=openFieldYardsTotal" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefense.prototype, "openFieldYardsTotal", void 0);
    __decorate([
        Metadata({ data: "json, name=passingDowns" }),
        __metadata("design:type", AdvancedGameStatDefensePassingDowns)
    ], AdvancedGameStatDefense.prototype, "passingDowns", void 0);
    __decorate([
        Metadata({ data: "json, name=passingPlays" }),
        __metadata("design:type", AdvancedGameStatDefensePassingPlays)
    ], AdvancedGameStatDefense.prototype, "passingPlays", void 0);
    __decorate([
        Metadata({ data: "json, name=plays" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefense.prototype, "plays", void 0);
    __decorate([
        Metadata({ data: "json, name=powerSuccess" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefense.prototype, "powerSuccess", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefense.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=rushingPlays" }),
        __metadata("design:type", AdvancedGameStatDefenseRushingPlays)
    ], AdvancedGameStatDefense.prototype, "rushingPlays", void 0);
    __decorate([
        Metadata({ data: "json, name=secondLevelYards" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefense.prototype, "secondLevelYards", void 0);
    __decorate([
        Metadata({ data: "json, name=secondLevelYardsTotal" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefense.prototype, "secondLevelYardsTotal", void 0);
    __decorate([
        Metadata({ data: "json, name=standardDowns" }),
        __metadata("design:type", AdvancedGameStatDefenseStandardDowns)
    ], AdvancedGameStatDefense.prototype, "standardDowns", void 0);
    __decorate([
        Metadata({ data: "json, name=stuffRate" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefense.prototype, "stuffRate", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefense.prototype, "successRate", void 0);
    __decorate([
        Metadata({ data: "json, name=totalPPA" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatDefense.prototype, "totalPpa", void 0);
    return AdvancedGameStatDefense;
}(SpeakeasyBase));
export { AdvancedGameStatDefense };
var AdvancedGameStatOffensePassingDowns = /** @class */ (function (_super) {
    __extends(AdvancedGameStatOffensePassingDowns, _super);
    function AdvancedGameStatOffensePassingDowns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffensePassingDowns.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffensePassingDowns.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffensePassingDowns.prototype, "successRate", void 0);
    return AdvancedGameStatOffensePassingDowns;
}(SpeakeasyBase));
export { AdvancedGameStatOffensePassingDowns };
var AdvancedGameStatOffensePassingPlays = /** @class */ (function (_super) {
    __extends(AdvancedGameStatOffensePassingPlays, _super);
    function AdvancedGameStatOffensePassingPlays() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffensePassingPlays.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffensePassingPlays.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffensePassingPlays.prototype, "successRate", void 0);
    __decorate([
        Metadata({ data: "json, name=totalPPA" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffensePassingPlays.prototype, "totalPpa", void 0);
    return AdvancedGameStatOffensePassingPlays;
}(SpeakeasyBase));
export { AdvancedGameStatOffensePassingPlays };
var AdvancedGameStatOffenseRushingPlays = /** @class */ (function (_super) {
    __extends(AdvancedGameStatOffenseRushingPlays, _super);
    function AdvancedGameStatOffenseRushingPlays() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffenseRushingPlays.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffenseRushingPlays.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffenseRushingPlays.prototype, "successRate", void 0);
    __decorate([
        Metadata({ data: "json, name=totalPPA" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffenseRushingPlays.prototype, "totalPpa", void 0);
    return AdvancedGameStatOffenseRushingPlays;
}(SpeakeasyBase));
export { AdvancedGameStatOffenseRushingPlays };
var AdvancedGameStatOffenseStandardDowns = /** @class */ (function (_super) {
    __extends(AdvancedGameStatOffenseStandardDowns, _super);
    function AdvancedGameStatOffenseStandardDowns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffenseStandardDowns.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffenseStandardDowns.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffenseStandardDowns.prototype, "successRate", void 0);
    return AdvancedGameStatOffenseStandardDowns;
}(SpeakeasyBase));
export { AdvancedGameStatOffenseStandardDowns };
var AdvancedGameStatOffense = /** @class */ (function (_super) {
    __extends(AdvancedGameStatOffense, _super);
    function AdvancedGameStatOffense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=drives" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffense.prototype, "drives", void 0);
    __decorate([
        Metadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffense.prototype, "explosiveness", void 0);
    __decorate([
        Metadata({ data: "json, name=lineYards" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffense.prototype, "lineYards", void 0);
    __decorate([
        Metadata({ data: "json, name=lineYardsTotal" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffense.prototype, "lineYardsTotal", void 0);
    __decorate([
        Metadata({ data: "json, name=openFieldYards" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffense.prototype, "openFieldYards", void 0);
    __decorate([
        Metadata({ data: "json, name=openFieldYardsTotal" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffense.prototype, "openFieldYardsTotal", void 0);
    __decorate([
        Metadata({ data: "json, name=passingDowns" }),
        __metadata("design:type", AdvancedGameStatOffensePassingDowns)
    ], AdvancedGameStatOffense.prototype, "passingDowns", void 0);
    __decorate([
        Metadata({ data: "json, name=passingPlays" }),
        __metadata("design:type", AdvancedGameStatOffensePassingPlays)
    ], AdvancedGameStatOffense.prototype, "passingPlays", void 0);
    __decorate([
        Metadata({ data: "json, name=plays" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffense.prototype, "plays", void 0);
    __decorate([
        Metadata({ data: "json, name=powerSuccess" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffense.prototype, "powerSuccess", void 0);
    __decorate([
        Metadata({ data: "json, name=ppa" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffense.prototype, "ppa", void 0);
    __decorate([
        Metadata({ data: "json, name=rushingPlays" }),
        __metadata("design:type", AdvancedGameStatOffenseRushingPlays)
    ], AdvancedGameStatOffense.prototype, "rushingPlays", void 0);
    __decorate([
        Metadata({ data: "json, name=secondLevelYards" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffense.prototype, "secondLevelYards", void 0);
    __decorate([
        Metadata({ data: "json, name=secondLevelYardsTotal" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffense.prototype, "secondLevelYardsTotal", void 0);
    __decorate([
        Metadata({ data: "json, name=standardDowns" }),
        __metadata("design:type", AdvancedGameStatOffenseStandardDowns)
    ], AdvancedGameStatOffense.prototype, "standardDowns", void 0);
    __decorate([
        Metadata({ data: "json, name=stuffRate" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffense.prototype, "stuffRate", void 0);
    __decorate([
        Metadata({ data: "json, name=successRate" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffense.prototype, "successRate", void 0);
    __decorate([
        Metadata({ data: "json, name=totalPPA" }),
        __metadata("design:type", Number)
    ], AdvancedGameStatOffense.prototype, "totalPpa", void 0);
    return AdvancedGameStatOffense;
}(SpeakeasyBase));
export { AdvancedGameStatOffense };
var AdvancedGameStat = /** @class */ (function (_super) {
    __extends(AdvancedGameStat, _super);
    function AdvancedGameStat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=defense" }),
        __metadata("design:type", AdvancedGameStatDefense)
    ], AdvancedGameStat.prototype, "defense", void 0);
    __decorate([
        Metadata({ data: "json, name=gameId" }),
        __metadata("design:type", Number)
    ], AdvancedGameStat.prototype, "gameId", void 0);
    __decorate([
        Metadata({ data: "json, name=offense" }),
        __metadata("design:type", AdvancedGameStatOffense)
    ], AdvancedGameStat.prototype, "offense", void 0);
    __decorate([
        Metadata({ data: "json, name=opponent" }),
        __metadata("design:type", String)
    ], AdvancedGameStat.prototype, "opponent", void 0);
    __decorate([
        Metadata({ data: "json, name=season" }),
        __metadata("design:type", Number)
    ], AdvancedGameStat.prototype, "season", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], AdvancedGameStat.prototype, "team", void 0);
    __decorate([
        Metadata({ data: "json, name=week" }),
        __metadata("design:type", Number)
    ], AdvancedGameStat.prototype, "week", void 0);
    return AdvancedGameStat;
}(SpeakeasyBase));
export { AdvancedGameStat };
