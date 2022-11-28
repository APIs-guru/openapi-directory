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
export var SegmentMetricFilterOperatorEnum;
(function (SegmentMetricFilterOperatorEnum) {
    SegmentMetricFilterOperatorEnum["UnspecifiedOperator"] = "UNSPECIFIED_OPERATOR";
    SegmentMetricFilterOperatorEnum["LessThan"] = "LESS_THAN";
    SegmentMetricFilterOperatorEnum["GreaterThan"] = "GREATER_THAN";
    SegmentMetricFilterOperatorEnum["Equal"] = "EQUAL";
    SegmentMetricFilterOperatorEnum["Between"] = "BETWEEN";
})(SegmentMetricFilterOperatorEnum || (SegmentMetricFilterOperatorEnum = {}));
export var SegmentMetricFilterScopeEnum;
(function (SegmentMetricFilterScopeEnum) {
    SegmentMetricFilterScopeEnum["UnspecifiedScope"] = "UNSPECIFIED_SCOPE";
    SegmentMetricFilterScopeEnum["Product"] = "PRODUCT";
    SegmentMetricFilterScopeEnum["Hit"] = "HIT";
    SegmentMetricFilterScopeEnum["Session"] = "SESSION";
    SegmentMetricFilterScopeEnum["User"] = "USER";
})(SegmentMetricFilterScopeEnum || (SegmentMetricFilterScopeEnum = {}));
// SegmentMetricFilter
/**
 * Metric filter to be used in a segment filter clause.
**/
var SegmentMetricFilter = /** @class */ (function (_super) {
    __extends(SegmentMetricFilter, _super);
    function SegmentMetricFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparisonValue" }),
        __metadata("design:type", String)
    ], SegmentMetricFilter.prototype, "comparisonValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxComparisonValue" }),
        __metadata("design:type", String)
    ], SegmentMetricFilter.prototype, "maxComparisonValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricName" }),
        __metadata("design:type", String)
    ], SegmentMetricFilter.prototype, "metricName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operator" }),
        __metadata("design:type", String)
    ], SegmentMetricFilter.prototype, "operator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], SegmentMetricFilter.prototype, "scope", void 0);
    return SegmentMetricFilter;
}(SpeakeasyBase));
export { SegmentMetricFilter };
