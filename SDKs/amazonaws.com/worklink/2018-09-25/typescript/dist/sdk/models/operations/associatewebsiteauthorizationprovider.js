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
var AssociateWebsiteAuthorizationProviderHeaders = /** @class */ (function (_super) {
    __extends(AssociateWebsiteAuthorizationProviderHeaders, _super);
    function AssociateWebsiteAuthorizationProviderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], AssociateWebsiteAuthorizationProviderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], AssociateWebsiteAuthorizationProviderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], AssociateWebsiteAuthorizationProviderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], AssociateWebsiteAuthorizationProviderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], AssociateWebsiteAuthorizationProviderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], AssociateWebsiteAuthorizationProviderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], AssociateWebsiteAuthorizationProviderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return AssociateWebsiteAuthorizationProviderHeaders;
}(SpeakeasyBase));
export { AssociateWebsiteAuthorizationProviderHeaders };
export var AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum;
(function (AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum) {
    AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum["Saml"] = "SAML";
})(AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum || (AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum = {}));
var AssociateWebsiteAuthorizationProviderRequestBody = /** @class */ (function (_super) {
    __extends(AssociateWebsiteAuthorizationProviderRequestBody, _super);
    function AssociateWebsiteAuthorizationProviderRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorizationProviderType" }),
        __metadata("design:type", String)
    ], AssociateWebsiteAuthorizationProviderRequestBody.prototype, "authorizationProviderType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainName" }),
        __metadata("design:type", String)
    ], AssociateWebsiteAuthorizationProviderRequestBody.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FleetArn" }),
        __metadata("design:type", String)
    ], AssociateWebsiteAuthorizationProviderRequestBody.prototype, "fleetArn", void 0);
    return AssociateWebsiteAuthorizationProviderRequestBody;
}(SpeakeasyBase));
export { AssociateWebsiteAuthorizationProviderRequestBody };
var AssociateWebsiteAuthorizationProviderRequest = /** @class */ (function (_super) {
    __extends(AssociateWebsiteAuthorizationProviderRequest, _super);
    function AssociateWebsiteAuthorizationProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AssociateWebsiteAuthorizationProviderHeaders)
    ], AssociateWebsiteAuthorizationProviderRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssociateWebsiteAuthorizationProviderRequestBody)
    ], AssociateWebsiteAuthorizationProviderRequest.prototype, "request", void 0);
    return AssociateWebsiteAuthorizationProviderRequest;
}(SpeakeasyBase));
export { AssociateWebsiteAuthorizationProviderRequest };
var AssociateWebsiteAuthorizationProviderResponse = /** @class */ (function (_super) {
    __extends(AssociateWebsiteAuthorizationProviderResponse, _super);
    function AssociateWebsiteAuthorizationProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AssociateWebsiteAuthorizationProviderResponse)
    ], AssociateWebsiteAuthorizationProviderResponse.prototype, "associateWebsiteAuthorizationProviderResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AssociateWebsiteAuthorizationProviderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateWebsiteAuthorizationProviderResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateWebsiteAuthorizationProviderResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateWebsiteAuthorizationProviderResponse.prototype, "resourceAlreadyExistsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateWebsiteAuthorizationProviderResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AssociateWebsiteAuthorizationProviderResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateWebsiteAuthorizationProviderResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], AssociateWebsiteAuthorizationProviderResponse.prototype, "unauthorizedException", void 0);
    return AssociateWebsiteAuthorizationProviderResponse;
}(SpeakeasyBase));
export { AssociateWebsiteAuthorizationProviderResponse };
