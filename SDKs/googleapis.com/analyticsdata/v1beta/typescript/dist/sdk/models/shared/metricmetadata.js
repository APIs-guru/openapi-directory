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
export var MetricMetadataBlockedReasonsEnum;
(function (MetricMetadataBlockedReasonsEnum) {
    MetricMetadataBlockedReasonsEnum["BlockedReasonUnspecified"] = "BLOCKED_REASON_UNSPECIFIED";
    MetricMetadataBlockedReasonsEnum["NoRevenueMetrics"] = "NO_REVENUE_METRICS";
    MetricMetadataBlockedReasonsEnum["NoCostMetrics"] = "NO_COST_METRICS";
})(MetricMetadataBlockedReasonsEnum || (MetricMetadataBlockedReasonsEnum = {}));
export var MetricMetadataTypeEnum;
(function (MetricMetadataTypeEnum) {
    MetricMetadataTypeEnum["MetricTypeUnspecified"] = "METRIC_TYPE_UNSPECIFIED";
    MetricMetadataTypeEnum["TypeInteger"] = "TYPE_INTEGER";
    MetricMetadataTypeEnum["TypeFloat"] = "TYPE_FLOAT";
    MetricMetadataTypeEnum["TypeSeconds"] = "TYPE_SECONDS";
    MetricMetadataTypeEnum["TypeMilliseconds"] = "TYPE_MILLISECONDS";
    MetricMetadataTypeEnum["TypeMinutes"] = "TYPE_MINUTES";
    MetricMetadataTypeEnum["TypeHours"] = "TYPE_HOURS";
    MetricMetadataTypeEnum["TypeStandard"] = "TYPE_STANDARD";
    MetricMetadataTypeEnum["TypeCurrency"] = "TYPE_CURRENCY";
    MetricMetadataTypeEnum["TypeFeet"] = "TYPE_FEET";
    MetricMetadataTypeEnum["TypeMiles"] = "TYPE_MILES";
    MetricMetadataTypeEnum["TypeMeters"] = "TYPE_METERS";
    MetricMetadataTypeEnum["TypeKilometers"] = "TYPE_KILOMETERS";
})(MetricMetadataTypeEnum || (MetricMetadataTypeEnum = {}));
// MetricMetadata
/**
 * Explains a metric.
**/
var MetricMetadata = /** @class */ (function (_super) {
    __extends(MetricMetadata, _super);
    function MetricMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiName" }),
        __metadata("design:type", String)
    ], MetricMetadata.prototype, "apiName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockedReasons" }),
        __metadata("design:type", Array)
    ], MetricMetadata.prototype, "blockedReasons", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], MetricMetadata.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customDefinition" }),
        __metadata("design:type", Boolean)
    ], MetricMetadata.prototype, "customDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecatedApiNames" }),
        __metadata("design:type", Array)
    ], MetricMetadata.prototype, "deprecatedApiNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], MetricMetadata.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expression" }),
        __metadata("design:type", String)
    ], MetricMetadata.prototype, "expression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], MetricMetadata.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uiName" }),
        __metadata("design:type", String)
    ], MetricMetadata.prototype, "uiName", void 0);
    return MetricMetadata;
}(SpeakeasyBase));
export { MetricMetadata };
