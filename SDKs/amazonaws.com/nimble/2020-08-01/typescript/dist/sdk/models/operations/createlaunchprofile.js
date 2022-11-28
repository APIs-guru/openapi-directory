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
var CreateLaunchProfilePathParams = /** @class */ (function (_super) {
    __extends(CreateLaunchProfilePathParams, _super);
    function CreateLaunchProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioId" }),
        __metadata("design:type", String)
    ], CreateLaunchProfilePathParams.prototype, "studioId", void 0);
    return CreateLaunchProfilePathParams;
}(SpeakeasyBase));
export { CreateLaunchProfilePathParams };
var CreateLaunchProfileHeaders = /** @class */ (function (_super) {
    __extends(CreateLaunchProfileHeaders, _super);
    function CreateLaunchProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateLaunchProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" }),
        __metadata("design:type", String)
    ], CreateLaunchProfileHeaders.prototype, "xAmzClientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateLaunchProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateLaunchProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateLaunchProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateLaunchProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateLaunchProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateLaunchProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateLaunchProfileHeaders;
}(SpeakeasyBase));
export { CreateLaunchProfileHeaders };
var CreateLaunchProfileRequestBodyStreamConfiguration = /** @class */ (function (_super) {
    __extends(CreateLaunchProfileRequestBodyStreamConfiguration, _super);
    function CreateLaunchProfileRequestBodyStreamConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clipboardMode" }),
        __metadata("design:type", String)
    ], CreateLaunchProfileRequestBodyStreamConfiguration.prototype, "clipboardMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2InstanceTypes" }),
        __metadata("design:type", Array)
    ], CreateLaunchProfileRequestBodyStreamConfiguration.prototype, "ec2InstanceTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSessionLengthInMinutes" }),
        __metadata("design:type", Number)
    ], CreateLaunchProfileRequestBodyStreamConfiguration.prototype, "maxSessionLengthInMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamingImageIds" }),
        __metadata("design:type", Array)
    ], CreateLaunchProfileRequestBodyStreamConfiguration.prototype, "streamingImageIds", void 0);
    return CreateLaunchProfileRequestBodyStreamConfiguration;
}(SpeakeasyBase));
export { CreateLaunchProfileRequestBodyStreamConfiguration };
var CreateLaunchProfileRequestBody = /** @class */ (function (_super) {
    __extends(CreateLaunchProfileRequestBody, _super);
    function CreateLaunchProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateLaunchProfileRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2SubnetIds" }),
        __metadata("design:type", Array)
    ], CreateLaunchProfileRequestBody.prototype, "ec2SubnetIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchProfileProtocolVersions" }),
        __metadata("design:type", Array)
    ], CreateLaunchProfileRequestBody.prototype, "launchProfileProtocolVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateLaunchProfileRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamConfiguration" }),
        __metadata("design:type", CreateLaunchProfileRequestBodyStreamConfiguration)
    ], CreateLaunchProfileRequestBody.prototype, "streamConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=studioComponentIds" }),
        __metadata("design:type", Array)
    ], CreateLaunchProfileRequestBody.prototype, "studioComponentIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateLaunchProfileRequestBody.prototype, "tags", void 0);
    return CreateLaunchProfileRequestBody;
}(SpeakeasyBase));
export { CreateLaunchProfileRequestBody };
var CreateLaunchProfileRequest = /** @class */ (function (_super) {
    __extends(CreateLaunchProfileRequest, _super);
    function CreateLaunchProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateLaunchProfilePathParams)
    ], CreateLaunchProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateLaunchProfileHeaders)
    ], CreateLaunchProfileRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateLaunchProfileRequestBody)
    ], CreateLaunchProfileRequest.prototype, "request", void 0);
    return CreateLaunchProfileRequest;
}(SpeakeasyBase));
export { CreateLaunchProfileRequest };
var CreateLaunchProfileResponse = /** @class */ (function (_super) {
    __extends(CreateLaunchProfileResponse, _super);
    function CreateLaunchProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLaunchProfileResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLaunchProfileResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateLaunchProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateLaunchProfileResponse)
    ], CreateLaunchProfileResponse.prototype, "createLaunchProfileResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLaunchProfileResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLaunchProfileResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLaunchProfileResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateLaunchProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLaunchProfileResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateLaunchProfileResponse.prototype, "validationException", void 0);
    return CreateLaunchProfileResponse;
}(SpeakeasyBase));
export { CreateLaunchProfileResponse };
