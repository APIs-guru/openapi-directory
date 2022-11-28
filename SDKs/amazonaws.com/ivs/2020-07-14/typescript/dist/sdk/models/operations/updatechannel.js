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
var UpdateChannelHeaders = /** @class */ (function (_super) {
    __extends(UpdateChannelHeaders, _super);
    function UpdateChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateChannelHeaders;
}(SpeakeasyBase));
export { UpdateChannelHeaders };
export var UpdateChannelRequestBodyLatencyModeEnum;
(function (UpdateChannelRequestBodyLatencyModeEnum) {
    UpdateChannelRequestBodyLatencyModeEnum["Normal"] = "NORMAL";
    UpdateChannelRequestBodyLatencyModeEnum["Low"] = "LOW";
})(UpdateChannelRequestBodyLatencyModeEnum || (UpdateChannelRequestBodyLatencyModeEnum = {}));
export var UpdateChannelRequestBodyTypeEnum;
(function (UpdateChannelRequestBodyTypeEnum) {
    UpdateChannelRequestBodyTypeEnum["Basic"] = "BASIC";
    UpdateChannelRequestBodyTypeEnum["Standard"] = "STANDARD";
})(UpdateChannelRequestBodyTypeEnum || (UpdateChannelRequestBodyTypeEnum = {}));
var UpdateChannelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateChannelRequestBody, _super);
    function UpdateChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], UpdateChannelRequestBody.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorized" }),
        __metadata("design:type", Boolean)
    ], UpdateChannelRequestBody.prototype, "authorized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latencyMode" }),
        __metadata("design:type", String)
    ], UpdateChannelRequestBody.prototype, "latencyMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateChannelRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordingConfigurationArn" }),
        __metadata("design:type", String)
    ], UpdateChannelRequestBody.prototype, "recordingConfigurationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateChannelRequestBody.prototype, "type", void 0);
    return UpdateChannelRequestBody;
}(SpeakeasyBase));
export { UpdateChannelRequestBody };
var UpdateChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateChannelRequest, _super);
    function UpdateChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateChannelHeaders)
    ], UpdateChannelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateChannelRequestBody)
    ], UpdateChannelRequest.prototype, "request", void 0);
    return UpdateChannelRequest;
}(SpeakeasyBase));
export { UpdateChannelRequest };
var UpdateChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateChannelResponse, _super);
    function UpdateChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateChannelResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateChannelResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateChannelResponse.prototype, "pendingVerification", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateChannelResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateChannelResponse)
    ], UpdateChannelResponse.prototype, "updateChannelResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateChannelResponse.prototype, "validationException", void 0);
    return UpdateChannelResponse;
}(SpeakeasyBase));
export { UpdateChannelResponse };
