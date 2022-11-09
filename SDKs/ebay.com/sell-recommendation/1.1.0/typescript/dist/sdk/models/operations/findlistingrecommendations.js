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
var FindListingRecommendationsQueryParams = /** @class */ (function (_super) {
    __extends(FindListingRecommendationsQueryParams, _super);
    function FindListingRecommendationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], FindListingRecommendationsQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], FindListingRecommendationsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], FindListingRecommendationsQueryParams.prototype, "offset", void 0);
    return FindListingRecommendationsQueryParams;
}(SpeakeasyBase));
export { FindListingRecommendationsQueryParams };
var FindListingRecommendationsHeaders = /** @class */ (function (_super) {
    __extends(FindListingRecommendationsHeaders, _super);
    function FindListingRecommendationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-EBAY-C-MARKETPLACE-ID" }),
        __metadata("design:type", String)
    ], FindListingRecommendationsHeaders.prototype, "xEbayCMarketplaceId", void 0);
    return FindListingRecommendationsHeaders;
}(SpeakeasyBase));
export { FindListingRecommendationsHeaders };
var FindListingRecommendationsSecurity = /** @class */ (function (_super) {
    __extends(FindListingRecommendationsSecurity, _super);
    function FindListingRecommendationsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], FindListingRecommendationsSecurity.prototype, "apiAuth", void 0);
    return FindListingRecommendationsSecurity;
}(SpeakeasyBase));
export { FindListingRecommendationsSecurity };
var FindListingRecommendationsRequest = /** @class */ (function (_super) {
    __extends(FindListingRecommendationsRequest, _super);
    function FindListingRecommendationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FindListingRecommendationsQueryParams)
    ], FindListingRecommendationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FindListingRecommendationsHeaders)
    ], FindListingRecommendationsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FindListingRecommendationRequest)
    ], FindListingRecommendationsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FindListingRecommendationsSecurity)
    ], FindListingRecommendationsRequest.prototype, "security", void 0);
    return FindListingRecommendationsRequest;
}(SpeakeasyBase));
export { FindListingRecommendationsRequest };
var FindListingRecommendationsResponse = /** @class */ (function (_super) {
    __extends(FindListingRecommendationsResponse, _super);
    function FindListingRecommendationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FindListingRecommendationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PagedListingRecommendationCollection)
    ], FindListingRecommendationsResponse.prototype, "pagedListingRecommendationCollection", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FindListingRecommendationsResponse.prototype, "statusCode", void 0);
    return FindListingRecommendationsResponse;
}(SpeakeasyBase));
export { FindListingRecommendationsResponse };
