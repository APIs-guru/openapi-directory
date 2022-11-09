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
var DisassociateWebsiteAuthorizationProviderHeaders = /** @class */ (function (_super) {
    __extends(DisassociateWebsiteAuthorizationProviderHeaders, _super);
    function DisassociateWebsiteAuthorizationProviderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DisassociateWebsiteAuthorizationProviderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DisassociateWebsiteAuthorizationProviderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DisassociateWebsiteAuthorizationProviderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DisassociateWebsiteAuthorizationProviderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DisassociateWebsiteAuthorizationProviderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DisassociateWebsiteAuthorizationProviderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DisassociateWebsiteAuthorizationProviderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DisassociateWebsiteAuthorizationProviderHeaders;
}(SpeakeasyBase));
export { DisassociateWebsiteAuthorizationProviderHeaders };
var DisassociateWebsiteAuthorizationProviderRequestBody = /** @class */ (function (_super) {
    __extends(DisassociateWebsiteAuthorizationProviderRequestBody, _super);
    function DisassociateWebsiteAuthorizationProviderRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AuthorizationProviderId" }),
        __metadata("design:type", String)
    ], DisassociateWebsiteAuthorizationProviderRequestBody.prototype, "authorizationProviderId", void 0);
    __decorate([
        Metadata({ data: "json, name=FleetArn" }),
        __metadata("design:type", String)
    ], DisassociateWebsiteAuthorizationProviderRequestBody.prototype, "fleetArn", void 0);
    return DisassociateWebsiteAuthorizationProviderRequestBody;
}(SpeakeasyBase));
export { DisassociateWebsiteAuthorizationProviderRequestBody };
var DisassociateWebsiteAuthorizationProviderRequest = /** @class */ (function (_super) {
    __extends(DisassociateWebsiteAuthorizationProviderRequest, _super);
    function DisassociateWebsiteAuthorizationProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DisassociateWebsiteAuthorizationProviderHeaders)
    ], DisassociateWebsiteAuthorizationProviderRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DisassociateWebsiteAuthorizationProviderRequestBody)
    ], DisassociateWebsiteAuthorizationProviderRequest.prototype, "request", void 0);
    return DisassociateWebsiteAuthorizationProviderRequest;
}(SpeakeasyBase));
export { DisassociateWebsiteAuthorizationProviderRequest };
var DisassociateWebsiteAuthorizationProviderResponse = /** @class */ (function (_super) {
    __extends(DisassociateWebsiteAuthorizationProviderResponse, _super);
    function DisassociateWebsiteAuthorizationProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DisassociateWebsiteAuthorizationProviderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DisassociateWebsiteAuthorizationProviderResponse.prototype, "disassociateWebsiteAuthorizationProviderResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateWebsiteAuthorizationProviderResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateWebsiteAuthorizationProviderResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateWebsiteAuthorizationProviderResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateWebsiteAuthorizationProviderResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DisassociateWebsiteAuthorizationProviderResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateWebsiteAuthorizationProviderResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DisassociateWebsiteAuthorizationProviderResponse.prototype, "unauthorizedException", void 0);
    return DisassociateWebsiteAuthorizationProviderResponse;
}(SpeakeasyBase));
export { DisassociateWebsiteAuthorizationProviderResponse };
