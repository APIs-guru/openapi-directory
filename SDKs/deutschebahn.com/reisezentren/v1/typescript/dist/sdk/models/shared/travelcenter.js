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
// TravelCenterOpeningTimes
/**
 * Opening times of the travel center, ordered by week day
**/
var TravelCenterOpeningTimes = /** @class */ (function (_super) {
    __extends(TravelCenterOpeningTimes, _super);
    function TravelCenterOpeningTimes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=fri" }),
        __metadata("design:type", Array)
    ], TravelCenterOpeningTimes.prototype, "fri", void 0);
    __decorate([
        Metadata({ data: "json, name=mon" }),
        __metadata("design:type", Array)
    ], TravelCenterOpeningTimes.prototype, "mon", void 0);
    __decorate([
        Metadata({ data: "json, name=sat" }),
        __metadata("design:type", Array)
    ], TravelCenterOpeningTimes.prototype, "sat", void 0);
    __decorate([
        Metadata({ data: "json, name=sun" }),
        __metadata("design:type", Array)
    ], TravelCenterOpeningTimes.prototype, "sun", void 0);
    __decorate([
        Metadata({ data: "json, name=thu" }),
        __metadata("design:type", Array)
    ], TravelCenterOpeningTimes.prototype, "thu", void 0);
    __decorate([
        Metadata({ data: "json, name=tue" }),
        __metadata("design:type", Array)
    ], TravelCenterOpeningTimes.prototype, "tue", void 0);
    __decorate([
        Metadata({ data: "json, name=wed" }),
        __metadata("design:type", Array)
    ], TravelCenterOpeningTimes.prototype, "wed", void 0);
    return TravelCenterOpeningTimes;
}(SpeakeasyBase));
export { TravelCenterOpeningTimes };
export var TravelCenterTypeEnum;
(function (TravelCenterTypeEnum) {
    TravelCenterTypeEnum["Reisezentrum"] = "Reisezentrum";
    TravelCenterTypeEnum["MobilityCenter"] = "Mobility Center";
})(TravelCenterTypeEnum || (TravelCenterTypeEnum = {}));
var TravelCenter = /** @class */ (function (_super) {
    __extends(TravelCenter, _super);
    function TravelCenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], TravelCenter.prototype, "address", void 0);
    __decorate([
        Metadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], TravelCenter.prototype, "city", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], TravelCenter.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], TravelCenter.prototype, "lat", void 0);
    __decorate([
        Metadata({ data: "json, name=lon" }),
        __metadata("design:type", Number)
    ], TravelCenter.prototype, "lon", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TravelCenter.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=openingTimes" }),
        __metadata("design:type", TravelCenterOpeningTimes)
    ], TravelCenter.prototype, "openingTimes", void 0);
    __decorate([
        Metadata({ data: "json, name=postCode" }),
        __metadata("design:type", String)
    ], TravelCenter.prototype, "postCode", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], TravelCenter.prototype, "type", void 0);
    return TravelCenter;
}(SpeakeasyBase));
export { TravelCenter };
