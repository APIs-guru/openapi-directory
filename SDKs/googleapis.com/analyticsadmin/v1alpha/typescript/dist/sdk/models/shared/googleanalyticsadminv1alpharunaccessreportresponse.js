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
import { GoogleAnalyticsAdminV1alphaAccessDimensionHeader } from "./googleanalyticsadminv1alphaaccessdimensionheader";
import { GoogleAnalyticsAdminV1alphaAccessMetricHeader } from "./googleanalyticsadminv1alphaaccessmetricheader";
import { GoogleAnalyticsAdminV1alphaAccessQuota } from "./googleanalyticsadminv1alphaaccessquota";
import { GoogleAnalyticsAdminV1alphaAccessRow } from "./googleanalyticsadminv1alphaaccessrow";
// GoogleAnalyticsAdminV1alphaRunAccessReportResponse
/**
 * The customized Data Access Record Report response.
**/
var GoogleAnalyticsAdminV1alphaRunAccessReportResponse = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaRunAccessReportResponse, _super);
    function GoogleAnalyticsAdminV1alphaRunAccessReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionHeaders", elemType: GoogleAnalyticsAdminV1alphaAccessDimensionHeader }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1alphaRunAccessReportResponse.prototype, "dimensionHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricHeaders", elemType: GoogleAnalyticsAdminV1alphaAccessMetricHeader }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1alphaRunAccessReportResponse.prototype, "metricHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quota" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAccessQuota)
    ], GoogleAnalyticsAdminV1alphaRunAccessReportResponse.prototype, "quota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowCount" }),
        __metadata("design:type", Number)
    ], GoogleAnalyticsAdminV1alphaRunAccessReportResponse.prototype, "rowCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rows", elemType: GoogleAnalyticsAdminV1alphaAccessRow }),
        __metadata("design:type", Array)
    ], GoogleAnalyticsAdminV1alphaRunAccessReportResponse.prototype, "rows", void 0);
    return GoogleAnalyticsAdminV1alphaRunAccessReportResponse;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaRunAccessReportResponse };
