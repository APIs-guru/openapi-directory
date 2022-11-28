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
var AssociateWebsiteCertificateAuthorityHeaders = /** @class */ (function (_super) {
    __extends(AssociateWebsiteCertificateAuthorityHeaders, _super);
    function AssociateWebsiteCertificateAuthorityHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AssociateWebsiteCertificateAuthorityHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AssociateWebsiteCertificateAuthorityHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AssociateWebsiteCertificateAuthorityHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AssociateWebsiteCertificateAuthorityHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AssociateWebsiteCertificateAuthorityHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AssociateWebsiteCertificateAuthorityHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AssociateWebsiteCertificateAuthorityHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AssociateWebsiteCertificateAuthorityHeaders;
}(SpeakeasyBase));
export { AssociateWebsiteCertificateAuthorityHeaders };
var AssociateWebsiteCertificateAuthorityRequestBody = /** @class */ (function (_super) {
    __extends(AssociateWebsiteCertificateAuthorityRequestBody, _super);
    function AssociateWebsiteCertificateAuthorityRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Certificate" }),
        __metadata("design:type", String)
    ], AssociateWebsiteCertificateAuthorityRequestBody.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayName" }),
        __metadata("design:type", String)
    ], AssociateWebsiteCertificateAuthorityRequestBody.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetArn" }),
        __metadata("design:type", String)
    ], AssociateWebsiteCertificateAuthorityRequestBody.prototype, "fleetArn", void 0);
    return AssociateWebsiteCertificateAuthorityRequestBody;
}(SpeakeasyBase));
export { AssociateWebsiteCertificateAuthorityRequestBody };
var AssociateWebsiteCertificateAuthorityRequest = /** @class */ (function (_super) {
    __extends(AssociateWebsiteCertificateAuthorityRequest, _super);
    function AssociateWebsiteCertificateAuthorityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssociateWebsiteCertificateAuthorityHeaders)
    ], AssociateWebsiteCertificateAuthorityRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssociateWebsiteCertificateAuthorityRequestBody)
    ], AssociateWebsiteCertificateAuthorityRequest.prototype, "request", void 0);
    return AssociateWebsiteCertificateAuthorityRequest;
}(SpeakeasyBase));
export { AssociateWebsiteCertificateAuthorityRequest };
var AssociateWebsiteCertificateAuthorityResponse = /** @class */ (function (_super) {
    __extends(AssociateWebsiteCertificateAuthorityResponse, _super);
    function AssociateWebsiteCertificateAuthorityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssociateWebsiteCertificateAuthorityResponse)
    ], AssociateWebsiteCertificateAuthorityResponse.prototype, "associateWebsiteCertificateAuthorityResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AssociateWebsiteCertificateAuthorityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateWebsiteCertificateAuthorityResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateWebsiteCertificateAuthorityResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateWebsiteCertificateAuthorityResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateWebsiteCertificateAuthorityResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AssociateWebsiteCertificateAuthorityResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateWebsiteCertificateAuthorityResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateWebsiteCertificateAuthorityResponse.prototype, "unauthorizedException", void 0);
    return AssociateWebsiteCertificateAuthorityResponse;
}(SpeakeasyBase));
export { AssociateWebsiteCertificateAuthorityResponse };
