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
var CreateCodeSigningConfigHeaders = /** @class */ (function (_super) {
    __extends(CreateCodeSigningConfigHeaders, _super);
    function CreateCodeSigningConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateCodeSigningConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateCodeSigningConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateCodeSigningConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateCodeSigningConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateCodeSigningConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateCodeSigningConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateCodeSigningConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateCodeSigningConfigHeaders;
}(SpeakeasyBase));
export { CreateCodeSigningConfigHeaders };
// CreateCodeSigningConfigRequestBodyAllowedPublishers
/**
 * List of signing profiles that can sign a code package.
**/
var CreateCodeSigningConfigRequestBodyAllowedPublishers = /** @class */ (function (_super) {
    __extends(CreateCodeSigningConfigRequestBodyAllowedPublishers, _super);
    function CreateCodeSigningConfigRequestBodyAllowedPublishers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SigningProfileVersionArns" }),
        __metadata("design:type", Array)
    ], CreateCodeSigningConfigRequestBodyAllowedPublishers.prototype, "signingProfileVersionArns", void 0);
    return CreateCodeSigningConfigRequestBodyAllowedPublishers;
}(SpeakeasyBase));
export { CreateCodeSigningConfigRequestBodyAllowedPublishers };
// CreateCodeSigningConfigRequestBodyCodeSigningPolicies
/**
 * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
**/
var CreateCodeSigningConfigRequestBodyCodeSigningPolicies = /** @class */ (function (_super) {
    __extends(CreateCodeSigningConfigRequestBodyCodeSigningPolicies, _super);
    function CreateCodeSigningConfigRequestBodyCodeSigningPolicies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UntrustedArtifactOnDeployment" }),
        __metadata("design:type", String)
    ], CreateCodeSigningConfigRequestBodyCodeSigningPolicies.prototype, "untrustedArtifactOnDeployment", void 0);
    return CreateCodeSigningConfigRequestBodyCodeSigningPolicies;
}(SpeakeasyBase));
export { CreateCodeSigningConfigRequestBodyCodeSigningPolicies };
var CreateCodeSigningConfigRequestBody = /** @class */ (function (_super) {
    __extends(CreateCodeSigningConfigRequestBody, _super);
    function CreateCodeSigningConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllowedPublishers" }),
        __metadata("design:type", CreateCodeSigningConfigRequestBodyAllowedPublishers)
    ], CreateCodeSigningConfigRequestBody.prototype, "allowedPublishers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CodeSigningPolicies" }),
        __metadata("design:type", CreateCodeSigningConfigRequestBodyCodeSigningPolicies)
    ], CreateCodeSigningConfigRequestBody.prototype, "codeSigningPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CreateCodeSigningConfigRequestBody.prototype, "description", void 0);
    return CreateCodeSigningConfigRequestBody;
}(SpeakeasyBase));
export { CreateCodeSigningConfigRequestBody };
var CreateCodeSigningConfigRequest = /** @class */ (function (_super) {
    __extends(CreateCodeSigningConfigRequest, _super);
    function CreateCodeSigningConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCodeSigningConfigHeaders)
    ], CreateCodeSigningConfigRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCodeSigningConfigRequestBody)
    ], CreateCodeSigningConfigRequest.prototype, "request", void 0);
    return CreateCodeSigningConfigRequest;
}(SpeakeasyBase));
export { CreateCodeSigningConfigRequest };
var CreateCodeSigningConfigResponse = /** @class */ (function (_super) {
    __extends(CreateCodeSigningConfigResponse, _super);
    function CreateCodeSigningConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCodeSigningConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateCodeSigningConfigResponse)
    ], CreateCodeSigningConfigResponse.prototype, "createCodeSigningConfigResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCodeSigningConfigResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateCodeSigningConfigResponse.prototype, "serviceException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCodeSigningConfigResponse.prototype, "statusCode", void 0);
    return CreateCodeSigningConfigResponse;
}(SpeakeasyBase));
export { CreateCodeSigningConfigResponse };
