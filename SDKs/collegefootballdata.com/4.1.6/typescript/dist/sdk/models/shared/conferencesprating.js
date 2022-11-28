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
var ConferenceSpRatingDefenseHavoc = /** @class */ (function (_super) {
    __extends(ConferenceSpRatingDefenseHavoc, _super);
    function ConferenceSpRatingDefenseHavoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=db" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingDefenseHavoc.prototype, "db", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=frontSeven" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingDefenseHavoc.prototype, "frontSeven", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingDefenseHavoc.prototype, "total", void 0);
    return ConferenceSpRatingDefenseHavoc;
}(SpeakeasyBase));
export { ConferenceSpRatingDefenseHavoc };
var ConferenceSpRatingDefense = /** @class */ (function (_super) {
    __extends(ConferenceSpRatingDefense, _super);
    function ConferenceSpRatingDefense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingDefense.prototype, "explosiveness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=havoc" }),
        __metadata("design:type", ConferenceSpRatingDefenseHavoc)
    ], ConferenceSpRatingDefense.prototype, "havoc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pasing" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingDefense.prototype, "pasing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passingDowns" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingDefense.prototype, "passingDowns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingDefense.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rushing" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingDefense.prototype, "rushing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=standardDowns" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingDefense.prototype, "standardDowns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingDefense.prototype, "success", void 0);
    return ConferenceSpRatingDefense;
}(SpeakeasyBase));
export { ConferenceSpRatingDefense };
var ConferenceSpRatingOffense = /** @class */ (function (_super) {
    __extends(ConferenceSpRatingOffense, _super);
    function ConferenceSpRatingOffense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explosiveness" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingOffense.prototype, "explosiveness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pace" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingOffense.prototype, "pace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passing" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingOffense.prototype, "passing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passingDowns" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingOffense.prototype, "passingDowns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingOffense.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runRate" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingOffense.prototype, "runRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rushing" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingOffense.prototype, "rushing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=standardDowns" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingOffense.prototype, "standardDowns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=success" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingOffense.prototype, "success", void 0);
    return ConferenceSpRatingOffense;
}(SpeakeasyBase));
export { ConferenceSpRatingOffense };
var ConferenceSpRatingSpecialTeams = /** @class */ (function (_super) {
    __extends(ConferenceSpRatingSpecialTeams, _super);
    function ConferenceSpRatingSpecialTeams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], ConferenceSpRatingSpecialTeams.prototype, "rating", void 0);
    return ConferenceSpRatingSpecialTeams;
}(SpeakeasyBase));
export { ConferenceSpRatingSpecialTeams };
var ConferenceSpRating = /** @class */ (function (_super) {
    __extends(ConferenceSpRating, _super);
    function ConferenceSpRating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conference" }),
        __metadata("design:type", String)
    ], ConferenceSpRating.prototype, "conference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defense" }),
        __metadata("design:type", ConferenceSpRatingDefense)
    ], ConferenceSpRating.prototype, "defense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offense" }),
        __metadata("design:type", ConferenceSpRatingOffense)
    ], ConferenceSpRating.prototype, "offense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], ConferenceSpRating.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondOrderWins" }),
        __metadata("design:type", Number)
    ], ConferenceSpRating.prototype, "secondOrderWins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sos" }),
        __metadata("design:type", Number)
    ], ConferenceSpRating.prototype, "sos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specialTeams" }),
        __metadata("design:type", ConferenceSpRatingSpecialTeams)
    ], ConferenceSpRating.prototype, "specialTeams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], ConferenceSpRating.prototype, "year", void 0);
    return ConferenceSpRating;
}(SpeakeasyBase));
export { ConferenceSpRating };
