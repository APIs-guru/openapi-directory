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
var UpdateCodeSigningConfigPathParams = /** @class */ (function (_super) {
    __extends(UpdateCodeSigningConfigPathParams, _super);
    function UpdateCodeSigningConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CodeSigningConfigArn" }),
        __metadata("design:type", String)
    ], UpdateCodeSigningConfigPathParams.prototype, "codeSigningConfigArn", void 0);
    return UpdateCodeSigningConfigPathParams;
}(SpeakeasyBase));
export { UpdateCodeSigningConfigPathParams };
var UpdateCodeSigningConfigHeaders = /** @class */ (function (_super) {
    __extends(UpdateCodeSigningConfigHeaders, _super);
    function UpdateCodeSigningConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateCodeSigningConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateCodeSigningConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateCodeSigningConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateCodeSigningConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateCodeSigningConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateCodeSigningConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateCodeSigningConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateCodeSigningConfigHeaders;
}(SpeakeasyBase));
export { UpdateCodeSigningConfigHeaders };
// UpdateCodeSigningConfigRequestBodyAllowedPublishers
/**
 * List of signing profiles that can sign a code package.
**/
var UpdateCodeSigningConfigRequestBodyAllowedPublishers = /** @class */ (function (_super) {
    __extends(UpdateCodeSigningConfigRequestBodyAllowedPublishers, _super);
    function UpdateCodeSigningConfigRequestBodyAllowedPublishers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=SigningProfileVersionArns" }),
        __metadata("design:type", Array)
    ], UpdateCodeSigningConfigRequestBodyAllowedPublishers.prototype, "signingProfileVersionArns", void 0);
    return UpdateCodeSigningConfigRequestBodyAllowedPublishers;
}(SpeakeasyBase));
export { UpdateCodeSigningConfigRequestBodyAllowedPublishers };
// UpdateCodeSigningConfigRequestBodyCodeSigningPolicies
/**
 * Code signing configuration <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html#config-codesigning-policies">policies</a> specify the validation failure action for signature mismatch or expiry.
**/
var UpdateCodeSigningConfigRequestBodyCodeSigningPolicies = /** @class */ (function (_super) {
    __extends(UpdateCodeSigningConfigRequestBodyCodeSigningPolicies, _super);
    function UpdateCodeSigningConfigRequestBodyCodeSigningPolicies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=UntrustedArtifactOnDeployment" }),
        __metadata("design:type", String)
    ], UpdateCodeSigningConfigRequestBodyCodeSigningPolicies.prototype, "untrustedArtifactOnDeployment", void 0);
    return UpdateCodeSigningConfigRequestBodyCodeSigningPolicies;
}(SpeakeasyBase));
export { UpdateCodeSigningConfigRequestBodyCodeSigningPolicies };
var UpdateCodeSigningConfigRequestBody = /** @class */ (function (_super) {
    __extends(UpdateCodeSigningConfigRequestBody, _super);
    function UpdateCodeSigningConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=AllowedPublishers" }),
        __metadata("design:type", UpdateCodeSigningConfigRequestBodyAllowedPublishers)
    ], UpdateCodeSigningConfigRequestBody.prototype, "allowedPublishers", void 0);
    __decorate([
        Metadata({ data: "json, name=CodeSigningPolicies" }),
        __metadata("design:type", UpdateCodeSigningConfigRequestBodyCodeSigningPolicies)
    ], UpdateCodeSigningConfigRequestBody.prototype, "codeSigningPolicies", void 0);
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], UpdateCodeSigningConfigRequestBody.prototype, "description", void 0);
    return UpdateCodeSigningConfigRequestBody;
}(SpeakeasyBase));
export { UpdateCodeSigningConfigRequestBody };
var UpdateCodeSigningConfigRequest = /** @class */ (function (_super) {
    __extends(UpdateCodeSigningConfigRequest, _super);
    function UpdateCodeSigningConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateCodeSigningConfigPathParams)
    ], UpdateCodeSigningConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateCodeSigningConfigHeaders)
    ], UpdateCodeSigningConfigRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateCodeSigningConfigRequestBody)
    ], UpdateCodeSigningConfigRequest.prototype, "request", void 0);
    return UpdateCodeSigningConfigRequest;
}(SpeakeasyBase));
export { UpdateCodeSigningConfigRequest };
var UpdateCodeSigningConfigResponse = /** @class */ (function (_super) {
    __extends(UpdateCodeSigningConfigResponse, _super);
    function UpdateCodeSigningConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateCodeSigningConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateCodeSigningConfigResponse.prototype, "invalidParameterValueException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateCodeSigningConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateCodeSigningConfigResponse.prototype, "serviceException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateCodeSigningConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UpdateCodeSigningConfigResponse)
    ], UpdateCodeSigningConfigResponse.prototype, "updateCodeSigningConfigResponse", void 0);
    return UpdateCodeSigningConfigResponse;
}(SpeakeasyBase));
export { UpdateCodeSigningConfigResponse };
