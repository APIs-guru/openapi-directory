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
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilterbetweenfilter";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilterinlistfilter";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilternumericfilter";
import { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter } from "./googleanalyticsadminv1alphaaudiencedimensionormetricfilterstringfilter";
// GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter
/**
 * A specific filter for a single dimension or metric.
**/
var GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter, _super);
    function GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=atAnyPointInTime" }),
        __metadata("design:type", Boolean)
    ], GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter.prototype, "atAnyPointInTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=betweenFilter" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterBetweenFilter)
    ], GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter.prototype, "betweenFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter.prototype, "fieldName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inAnyNDayPeriod" }),
        __metadata("design:type", Number)
    ], GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter.prototype, "inAnyNDayPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inListFilter" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterInListFilter)
    ], GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter.prototype, "inListFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numericFilter" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterNumericFilter)
    ], GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter.prototype, "numericFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringFilter" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilterStringFilter)
    ], GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter.prototype, "stringFilter", void 0);
    return GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaAudienceDimensionOrMetricFilter };
