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
var DeleteApnsVoipSandboxChannelPathParams = /** @class */ (function (_super) {
    __extends(DeleteApnsVoipSandboxChannelPathParams, _super);
    function DeleteApnsVoipSandboxChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], DeleteApnsVoipSandboxChannelPathParams.prototype, "applicationId", void 0);
    return DeleteApnsVoipSandboxChannelPathParams;
}(SpeakeasyBase));
export { DeleteApnsVoipSandboxChannelPathParams };
var DeleteApnsVoipSandboxChannelHeaders = /** @class */ (function (_super) {
    __extends(DeleteApnsVoipSandboxChannelHeaders, _super);
    function DeleteApnsVoipSandboxChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteApnsVoipSandboxChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteApnsVoipSandboxChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteApnsVoipSandboxChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteApnsVoipSandboxChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteApnsVoipSandboxChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteApnsVoipSandboxChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteApnsVoipSandboxChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteApnsVoipSandboxChannelHeaders;
}(SpeakeasyBase));
export { DeleteApnsVoipSandboxChannelHeaders };
var DeleteApnsVoipSandboxChannelRequest = /** @class */ (function (_super) {
    __extends(DeleteApnsVoipSandboxChannelRequest, _super);
    function DeleteApnsVoipSandboxChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteApnsVoipSandboxChannelPathParams)
    ], DeleteApnsVoipSandboxChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteApnsVoipSandboxChannelHeaders)
    ], DeleteApnsVoipSandboxChannelRequest.prototype, "headers", void 0);
    return DeleteApnsVoipSandboxChannelRequest;
}(SpeakeasyBase));
export { DeleteApnsVoipSandboxChannelRequest };
var DeleteApnsVoipSandboxChannelResponse = /** @class */ (function (_super) {
    __extends(DeleteApnsVoipSandboxChannelResponse, _super);
    function DeleteApnsVoipSandboxChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApnsVoipSandboxChannelResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteApnsVoipSandboxChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeleteApnsVoipSandboxChannelResponse)
    ], DeleteApnsVoipSandboxChannelResponse.prototype, "deleteApnsVoipSandboxChannelResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApnsVoipSandboxChannelResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApnsVoipSandboxChannelResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApnsVoipSandboxChannelResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApnsVoipSandboxChannelResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApnsVoipSandboxChannelResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteApnsVoipSandboxChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteApnsVoipSandboxChannelResponse.prototype, "tooManyRequestsException", void 0);
    return DeleteApnsVoipSandboxChannelResponse;
}(SpeakeasyBase));
export { DeleteApnsVoipSandboxChannelResponse };
