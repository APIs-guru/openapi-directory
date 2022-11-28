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
import { GoogleAnalyticsAdminV1alphaAccessQuotaStatus } from "./googleanalyticsadminv1alphaaccessquotastatus";
// GoogleAnalyticsAdminV1alphaAccessQuota
/**
 * Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
**/
var GoogleAnalyticsAdminV1alphaAccessQuota = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaAccessQuota, _super);
    function GoogleAnalyticsAdminV1alphaAccessQuota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concurrentRequests" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAccessQuotaStatus)
    ], GoogleAnalyticsAdminV1alphaAccessQuota.prototype, "concurrentRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverErrorsPerProjectPerHour" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAccessQuotaStatus)
    ], GoogleAnalyticsAdminV1alphaAccessQuota.prototype, "serverErrorsPerProjectPerHour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokensPerDay" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAccessQuotaStatus)
    ], GoogleAnalyticsAdminV1alphaAccessQuota.prototype, "tokensPerDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokensPerHour" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAccessQuotaStatus)
    ], GoogleAnalyticsAdminV1alphaAccessQuota.prototype, "tokensPerHour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokensPerProjectPerHour" }),
        __metadata("design:type", GoogleAnalyticsAdminV1alphaAccessQuotaStatus)
    ], GoogleAnalyticsAdminV1alphaAccessQuota.prototype, "tokensPerProjectPerHour", void 0);
    return GoogleAnalyticsAdminV1alphaAccessQuota;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaAccessQuota };
