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
var UpdateLaunchProfilePathParams = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfilePathParams, _super);
    function UpdateLaunchProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=launchProfileId" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfilePathParams.prototype, "launchProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioId" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfilePathParams.prototype, "studioId", void 0);
    return UpdateLaunchProfilePathParams;
}(SpeakeasyBase));
export { UpdateLaunchProfilePathParams };
var UpdateLaunchProfileHeaders = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileHeaders, _super);
    function UpdateLaunchProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzClientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateLaunchProfileHeaders;
}(SpeakeasyBase));
export { UpdateLaunchProfileHeaders };
var UpdateLaunchProfileRequestBodyStreamConfiguration = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileRequestBodyStreamConfiguration, _super);
    function UpdateLaunchProfileRequestBodyStreamConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clipboardMode" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileRequestBodyStreamConfiguration.prototype, "clipboardMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2InstanceTypes" }),
        __metadata("design:type", Array)
    ], UpdateLaunchProfileRequestBodyStreamConfiguration.prototype, "ec2InstanceTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSessionLengthInMinutes" }),
        __metadata("design:type", Number)
    ], UpdateLaunchProfileRequestBodyStreamConfiguration.prototype, "maxSessionLengthInMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamingImageIds" }),
        __metadata("design:type", Array)
    ], UpdateLaunchProfileRequestBodyStreamConfiguration.prototype, "streamingImageIds", void 0);
    return UpdateLaunchProfileRequestBodyStreamConfiguration;
}(SpeakeasyBase));
export { UpdateLaunchProfileRequestBodyStreamConfiguration };
var UpdateLaunchProfileRequestBody = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileRequestBody, _super);
    function UpdateLaunchProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=launchProfileProtocolVersions" }),
        __metadata("design:type", Array)
    ], UpdateLaunchProfileRequestBody.prototype, "launchProfileProtocolVersions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=streamConfiguration" }),
        __metadata("design:type", UpdateLaunchProfileRequestBodyStreamConfiguration)
    ], UpdateLaunchProfileRequestBody.prototype, "streamConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=studioComponentIds" }),
        __metadata("design:type", Array)
    ], UpdateLaunchProfileRequestBody.prototype, "studioComponentIds", void 0);
    return UpdateLaunchProfileRequestBody;
}(SpeakeasyBase));
export { UpdateLaunchProfileRequestBody };
var UpdateLaunchProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileRequest, _super);
    function UpdateLaunchProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLaunchProfilePathParams)
    ], UpdateLaunchProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLaunchProfileHeaders)
    ], UpdateLaunchProfileRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateLaunchProfileRequestBody)
    ], UpdateLaunchProfileRequest.prototype, "request", void 0);
    return UpdateLaunchProfileRequest;
}(SpeakeasyBase));
export { UpdateLaunchProfileRequest };
var UpdateLaunchProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileResponse, _super);
    function UpdateLaunchProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateLaunchProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateLaunchProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateLaunchProfileResponse)
    ], UpdateLaunchProfileResponse.prototype, "updateLaunchProfileResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileResponse.prototype, "validationException", void 0);
    return UpdateLaunchProfileResponse;
}(SpeakeasyBase));
export { UpdateLaunchProfileResponse };
