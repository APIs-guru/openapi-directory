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
var RecruitHometownInfo = /** @class */ (function (_super) {
    __extends(RecruitHometownInfo, _super);
    function RecruitHometownInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=countyFips" }),
        __metadata("design:type", String)
    ], RecruitHometownInfo.prototype, "countyFips", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], RecruitHometownInfo.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], RecruitHometownInfo.prototype, "longitude", void 0);
    return RecruitHometownInfo;
}(SpeakeasyBase));
export { RecruitHometownInfo };
var Recruit = /** @class */ (function (_super) {
    __extends(Recruit, _super);
    function Recruit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=athleteId" }),
        __metadata("design:type", Number)
    ], Recruit.prototype, "athleteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], Recruit.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committedTo" }),
        __metadata("design:type", String)
    ], Recruit.prototype, "committedTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], Recruit.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], Recruit.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hometownInfo" }),
        __metadata("design:type", RecruitHometownInfo)
    ], Recruit.prototype, "hometownInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Recruit.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Recruit.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=position" }),
        __metadata("design:type", String)
    ], Recruit.prototype, "position", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ranking" }),
        __metadata("design:type", Number)
    ], Recruit.prototype, "ranking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", Number)
    ], Recruit.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recruitType" }),
        __metadata("design:type", String)
    ], Recruit.prototype, "recruitType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=school" }),
        __metadata("design:type", String)
    ], Recruit.prototype, "school", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stars" }),
        __metadata("design:type", Number)
    ], Recruit.prototype, "stars", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateProvince" }),
        __metadata("design:type", String)
    ], Recruit.prototype, "stateProvince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], Recruit.prototype, "weight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], Recruit.prototype, "year", void 0);
    return Recruit;
}(SpeakeasyBase));
export { Recruit };
