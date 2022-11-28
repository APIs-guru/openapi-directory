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
var CreateStudioHeaders = /** @class */ (function (_super) {
    __extends(CreateStudioHeaders, _super);
    function CreateStudioHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateStudioHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" }),
        __metadata("design:type", String)
    ], CreateStudioHeaders.prototype, "xAmzClientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateStudioHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateStudioHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateStudioHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateStudioHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateStudioHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateStudioHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateStudioHeaders;
}(SpeakeasyBase));
export { CreateStudioHeaders };
// CreateStudioRequestBodyStudioEncryptionConfiguration
/**
 * Configuration of the encryption method that is used for the studio.
**/
var CreateStudioRequestBodyStudioEncryptionConfiguration = /** @class */ (function (_super) {
    __extends(CreateStudioRequestBodyStudioEncryptionConfiguration, _super);
    function CreateStudioRequestBodyStudioEncryptionConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyArn" }),
        __metadata("design:type", String)
    ], CreateStudioRequestBodyStudioEncryptionConfiguration.prototype, "keyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyType" }),
        __metadata("design:type", String)
    ], CreateStudioRequestBodyStudioEncryptionConfiguration.prototype, "keyType", void 0);
    return CreateStudioRequestBodyStudioEncryptionConfiguration;
}(SpeakeasyBase));
export { CreateStudioRequestBodyStudioEncryptionConfiguration };
var CreateStudioRequestBody = /** @class */ (function (_super) {
    __extends(CreateStudioRequestBody, _super);
    function CreateStudioRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminRoleArn" }),
        __metadata("design:type", String)
    ], CreateStudioRequestBody.prototype, "adminRoleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], CreateStudioRequestBody.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=studioEncryptionConfiguration" }),
        __metadata("design:type", CreateStudioRequestBodyStudioEncryptionConfiguration)
    ], CreateStudioRequestBody.prototype, "studioEncryptionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=studioName" }),
        __metadata("design:type", String)
    ], CreateStudioRequestBody.prototype, "studioName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateStudioRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userRoleArn" }),
        __metadata("design:type", String)
    ], CreateStudioRequestBody.prototype, "userRoleArn", void 0);
    return CreateStudioRequestBody;
}(SpeakeasyBase));
export { CreateStudioRequestBody };
var CreateStudioRequest = /** @class */ (function (_super) {
    __extends(CreateStudioRequest, _super);
    function CreateStudioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateStudioHeaders)
    ], CreateStudioRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateStudioRequestBody)
    ], CreateStudioRequest.prototype, "request", void 0);
    return CreateStudioRequest;
}(SpeakeasyBase));
export { CreateStudioRequest };
var CreateStudioResponse = /** @class */ (function (_super) {
    __extends(CreateStudioResponse, _super);
    function CreateStudioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStudioResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStudioResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateStudioResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateStudioResponse)
    ], CreateStudioResponse.prototype, "createStudioResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStudioResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStudioResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStudioResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateStudioResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStudioResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateStudioResponse.prototype, "validationException", void 0);
    return CreateStudioResponse;
}(SpeakeasyBase));
export { CreateStudioResponse };
