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
var ReturningProduction = /** @class */ (function (_super) {
    __extends(ReturningProduction, _super);
    function ReturningProduction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conference" }),
        __metadata("design:type", String)
    ], ReturningProduction.prototype, "conference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passingUsage" }),
        __metadata("design:type", Number)
    ], ReturningProduction.prototype, "passingUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentPPA" }),
        __metadata("design:type", Number)
    ], ReturningProduction.prototype, "percentPpa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentPassingPPA" }),
        __metadata("design:type", Number)
    ], ReturningProduction.prototype, "percentPassingPpa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentReceivingPPA" }),
        __metadata("design:type", Number)
    ], ReturningProduction.prototype, "percentReceivingPpa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=percentRushingPPA" }),
        __metadata("design:type", Number)
    ], ReturningProduction.prototype, "percentRushingPpa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receivingUsage" }),
        __metadata("design:type", Number)
    ], ReturningProduction.prototype, "receivingUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rushingUsage" }),
        __metadata("design:type", Number)
    ], ReturningProduction.prototype, "rushingUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=season" }),
        __metadata("design:type", Number)
    ], ReturningProduction.prototype, "season", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team" }),
        __metadata("design:type", String)
    ], ReturningProduction.prototype, "team", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPPA" }),
        __metadata("design:type", Number)
    ], ReturningProduction.prototype, "totalPpa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalPassingPPA" }),
        __metadata("design:type", Number)
    ], ReturningProduction.prototype, "totalPassingPpa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalReceivingPPA" }),
        __metadata("design:type", Number)
    ], ReturningProduction.prototype, "totalReceivingPpa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalRushingPPA" }),
        __metadata("design:type", Number)
    ], ReturningProduction.prototype, "totalRushingPpa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage" }),
        __metadata("design:type", Number)
    ], ReturningProduction.prototype, "usage", void 0);
    return ReturningProduction;
}(SpeakeasyBase));
export { ReturningProduction };
