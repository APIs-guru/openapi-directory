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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetListingViolationsSummaryQueryParams = /** @class */ (function (_super) {
    __extends(GetListingViolationsSummaryQueryParams, _super);
    function GetListingViolationsSummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=compliance_type" }),
        __metadata("design:type", String)
    ], GetListingViolationsSummaryQueryParams.prototype, "complianceType", void 0);
    return GetListingViolationsSummaryQueryParams;
}(SpeakeasyBase));
export { GetListingViolationsSummaryQueryParams };
var GetListingViolationsSummaryHeaders = /** @class */ (function (_super) {
    __extends(GetListingViolationsSummaryHeaders, _super);
    function GetListingViolationsSummaryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" }),
        __metadata("design:type", String)
    ], GetListingViolationsSummaryHeaders.prototype, "xEbayCMarketplaceId", void 0);
    return GetListingViolationsSummaryHeaders;
}(SpeakeasyBase));
export { GetListingViolationsSummaryHeaders };
var GetListingViolationsSummarySecurity = /** @class */ (function (_super) {
    __extends(GetListingViolationsSummarySecurity, _super);
    function GetListingViolationsSummarySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetListingViolationsSummarySecurity.prototype, "apiAuth", void 0);
    return GetListingViolationsSummarySecurity;
}(SpeakeasyBase));
export { GetListingViolationsSummarySecurity };
var GetListingViolationsSummaryRequest = /** @class */ (function (_super) {
    __extends(GetListingViolationsSummaryRequest, _super);
    function GetListingViolationsSummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListingViolationsSummaryQueryParams)
    ], GetListingViolationsSummaryRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListingViolationsSummaryHeaders)
    ], GetListingViolationsSummaryRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListingViolationsSummarySecurity)
    ], GetListingViolationsSummaryRequest.prototype, "security", void 0);
    return GetListingViolationsSummaryRequest;
}(SpeakeasyBase));
export { GetListingViolationsSummaryRequest };
var GetListingViolationsSummaryResponse = /** @class */ (function (_super) {
    __extends(GetListingViolationsSummaryResponse, _super);
    function GetListingViolationsSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ComplianceSummary)
    ], GetListingViolationsSummaryResponse.prototype, "complianceSummary", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListingViolationsSummaryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListingViolationsSummaryResponse.prototype, "statusCode", void 0);
    return GetListingViolationsSummaryResponse;
}(SpeakeasyBase));
export { GetListingViolationsSummaryResponse };
