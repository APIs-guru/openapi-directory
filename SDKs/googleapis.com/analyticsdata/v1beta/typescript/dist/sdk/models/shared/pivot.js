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
import { OrderBy } from "./orderby";
export var PivotMetricAggregationsEnum;
(function (PivotMetricAggregationsEnum) {
    PivotMetricAggregationsEnum["MetricAggregationUnspecified"] = "METRIC_AGGREGATION_UNSPECIFIED";
    PivotMetricAggregationsEnum["Total"] = "TOTAL";
    PivotMetricAggregationsEnum["Minimum"] = "MINIMUM";
    PivotMetricAggregationsEnum["Maximum"] = "MAXIMUM";
    PivotMetricAggregationsEnum["Count"] = "COUNT";
})(PivotMetricAggregationsEnum || (PivotMetricAggregationsEnum = {}));
// Pivot
/**
 * Describes the visible dimension columns and rows in the report response.
**/
var Pivot = /** @class */ (function (_super) {
    __extends(Pivot, _super);
    function Pivot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldNames" }),
        __metadata("design:type", Array)
    ], Pivot.prototype, "fieldNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", String)
    ], Pivot.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricAggregations" }),
        __metadata("design:type", Array)
    ], Pivot.prototype, "metricAggregations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", String)
    ], Pivot.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderBys", elemType: OrderBy }),
        __metadata("design:type", Array)
    ], Pivot.prototype, "orderBys", void 0);
    return Pivot;
}(SpeakeasyBase));
export { Pivot };
