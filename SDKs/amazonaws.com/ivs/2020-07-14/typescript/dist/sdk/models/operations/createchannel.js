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
var CreateChannelHeaders = /** @class */ (function (_super) {
    __extends(CreateChannelHeaders, _super);
    function CreateChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateChannelHeaders;
}(SpeakeasyBase));
export { CreateChannelHeaders };
export var CreateChannelRequestBodyLatencyModeEnum;
(function (CreateChannelRequestBodyLatencyModeEnum) {
    CreateChannelRequestBodyLatencyModeEnum["Normal"] = "NORMAL";
    CreateChannelRequestBodyLatencyModeEnum["Low"] = "LOW";
})(CreateChannelRequestBodyLatencyModeEnum || (CreateChannelRequestBodyLatencyModeEnum = {}));
export var CreateChannelRequestBodyTypeEnum;
(function (CreateChannelRequestBodyTypeEnum) {
    CreateChannelRequestBodyTypeEnum["Basic"] = "BASIC";
    CreateChannelRequestBodyTypeEnum["Standard"] = "STANDARD";
})(CreateChannelRequestBodyTypeEnum || (CreateChannelRequestBodyTypeEnum = {}));
var CreateChannelRequestBody = /** @class */ (function (_super) {
    __extends(CreateChannelRequestBody, _super);
    function CreateChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorized" }),
        __metadata("design:type", Boolean)
    ], CreateChannelRequestBody.prototype, "authorized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latencyMode" }),
        __metadata("design:type", String)
    ], CreateChannelRequestBody.prototype, "latencyMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateChannelRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recordingConfigurationArn" }),
        __metadata("design:type", String)
    ], CreateChannelRequestBody.prototype, "recordingConfigurationArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CreateChannelRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateChannelRequestBody.prototype, "type", void 0);
    return CreateChannelRequestBody;
}(SpeakeasyBase));
export { CreateChannelRequestBody };
var CreateChannelRequest = /** @class */ (function (_super) {
    __extends(CreateChannelRequest, _super);
    function CreateChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateChannelHeaders)
    ], CreateChannelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateChannelRequestBody)
    ], CreateChannelRequest.prototype, "request", void 0);
    return CreateChannelRequest;
}(SpeakeasyBase));
export { CreateChannelRequest };
var CreateChannelResponse = /** @class */ (function (_super) {
    __extends(CreateChannelResponse, _super);
    function CreateChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateChannelResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateChannelResponse)
    ], CreateChannelResponse.prototype, "createChannelResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateChannelResponse.prototype, "pendingVerification", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateChannelResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateChannelResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateChannelResponse.prototype, "validationException", void 0);
    return CreateChannelResponse;
}(SpeakeasyBase));
export { CreateChannelResponse };
