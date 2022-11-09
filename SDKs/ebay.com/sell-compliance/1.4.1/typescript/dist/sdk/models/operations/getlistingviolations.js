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
var GetListingViolationsQueryParams = /** @class */ (function (_super) {
    __extends(GetListingViolationsQueryParams, _super);
    function GetListingViolationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=compliance_type" }),
        __metadata("design:type", String)
    ], GetListingViolationsQueryParams.prototype, "complianceType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetListingViolationsQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetListingViolationsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=listing_id" }),
        __metadata("design:type", String)
    ], GetListingViolationsQueryParams.prototype, "listingId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetListingViolationsQueryParams.prototype, "offset", void 0);
    return GetListingViolationsQueryParams;
}(SpeakeasyBase));
export { GetListingViolationsQueryParams };
var GetListingViolationsHeaders = /** @class */ (function (_super) {
    __extends(GetListingViolationsHeaders, _super);
    function GetListingViolationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" }),
        __metadata("design:type", String)
    ], GetListingViolationsHeaders.prototype, "xEbayCMarketplaceId", void 0);
    return GetListingViolationsHeaders;
}(SpeakeasyBase));
export { GetListingViolationsHeaders };
var GetListingViolationsSecurity = /** @class */ (function (_super) {
    __extends(GetListingViolationsSecurity, _super);
    function GetListingViolationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetListingViolationsSecurity.prototype, "apiAuth", void 0);
    return GetListingViolationsSecurity;
}(SpeakeasyBase));
export { GetListingViolationsSecurity };
var GetListingViolationsRequest = /** @class */ (function (_super) {
    __extends(GetListingViolationsRequest, _super);
    function GetListingViolationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetListingViolationsQueryParams)
    ], GetListingViolationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListingViolationsHeaders)
    ], GetListingViolationsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetListingViolationsSecurity)
    ], GetListingViolationsRequest.prototype, "security", void 0);
    return GetListingViolationsRequest;
}(SpeakeasyBase));
export { GetListingViolationsRequest };
var GetListingViolationsResponse = /** @class */ (function (_super) {
    __extends(GetListingViolationsResponse, _super);
    function GetListingViolationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetListingViolationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PagedComplianceViolationCollection)
    ], GetListingViolationsResponse.prototype, "pagedComplianceViolationCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetListingViolationsResponse.prototype, "statusCode", void 0);
    return GetListingViolationsResponse;
}(SpeakeasyBase));
export { GetListingViolationsResponse };
