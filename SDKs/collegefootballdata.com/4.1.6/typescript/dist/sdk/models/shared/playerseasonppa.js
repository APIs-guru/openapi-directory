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
var PlayerSeasonPpaAveragePpa = /** @class */ (function (_super) {
    __extends(PlayerSeasonPpaAveragePpa, _super);
    function PlayerSeasonPpaAveragePpa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=all" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaAveragePpa.prototype, "all", void 0);
    __decorate([
        Metadata({ data: "json, name=firstDown" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaAveragePpa.prototype, "firstDown", void 0);
    __decorate([
        Metadata({ data: "json, name=pass" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaAveragePpa.prototype, "pass", void 0);
    __decorate([
        Metadata({ data: "json, name=passingDowns" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaAveragePpa.prototype, "passingDowns", void 0);
    __decorate([
        Metadata({ data: "json, name=rush" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaAveragePpa.prototype, "rush", void 0);
    __decorate([
        Metadata({ data: "json, name=secondDown" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaAveragePpa.prototype, "secondDown", void 0);
    __decorate([
        Metadata({ data: "json, name=standardDowns" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaAveragePpa.prototype, "standardDowns", void 0);
    __decorate([
        Metadata({ data: "json, name=thirdDown" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaAveragePpa.prototype, "thirdDown", void 0);
    return PlayerSeasonPpaAveragePpa;
}(SpeakeasyBase));
export { PlayerSeasonPpaAveragePpa };
var PlayerSeasonPpaTotalPpa = /** @class */ (function (_super) {
    __extends(PlayerSeasonPpaTotalPpa, _super);
    function PlayerSeasonPpaTotalPpa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=all" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaTotalPpa.prototype, "all", void 0);
    __decorate([
        Metadata({ data: "json, name=firstDown" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaTotalPpa.prototype, "firstDown", void 0);
    __decorate([
        Metadata({ data: "json, name=pass" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaTotalPpa.prototype, "pass", void 0);
    __decorate([
        Metadata({ data: "json, name=passingDowns" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaTotalPpa.prototype, "passingDowns", void 0);
    __decorate([
        Metadata({ data: "json, name=rush" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaTotalPpa.prototype, "rush", void 0);
    __decorate([
        Metadata({ data: "json, name=secondDown" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaTotalPpa.prototype, "secondDown", void 0);
    __decorate([
        Metadata({ data: "json, name=standardDowns" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaTotalPpa.prototype, "standardDowns", void 0);
    __decorate([
        Metadata({ data: "json, name=thirdDown" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpaTotalPpa.prototype, "thirdDown", void 0);
    return PlayerSeasonPpaTotalPpa;
}(SpeakeasyBase));
export { PlayerSeasonPpaTotalPpa };
var PlayerSeasonPpa = /** @class */ (function (_super) {
    __extends(PlayerSeasonPpa, _super);
    function PlayerSeasonPpa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=averagePPA" }),
        __metadata("design:type", PlayerSeasonPpaAveragePpa)
    ], PlayerSeasonPpa.prototype, "averagePpa", void 0);
    __decorate([
        Metadata({ data: "json, name=conference" }),
        __metadata("design:type", String)
    ], PlayerSeasonPpa.prototype, "conference", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpa.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PlayerSeasonPpa.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], PlayerSeasonPpa.prototype, "position", void 0);
    __decorate([
        Metadata({ data: "json, name=season" }),
        __metadata("design:type", Number)
    ], PlayerSeasonPpa.prototype, "season", void 0);
    __decorate([
        Metadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], PlayerSeasonPpa.prototype, "team", void 0);
    __decorate([
        Metadata({ data: "json, name=totalPPA" }),
        __metadata("design:type", PlayerSeasonPpaTotalPpa)
    ], PlayerSeasonPpa.prototype, "totalPpa", void 0);
    return PlayerSeasonPpa;
}(SpeakeasyBase));
export { PlayerSeasonPpa };
