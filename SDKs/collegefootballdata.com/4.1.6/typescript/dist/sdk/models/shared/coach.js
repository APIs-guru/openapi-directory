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
var CoachSeasons = /** @class */ (function (_super) {
    __extends(CoachSeasons, _super);
    function CoachSeasons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=games" }),
        __metadata("design:type", Number)
    ], CoachSeasons.prototype, "games", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=losses" }),
        __metadata("design:type", Number)
    ], CoachSeasons.prototype, "losses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postseason_rank" }),
        __metadata("design:type", Number)
    ], CoachSeasons.prototype, "postseasonRank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preseason_rank" }),
        __metadata("design:type", Number)
    ], CoachSeasons.prototype, "preseasonRank", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=school" }),
        __metadata("design:type", String)
    ], CoachSeasons.prototype, "school", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sp_defense" }),
        __metadata("design:type", Number)
    ], CoachSeasons.prototype, "spDefense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sp_offense" }),
        __metadata("design:type", Number)
    ], CoachSeasons.prototype, "spOffense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sp_overall" }),
        __metadata("design:type", Number)
    ], CoachSeasons.prototype, "spOverall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=srs" }),
        __metadata("design:type", Number)
    ], CoachSeasons.prototype, "srs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ties" }),
        __metadata("design:type", Number)
    ], CoachSeasons.prototype, "ties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wins" }),
        __metadata("design:type", Number)
    ], CoachSeasons.prototype, "wins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], CoachSeasons.prototype, "year", void 0);
    return CoachSeasons;
}(SpeakeasyBase));
export { CoachSeasons };
var Coach = /** @class */ (function (_super) {
    __extends(Coach, _super);
    function Coach() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], Coach.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], Coach.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seasons", elemType: CoachSeasons }),
        __metadata("design:type", Array)
    ], Coach.prototype, "seasons", void 0);
    return Coach;
}(SpeakeasyBase));
export { Coach };
