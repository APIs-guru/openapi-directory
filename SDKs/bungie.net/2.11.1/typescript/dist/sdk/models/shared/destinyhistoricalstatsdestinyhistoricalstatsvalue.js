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
// DestinyHistoricalStatsDestinyHistoricalStatsValueBasic
/**
 * Basic stat value.
**/
var DestinyHistoricalStatsDestinyHistoricalStatsValueBasic = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyHistoricalStatsValueBasic, _super);
    function DestinyHistoricalStatsDestinyHistoricalStatsValueBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyHistoricalStatsValueBasic.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyHistoricalStatsValueBasic.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyHistoricalStatsValueBasic;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyHistoricalStatsValueBasic };
// DestinyHistoricalStatsDestinyHistoricalStatsValuePga
/**
 * Per game average for the statistic, if applicable
**/
var DestinyHistoricalStatsDestinyHistoricalStatsValuePga = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyHistoricalStatsValuePga, _super);
    function DestinyHistoricalStatsDestinyHistoricalStatsValuePga() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyHistoricalStatsValuePga.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyHistoricalStatsValuePga.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyHistoricalStatsValuePga;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyHistoricalStatsValuePga };
// DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted
/**
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
var DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted, _super);
    function DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted };
var DestinyHistoricalStatsDestinyHistoricalStatsValue = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyHistoricalStatsValue, _super);
    function DestinyHistoricalStatsDestinyHistoricalStatsValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyHistoricalStatsValue.prototype, "activityId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyHistoricalStatsValueBasic)
    ], DestinyHistoricalStatsDestinyHistoricalStatsValue.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyHistoricalStatsValuePga)
    ], DestinyHistoricalStatsDestinyHistoricalStatsValue.prototype, "pga", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyHistoricalStatsValue.prototype, "statId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyHistoricalStatsValueWeighted)
    ], DestinyHistoricalStatsDestinyHistoricalStatsValue.prototype, "weighted", void 0);
    return DestinyHistoricalStatsDestinyHistoricalStatsValue;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyHistoricalStatsValue };
