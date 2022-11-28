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
// DestinyHistoricalStatsDestinyClanAggregateStatValueBasic
/**
 * Basic stat value.
**/
var DestinyHistoricalStatsDestinyClanAggregateStatValueBasic = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyClanAggregateStatValueBasic, _super);
    function DestinyHistoricalStatsDestinyClanAggregateStatValueBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyClanAggregateStatValueBasic.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyClanAggregateStatValueBasic.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyClanAggregateStatValueBasic;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyClanAggregateStatValueBasic };
// DestinyHistoricalStatsDestinyClanAggregateStatValuePga
/**
 * Per game average for the statistic, if applicable
**/
var DestinyHistoricalStatsDestinyClanAggregateStatValuePga = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyClanAggregateStatValuePga, _super);
    function DestinyHistoricalStatsDestinyClanAggregateStatValuePga() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyClanAggregateStatValuePga.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyClanAggregateStatValuePga.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyClanAggregateStatValuePga;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyClanAggregateStatValuePga };
// DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted
/**
 * Weighted value of the stat if a weight greater than 1 has been assigned.
**/
var DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted, _super);
    function DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted.prototype, "displayValue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted };
// DestinyHistoricalStatsDestinyClanAggregateStatValue
/**
 * Value of the stat for this player
**/
var DestinyHistoricalStatsDestinyClanAggregateStatValue = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyClanAggregateStatValue, _super);
    function DestinyHistoricalStatsDestinyClanAggregateStatValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyClanAggregateStatValue.prototype, "activityId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyClanAggregateStatValueBasic)
    ], DestinyHistoricalStatsDestinyClanAggregateStatValue.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyClanAggregateStatValuePga)
    ], DestinyHistoricalStatsDestinyClanAggregateStatValue.prototype, "pga", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyClanAggregateStatValue.prototype, "statId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyClanAggregateStatValueWeighted)
    ], DestinyHistoricalStatsDestinyClanAggregateStatValue.prototype, "weighted", void 0);
    return DestinyHistoricalStatsDestinyClanAggregateStatValue;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyClanAggregateStatValue };
var DestinyHistoricalStatsDestinyClanAggregateStat = /** @class */ (function (_super) {
    __extends(DestinyHistoricalStatsDestinyClanAggregateStat, _super);
    function DestinyHistoricalStatsDestinyClanAggregateStat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DestinyHistoricalStatsDestinyClanAggregateStat.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DestinyHistoricalStatsDestinyClanAggregateStat.prototype, "statId", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DestinyHistoricalStatsDestinyClanAggregateStatValue)
    ], DestinyHistoricalStatsDestinyClanAggregateStat.prototype, "value", void 0);
    return DestinyHistoricalStatsDestinyClanAggregateStat;
}(SpeakeasyBase));
export { DestinyHistoricalStatsDestinyClanAggregateStat };
