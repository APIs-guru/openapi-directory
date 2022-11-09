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
var DraftPickHometownInfo = /** @class */ (function (_super) {
    __extends(DraftPickHometownInfo, _super);
    function DraftPickHometownInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], DraftPickHometownInfo.prototype, "city", void 0);
    __decorate([
        Metadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], DraftPickHometownInfo.prototype, "country", void 0);
    __decorate([
        Metadata({ data: "json, name=countryFips" }),
        __metadata("design:type", Number)
    ], DraftPickHometownInfo.prototype, "countryFips", void 0);
    __decorate([
        Metadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], DraftPickHometownInfo.prototype, "latitude", void 0);
    __decorate([
        Metadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], DraftPickHometownInfo.prototype, "longitude", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], DraftPickHometownInfo.prototype, "state", void 0);
    return DraftPickHometownInfo;
}(SpeakeasyBase));
export { DraftPickHometownInfo };
var DraftPick = /** @class */ (function (_super) {
    __extends(DraftPick, _super);
    function DraftPick() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=collegeAthleteId" }),
        __metadata("design:type", Number)
    ], DraftPick.prototype, "collegeAthleteId", void 0);
    __decorate([
        Metadata({ data: "json, name=collegeConference" }),
        __metadata("design:type", String)
    ], DraftPick.prototype, "collegeConference", void 0);
    __decorate([
        Metadata({ data: "json, name=collegeId" }),
        __metadata("design:type", Number)
    ], DraftPick.prototype, "collegeId", void 0);
    __decorate([
        Metadata({ data: "json, name=collegeTeam" }),
        __metadata("design:type", String)
    ], DraftPick.prototype, "collegeTeam", void 0);
    __decorate([
        Metadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], DraftPick.prototype, "height", void 0);
    __decorate([
        Metadata({ data: "json, name=hometownInfo" }),
        __metadata("design:type", DraftPickHometownInfo)
    ], DraftPick.prototype, "hometownInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DraftPick.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=nflAthleteId" }),
        __metadata("design:type", Number)
    ], DraftPick.prototype, "nflAthleteId", void 0);
    __decorate([
        Metadata({ data: "json, name=nflTeam" }),
        __metadata("design:type", String)
    ], DraftPick.prototype, "nflTeam", void 0);
    __decorate([
        Metadata({ data: "json, name=overall" }),
        __metadata("design:type", Number)
    ], DraftPick.prototype, "overall", void 0);
    __decorate([
        Metadata({ data: "json, name=pick" }),
        __metadata("design:type", Number)
    ], DraftPick.prototype, "pick", void 0);
    __decorate([
        Metadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], DraftPick.prototype, "position", void 0);
    __decorate([
        Metadata({ data: "json, name=preDraftGrade" }),
        __metadata("design:type", Number)
    ], DraftPick.prototype, "preDraftGrade", void 0);
    __decorate([
        Metadata({ data: "json, name=preDraftPositionRanking" }),
        __metadata("design:type", Number)
    ], DraftPick.prototype, "preDraftPositionRanking", void 0);
    __decorate([
        Metadata({ data: "json, name=preDraftRanking" }),
        __metadata("design:type", Number)
    ], DraftPick.prototype, "preDraftRanking", void 0);
    __decorate([
        Metadata({ data: "json, name=round" }),
        __metadata("design:type", Number)
    ], DraftPick.prototype, "round", void 0);
    __decorate([
        Metadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], DraftPick.prototype, "weight", void 0);
    __decorate([
        Metadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], DraftPick.prototype, "year", void 0);
    return DraftPick;
}(SpeakeasyBase));
export { DraftPick };
