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
var TeamSpRatingDefenseHavoc = /** @class */ (function (_super) {
    __extends(TeamSpRatingDefenseHavoc, _super);
    function TeamSpRatingDefenseHavoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=db" }),
        __metadata("design:type", Number)
    ], TeamSpRatingDefenseHavoc.prototype, "db", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frontSeven" }),
        __metadata("design:type", Number)
    ], TeamSpRatingDefenseHavoc.prototype, "frontSeven", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], TeamSpRatingDefenseHavoc.prototype, "total", void 0);
    return TeamSpRatingDefenseHavoc;
}(SpeakeasyBase));
export { TeamSpRatingDefenseHavoc };
var TeamSpRatingDefense = /** @class */ (function (_super) {
    __extends(TeamSpRatingDefense, _super);
    function TeamSpRatingDefense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], TeamSpRatingDefense.prototype, "explosiveness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=havoc" }),
        __metadata("design:type", TeamSpRatingDefenseHavoc)
    ], TeamSpRatingDefense.prototype, "havoc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pasing" }),
        __metadata("design:type", Number)
    ], TeamSpRatingDefense.prototype, "pasing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passingDowns" }),
        __metadata("design:type", Number)
    ], TeamSpRatingDefense.prototype, "passingDowns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ranking" }),
        __metadata("design:type", Number)
    ], TeamSpRatingDefense.prototype, "ranking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], TeamSpRatingDefense.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rushing" }),
        __metadata("design:type", Number)
    ], TeamSpRatingDefense.prototype, "rushing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=standardDowns" }),
        __metadata("design:type", Number)
    ], TeamSpRatingDefense.prototype, "standardDowns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Number)
    ], TeamSpRatingDefense.prototype, "success", void 0);
    return TeamSpRatingDefense;
}(SpeakeasyBase));
export { TeamSpRatingDefense };
var TeamSpRatingOffense = /** @class */ (function (_super) {
    __extends(TeamSpRatingOffense, _super);
    function TeamSpRatingOffense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], TeamSpRatingOffense.prototype, "explosiveness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pace" }),
        __metadata("design:type", Number)
    ], TeamSpRatingOffense.prototype, "pace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passing" }),
        __metadata("design:type", Number)
    ], TeamSpRatingOffense.prototype, "passing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passingDowns" }),
        __metadata("design:type", Number)
    ], TeamSpRatingOffense.prototype, "passingDowns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ranking" }),
        __metadata("design:type", Number)
    ], TeamSpRatingOffense.prototype, "ranking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], TeamSpRatingOffense.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runRate" }),
        __metadata("design:type", Number)
    ], TeamSpRatingOffense.prototype, "runRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rushing" }),
        __metadata("design:type", Number)
    ], TeamSpRatingOffense.prototype, "rushing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=standardDowns" }),
        __metadata("design:type", Number)
    ], TeamSpRatingOffense.prototype, "standardDowns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Number)
    ], TeamSpRatingOffense.prototype, "success", void 0);
    return TeamSpRatingOffense;
}(SpeakeasyBase));
export { TeamSpRatingOffense };
var TeamSpRatingSpecialTeams = /** @class */ (function (_super) {
    __extends(TeamSpRatingSpecialTeams, _super);
    function TeamSpRatingSpecialTeams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], TeamSpRatingSpecialTeams.prototype, "rating", void 0);
    return TeamSpRatingSpecialTeams;
}(SpeakeasyBase));
export { TeamSpRatingSpecialTeams };
var TeamSpRating = /** @class */ (function (_super) {
    __extends(TeamSpRating, _super);
    function TeamSpRating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conference" }),
        __metadata("design:type", String)
    ], TeamSpRating.prototype, "conference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defense" }),
        __metadata("design:type", TeamSpRatingDefense)
    ], TeamSpRating.prototype, "defense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offense" }),
        __metadata("design:type", TeamSpRatingOffense)
    ], TeamSpRating.prototype, "offense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ranking" }),
        __metadata("design:type", Number)
    ], TeamSpRating.prototype, "ranking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], TeamSpRating.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondOrderWins" }),
        __metadata("design:type", Number)
    ], TeamSpRating.prototype, "secondOrderWins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sos" }),
        __metadata("design:type", Number)
    ], TeamSpRating.prototype, "sos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialTeams" }),
        __metadata("design:type", TeamSpRatingSpecialTeams)
    ], TeamSpRating.prototype, "specialTeams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], TeamSpRating.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], TeamSpRating.prototype, "year", void 0);
    return TeamSpRating;
}(SpeakeasyBase));
export { TeamSpRating };
