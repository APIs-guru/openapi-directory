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
import * as shared from "../shared";
var GetPromotionSummaryReportQueryParams = /** @class */ (function (_super) {
    __extends(GetPromotionSummaryReportQueryParams, _super);
    function GetPromotionSummaryReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marketplace_id" }),
        __metadata("design:type", String)
    ], GetPromotionSummaryReportQueryParams.prototype, "marketplaceId", void 0);
    return GetPromotionSummaryReportQueryParams;
}(SpeakeasyBase));
export { GetPromotionSummaryReportQueryParams };
var GetPromotionSummaryReportSecurity = /** @class */ (function (_super) {
    __extends(GetPromotionSummaryReportSecurity, _super);
    function GetPromotionSummaryReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetPromotionSummaryReportSecurity.prototype, "apiAuth", void 0);
    return GetPromotionSummaryReportSecurity;
}(SpeakeasyBase));
export { GetPromotionSummaryReportSecurity };
var GetPromotionSummaryReportRequest = /** @class */ (function (_super) {
    __extends(GetPromotionSummaryReportRequest, _super);
    function GetPromotionSummaryReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPromotionSummaryReportQueryParams)
    ], GetPromotionSummaryReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPromotionSummaryReportSecurity)
    ], GetPromotionSummaryReportRequest.prototype, "security", void 0);
    return GetPromotionSummaryReportRequest;
}(SpeakeasyBase));
export { GetPromotionSummaryReportRequest };
var GetPromotionSummaryReportResponse = /** @class */ (function (_super) {
    __extends(GetPromotionSummaryReportResponse, _super);
    function GetPromotionSummaryReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPromotionSummaryReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPromotionSummaryReportResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SummaryReportResponse)
    ], GetPromotionSummaryReportResponse.prototype, "summaryReportResponse", void 0);
    return GetPromotionSummaryReportResponse;
}(SpeakeasyBase));
export { GetPromotionSummaryReportResponse };
