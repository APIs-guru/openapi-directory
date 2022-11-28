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
export var GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum;
(function (GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum) {
    GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum["MeasurementUnitUnspecified"] = "MEASUREMENT_UNIT_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum["Standard"] = "STANDARD";
    GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum["Currency"] = "CURRENCY";
    GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum["Feet"] = "FEET";
    GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum["Meters"] = "METERS";
    GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum["Kilometers"] = "KILOMETERS";
    GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum["Miles"] = "MILES";
    GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum["Milliseconds"] = "MILLISECONDS";
    GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum["Seconds"] = "SECONDS";
    GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum["Minutes"] = "MINUTES";
    GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum["Hours"] = "HOURS";
})(GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum || (GoogleAnalyticsAdminV1alphaCustomMetricMeasurementUnitEnum = {}));
export var GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum;
(function (GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum) {
    GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum["RestrictedMetricTypeUnspecified"] = "RESTRICTED_METRIC_TYPE_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum["CostData"] = "COST_DATA";
    GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum["RevenueData"] = "REVENUE_DATA";
})(GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum || (GoogleAnalyticsAdminV1alphaCustomMetricRestrictedMetricTypeEnum = {}));
export var GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum;
(function (GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum) {
    GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum["MetricScopeUnspecified"] = "METRIC_SCOPE_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum["Event"] = "EVENT";
})(GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum || (GoogleAnalyticsAdminV1alphaCustomMetricScopeEnum = {}));
// GoogleAnalyticsAdminV1alphaCustomMetricInput
/**
 * A definition for a custom metric.
**/
var GoogleAnalyticsAdminV1alphaCustomMetricInput = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaCustomMetricInput, _super);
    function GoogleAnalyticsAdminV1alphaCustomMetricInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaCustomMetricInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaCustomMetricInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=measurementUnit" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaCustomMetricInput.prototype, "measurementUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameterName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaCustomMetricInput.prototype, "parameterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictedMetricType" }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1alphaCustomMetricInput.prototype, "restrictedMetricType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaCustomMetricInput.prototype, "scope", void 0);
    return GoogleAnalyticsAdminV1alphaCustomMetricInput;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaCustomMetricInput };
// GoogleAnalyticsAdminV1alphaCustomMetric
/**
 * A definition for a custom metric.
**/
var GoogleAnalyticsAdminV1alphaCustomMetric = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaCustomMetric, _super);
    function GoogleAnalyticsAdminV1alphaCustomMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaCustomMetric.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaCustomMetric.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=measurementUnit" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaCustomMetric.prototype, "measurementUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaCustomMetric.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameterName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaCustomMetric.prototype, "parameterName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictedMetricType" }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1alphaCustomMetric.prototype, "restrictedMetricType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaCustomMetric.prototype, "scope", void 0);
    return GoogleAnalyticsAdminV1alphaCustomMetric;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaCustomMetric };
