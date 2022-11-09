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
var DescribeWebsiteCertificateAuthorityHeaders = /** @class */ (function (_super) {
    __extends(DescribeWebsiteCertificateAuthorityHeaders, _super);
    function DescribeWebsiteCertificateAuthorityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DescribeWebsiteCertificateAuthorityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DescribeWebsiteCertificateAuthorityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DescribeWebsiteCertificateAuthorityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DescribeWebsiteCertificateAuthorityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DescribeWebsiteCertificateAuthorityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DescribeWebsiteCertificateAuthorityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DescribeWebsiteCertificateAuthorityHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DescribeWebsiteCertificateAuthorityHeaders;
}(SpeakeasyBase));
export { DescribeWebsiteCertificateAuthorityHeaders };
var DescribeWebsiteCertificateAuthorityRequestBody = /** @class */ (function (_super) {
    __extends(DescribeWebsiteCertificateAuthorityRequestBody, _super);
    function DescribeWebsiteCertificateAuthorityRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=FleetArn" }),
        __metadata("design:type", String)
    ], DescribeWebsiteCertificateAuthorityRequestBody.prototype, "fleetArn", void 0);
    __decorate([
        Metadata({ data: "json, name=WebsiteCaId" }),
        __metadata("design:type", String)
    ], DescribeWebsiteCertificateAuthorityRequestBody.prototype, "websiteCaId", void 0);
    return DescribeWebsiteCertificateAuthorityRequestBody;
}(SpeakeasyBase));
export { DescribeWebsiteCertificateAuthorityRequestBody };
var DescribeWebsiteCertificateAuthorityRequest = /** @class */ (function (_super) {
    __extends(DescribeWebsiteCertificateAuthorityRequest, _super);
    function DescribeWebsiteCertificateAuthorityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DescribeWebsiteCertificateAuthorityHeaders)
    ], DescribeWebsiteCertificateAuthorityRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DescribeWebsiteCertificateAuthorityRequestBody)
    ], DescribeWebsiteCertificateAuthorityRequest.prototype, "request", void 0);
    return DescribeWebsiteCertificateAuthorityRequest;
}(SpeakeasyBase));
export { DescribeWebsiteCertificateAuthorityRequest };
var DescribeWebsiteCertificateAuthorityResponse = /** @class */ (function (_super) {
    __extends(DescribeWebsiteCertificateAuthorityResponse, _super);
    function DescribeWebsiteCertificateAuthorityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DescribeWebsiteCertificateAuthorityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DescribeWebsiteCertificateAuthorityResponse)
    ], DescribeWebsiteCertificateAuthorityResponse.prototype, "describeWebsiteCertificateAuthorityResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeWebsiteCertificateAuthorityResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeWebsiteCertificateAuthorityResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeWebsiteCertificateAuthorityResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DescribeWebsiteCertificateAuthorityResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeWebsiteCertificateAuthorityResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DescribeWebsiteCertificateAuthorityResponse.prototype, "unauthorizedException", void 0);
    return DescribeWebsiteCertificateAuthorityResponse;
}(SpeakeasyBase));
export { DescribeWebsiteCertificateAuthorityResponse };
