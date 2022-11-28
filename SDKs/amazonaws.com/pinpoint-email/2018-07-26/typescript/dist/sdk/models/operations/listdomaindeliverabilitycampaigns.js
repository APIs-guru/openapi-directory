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
var ListDomainDeliverabilityCampaignsPathParams = /** @class */ (function (_super) {
    __extends(ListDomainDeliverabilityCampaignsPathParams, _super);
    function ListDomainDeliverabilityCampaignsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscribedDomain" }),
        __metadata("design:type", String)
    ], ListDomainDeliverabilityCampaignsPathParams.prototype, "subscribedDomain", void 0);
    return ListDomainDeliverabilityCampaignsPathParams;
}(SpeakeasyBase));
export { ListDomainDeliverabilityCampaignsPathParams };
var ListDomainDeliverabilityCampaignsQueryParams = /** @class */ (function (_super) {
    __extends(ListDomainDeliverabilityCampaignsQueryParams, _super);
    function ListDomainDeliverabilityCampaignsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EndDate" }),
        __metadata("design:type", Date)
    ], ListDomainDeliverabilityCampaignsQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListDomainDeliverabilityCampaignsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListDomainDeliverabilityCampaignsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartDate" }),
        __metadata("design:type", Date)
    ], ListDomainDeliverabilityCampaignsQueryParams.prototype, "startDate", void 0);
    return ListDomainDeliverabilityCampaignsQueryParams;
}(SpeakeasyBase));
export { ListDomainDeliverabilityCampaignsQueryParams };
var ListDomainDeliverabilityCampaignsHeaders = /** @class */ (function (_super) {
    __extends(ListDomainDeliverabilityCampaignsHeaders, _super);
    function ListDomainDeliverabilityCampaignsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListDomainDeliverabilityCampaignsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListDomainDeliverabilityCampaignsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListDomainDeliverabilityCampaignsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListDomainDeliverabilityCampaignsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListDomainDeliverabilityCampaignsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListDomainDeliverabilityCampaignsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListDomainDeliverabilityCampaignsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListDomainDeliverabilityCampaignsHeaders;
}(SpeakeasyBase));
export { ListDomainDeliverabilityCampaignsHeaders };
var ListDomainDeliverabilityCampaignsRequest = /** @class */ (function (_super) {
    __extends(ListDomainDeliverabilityCampaignsRequest, _super);
    function ListDomainDeliverabilityCampaignsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDomainDeliverabilityCampaignsPathParams)
    ], ListDomainDeliverabilityCampaignsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDomainDeliverabilityCampaignsQueryParams)
    ], ListDomainDeliverabilityCampaignsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDomainDeliverabilityCampaignsHeaders)
    ], ListDomainDeliverabilityCampaignsRequest.prototype, "headers", void 0);
    return ListDomainDeliverabilityCampaignsRequest;
}(SpeakeasyBase));
export { ListDomainDeliverabilityCampaignsRequest };
var ListDomainDeliverabilityCampaignsResponse = /** @class */ (function (_super) {
    __extends(ListDomainDeliverabilityCampaignsResponse, _super);
    function ListDomainDeliverabilityCampaignsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDomainDeliverabilityCampaignsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDomainDeliverabilityCampaignsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDomainDeliverabilityCampaignsResponse)
    ], ListDomainDeliverabilityCampaignsResponse.prototype, "listDomainDeliverabilityCampaignsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDomainDeliverabilityCampaignsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDomainDeliverabilityCampaignsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], ListDomainDeliverabilityCampaignsResponse.prototype, "tooManyRequestsException", void 0);
    return ListDomainDeliverabilityCampaignsResponse;
}(SpeakeasyBase));
export { ListDomainDeliverabilityCampaignsResponse };
