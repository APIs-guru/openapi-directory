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
var UpdateMemberSessionPathParams = /** @class */ (function (_super) {
    __extends(UpdateMemberSessionPathParams, _super);
    function UpdateMemberSessionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateMemberSessionPathParams.prototype, "id", void 0);
    return UpdateMemberSessionPathParams;
}(SpeakeasyBase));
export { UpdateMemberSessionPathParams };
var UpdateMemberSessionHeaders = /** @class */ (function (_super) {
    __extends(UpdateMemberSessionHeaders, _super);
    function UpdateMemberSessionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateMemberSessionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateMemberSessionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateMemberSessionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateMemberSessionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateMemberSessionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateMemberSessionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateMemberSessionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateMemberSessionHeaders;
}(SpeakeasyBase));
export { UpdateMemberSessionHeaders };
export var UpdateMemberSessionRequestBodyStatusEnum;
(function (UpdateMemberSessionRequestBodyStatusEnum) {
    UpdateMemberSessionRequestBodyStatusEnum["Paused"] = "PAUSED";
    UpdateMemberSessionRequestBodyStatusEnum["Enabled"] = "ENABLED";
})(UpdateMemberSessionRequestBodyStatusEnum || (UpdateMemberSessionRequestBodyStatusEnum = {}));
var UpdateMemberSessionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateMemberSessionRequestBody, _super);
    function UpdateMemberSessionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateMemberSessionRequestBody.prototype, "status", void 0);
    return UpdateMemberSessionRequestBody;
}(SpeakeasyBase));
export { UpdateMemberSessionRequestBody };
var UpdateMemberSessionRequest = /** @class */ (function (_super) {
    __extends(UpdateMemberSessionRequest, _super);
    function UpdateMemberSessionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMemberSessionPathParams)
    ], UpdateMemberSessionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateMemberSessionHeaders)
    ], UpdateMemberSessionRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateMemberSessionRequestBody)
    ], UpdateMemberSessionRequest.prototype, "request", void 0);
    return UpdateMemberSessionRequest;
}(SpeakeasyBase));
export { UpdateMemberSessionRequest };
var UpdateMemberSessionResponse = /** @class */ (function (_super) {
    __extends(UpdateMemberSessionResponse, _super);
    function UpdateMemberSessionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMemberSessionResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMemberSessionResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateMemberSessionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMemberSessionResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMemberSessionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMemberSessionResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateMemberSessionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMemberSessionResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateMemberSessionResponse.prototype, "updateMemberSessionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateMemberSessionResponse.prototype, "validationException", void 0);
    return UpdateMemberSessionResponse;
}(SpeakeasyBase));
export { UpdateMemberSessionResponse };
