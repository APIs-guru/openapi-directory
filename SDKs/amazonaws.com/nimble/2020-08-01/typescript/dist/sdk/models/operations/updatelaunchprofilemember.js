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
var UpdateLaunchProfileMemberPathParams = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileMemberPathParams, _super);
    function UpdateLaunchProfileMemberPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=launchProfileId" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileMemberPathParams.prototype, "launchProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=principalId" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileMemberPathParams.prototype, "principalId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioId" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileMemberPathParams.prototype, "studioId", void 0);
    return UpdateLaunchProfileMemberPathParams;
}(SpeakeasyBase));
export { UpdateLaunchProfileMemberPathParams };
var UpdateLaunchProfileMemberHeaders = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileMemberHeaders, _super);
    function UpdateLaunchProfileMemberHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileMemberHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileMemberHeaders.prototype, "xAmzClientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileMemberHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileMemberHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileMemberHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileMemberHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileMemberHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileMemberHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateLaunchProfileMemberHeaders;
}(SpeakeasyBase));
export { UpdateLaunchProfileMemberHeaders };
export var UpdateLaunchProfileMemberRequestBodyPersonaEnum;
(function (UpdateLaunchProfileMemberRequestBodyPersonaEnum) {
    UpdateLaunchProfileMemberRequestBodyPersonaEnum["User"] = "USER";
})(UpdateLaunchProfileMemberRequestBodyPersonaEnum || (UpdateLaunchProfileMemberRequestBodyPersonaEnum = {}));
var UpdateLaunchProfileMemberRequestBody = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileMemberRequestBody, _super);
    function UpdateLaunchProfileMemberRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=persona" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileMemberRequestBody.prototype, "persona", void 0);
    return UpdateLaunchProfileMemberRequestBody;
}(SpeakeasyBase));
export { UpdateLaunchProfileMemberRequestBody };
var UpdateLaunchProfileMemberRequest = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileMemberRequest, _super);
    function UpdateLaunchProfileMemberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLaunchProfileMemberPathParams)
    ], UpdateLaunchProfileMemberRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLaunchProfileMemberHeaders)
    ], UpdateLaunchProfileMemberRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateLaunchProfileMemberRequestBody)
    ], UpdateLaunchProfileMemberRequest.prototype, "request", void 0);
    return UpdateLaunchProfileMemberRequest;
}(SpeakeasyBase));
export { UpdateLaunchProfileMemberRequest };
var UpdateLaunchProfileMemberResponse = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileMemberResponse, _super);
    function UpdateLaunchProfileMemberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileMemberResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileMemberResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateLaunchProfileMemberResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileMemberResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileMemberResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileMemberResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateLaunchProfileMemberResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileMemberResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateLaunchProfileMemberResponse)
    ], UpdateLaunchProfileMemberResponse.prototype, "updateLaunchProfileMemberResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileMemberResponse.prototype, "validationException", void 0);
    return UpdateLaunchProfileMemberResponse;
}(SpeakeasyBase));
export { UpdateLaunchProfileMemberResponse };
