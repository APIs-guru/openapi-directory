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
var UpdateAdmChannelPathParams = /** @class */ (function (_super) {
    __extends(UpdateAdmChannelPathParams, _super);
    function UpdateAdmChannelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=application-id" }),
        __metadata("design:type", String)
    ], UpdateAdmChannelPathParams.prototype, "applicationId", void 0);
    return UpdateAdmChannelPathParams;
}(SpeakeasyBase));
export { UpdateAdmChannelPathParams };
var UpdateAdmChannelHeaders = /** @class */ (function (_super) {
    __extends(UpdateAdmChannelHeaders, _super);
    function UpdateAdmChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAdmChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAdmChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAdmChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAdmChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAdmChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAdmChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAdmChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAdmChannelHeaders;
}(SpeakeasyBase));
export { UpdateAdmChannelHeaders };
// UpdateAdmChannelRequestBodyAdmChannelRequest
/**
 * Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
**/
var UpdateAdmChannelRequestBodyAdmChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateAdmChannelRequestBodyAdmChannelRequest, _super);
    function UpdateAdmChannelRequestBodyAdmChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientId" }),
        __metadata("design:type", String)
    ], UpdateAdmChannelRequestBodyAdmChannelRequest.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientSecret" }),
        __metadata("design:type", String)
    ], UpdateAdmChannelRequestBodyAdmChannelRequest.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateAdmChannelRequestBodyAdmChannelRequest.prototype, "enabled", void 0);
    return UpdateAdmChannelRequestBodyAdmChannelRequest;
}(SpeakeasyBase));
export { UpdateAdmChannelRequestBodyAdmChannelRequest };
var UpdateAdmChannelRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAdmChannelRequestBody, _super);
    function UpdateAdmChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ADMChannelRequest" }),
        __metadata("design:type", UpdateAdmChannelRequestBodyAdmChannelRequest)
    ], UpdateAdmChannelRequestBody.prototype, "admChannelRequest", void 0);
    return UpdateAdmChannelRequestBody;
}(SpeakeasyBase));
export { UpdateAdmChannelRequestBody };
var UpdateAdmChannelRequest = /** @class */ (function (_super) {
    __extends(UpdateAdmChannelRequest, _super);
    function UpdateAdmChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAdmChannelPathParams)
    ], UpdateAdmChannelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAdmChannelHeaders)
    ], UpdateAdmChannelRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAdmChannelRequestBody)
    ], UpdateAdmChannelRequest.prototype, "request", void 0);
    return UpdateAdmChannelRequest;
}(SpeakeasyBase));
export { UpdateAdmChannelRequest };
var UpdateAdmChannelResponse = /** @class */ (function (_super) {
    __extends(UpdateAdmChannelResponse, _super);
    function UpdateAdmChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAdmChannelResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAdmChannelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAdmChannelResponse.prototype, "forbiddenException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAdmChannelResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAdmChannelResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAdmChannelResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAdmChannelResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAdmChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAdmChannelResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UpdateAdmChannelResponse)
    ], UpdateAdmChannelResponse.prototype, "updateAdmChannelResponse", void 0);
    return UpdateAdmChannelResponse;
}(SpeakeasyBase));
export { UpdateAdmChannelResponse };
