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
var ListWebsiteCertificateAuthoritiesQueryParams = /** @class */ (function (_super) {
    __extends(ListWebsiteCertificateAuthoritiesQueryParams, _super);
    function ListWebsiteCertificateAuthoritiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListWebsiteCertificateAuthoritiesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListWebsiteCertificateAuthoritiesQueryParams.prototype, "nextToken", void 0);
    return ListWebsiteCertificateAuthoritiesQueryParams;
}(SpeakeasyBase));
export { ListWebsiteCertificateAuthoritiesQueryParams };
var ListWebsiteCertificateAuthoritiesHeaders = /** @class */ (function (_super) {
    __extends(ListWebsiteCertificateAuthoritiesHeaders, _super);
    function ListWebsiteCertificateAuthoritiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListWebsiteCertificateAuthoritiesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListWebsiteCertificateAuthoritiesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListWebsiteCertificateAuthoritiesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListWebsiteCertificateAuthoritiesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListWebsiteCertificateAuthoritiesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListWebsiteCertificateAuthoritiesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListWebsiteCertificateAuthoritiesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListWebsiteCertificateAuthoritiesHeaders;
}(SpeakeasyBase));
export { ListWebsiteCertificateAuthoritiesHeaders };
var ListWebsiteCertificateAuthoritiesRequestBody = /** @class */ (function (_super) {
    __extends(ListWebsiteCertificateAuthoritiesRequestBody, _super);
    function ListWebsiteCertificateAuthoritiesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FleetArn" }),
        __metadata("design:type", String)
    ], ListWebsiteCertificateAuthoritiesRequestBody.prototype, "fleetArn", void 0);
    __decorate([
        Metadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListWebsiteCertificateAuthoritiesRequestBody.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListWebsiteCertificateAuthoritiesRequestBody.prototype, "nextToken", void 0);
    return ListWebsiteCertificateAuthoritiesRequestBody;
}(SpeakeasyBase));
export { ListWebsiteCertificateAuthoritiesRequestBody };
var ListWebsiteCertificateAuthoritiesRequest = /** @class */ (function (_super) {
    __extends(ListWebsiteCertificateAuthoritiesRequest, _super);
    function ListWebsiteCertificateAuthoritiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListWebsiteCertificateAuthoritiesQueryParams)
    ], ListWebsiteCertificateAuthoritiesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListWebsiteCertificateAuthoritiesHeaders)
    ], ListWebsiteCertificateAuthoritiesRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListWebsiteCertificateAuthoritiesRequestBody)
    ], ListWebsiteCertificateAuthoritiesRequest.prototype, "request", void 0);
    return ListWebsiteCertificateAuthoritiesRequest;
}(SpeakeasyBase));
export { ListWebsiteCertificateAuthoritiesRequest };
var ListWebsiteCertificateAuthoritiesResponse = /** @class */ (function (_super) {
    __extends(ListWebsiteCertificateAuthoritiesResponse, _super);
    function ListWebsiteCertificateAuthoritiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListWebsiteCertificateAuthoritiesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListWebsiteCertificateAuthoritiesResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListWebsiteCertificateAuthoritiesResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListWebsiteCertificateAuthoritiesResponse)
    ], ListWebsiteCertificateAuthoritiesResponse.prototype, "listWebsiteCertificateAuthoritiesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListWebsiteCertificateAuthoritiesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListWebsiteCertificateAuthoritiesResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], ListWebsiteCertificateAuthoritiesResponse.prototype, "unauthorizedException", void 0);
    return ListWebsiteCertificateAuthoritiesResponse;
}(SpeakeasyBase));
export { ListWebsiteCertificateAuthoritiesResponse };
