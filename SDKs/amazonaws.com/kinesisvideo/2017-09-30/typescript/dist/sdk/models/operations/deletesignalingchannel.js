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
var DeleteSignalingChannelHeaders = /** @class */ (function (_super) {
    __extends(DeleteSignalingChannelHeaders, _super);
    function DeleteSignalingChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteSignalingChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteSignalingChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteSignalingChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteSignalingChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteSignalingChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteSignalingChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteSignalingChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteSignalingChannelHeaders;
}(SpeakeasyBase));
export { DeleteSignalingChannelHeaders };
var DeleteSignalingChannelRequestBody = /** @class */ (function (_super) {
    __extends(DeleteSignalingChannelRequestBody, _super);
    function DeleteSignalingChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ChannelARN" }),
        __metadata("design:type", String)
    ], DeleteSignalingChannelRequestBody.prototype, "channelArn", void 0);
    __decorate([
        Metadata({ data: "json, name=CurrentVersion" }),
        __metadata("design:type", String)
    ], DeleteSignalingChannelRequestBody.prototype, "currentVersion", void 0);
    return DeleteSignalingChannelRequestBody;
}(SpeakeasyBase));
export { DeleteSignalingChannelRequestBody };
var DeleteSignalingChannelRequest = /** @class */ (function (_super) {
    __extends(DeleteSignalingChannelRequest, _super);
    function DeleteSignalingChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSignalingChannelHeaders)
    ], DeleteSignalingChannelRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", DeleteSignalingChannelRequestBody)
    ], DeleteSignalingChannelRequest.prototype, "request", void 0);
    return DeleteSignalingChannelRequest;
}(SpeakeasyBase));
export { DeleteSignalingChannelRequest };
var DeleteSignalingChannelResponse = /** @class */ (function (_super) {
    __extends(DeleteSignalingChannelResponse, _super);
    function DeleteSignalingChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSignalingChannelResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSignalingChannelResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSignalingChannelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DeleteSignalingChannelResponse.prototype, "deleteSignalingChannelOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSignalingChannelResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSignalingChannelResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSignalingChannelResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteSignalingChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], DeleteSignalingChannelResponse.prototype, "versionMismatchException", void 0);
    return DeleteSignalingChannelResponse;
}(SpeakeasyBase));
export { DeleteSignalingChannelResponse };
