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
var GetIceServerConfigHeaders = /** @class */ (function (_super) {
    __extends(GetIceServerConfigHeaders, _super);
    function GetIceServerConfigHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetIceServerConfigHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetIceServerConfigHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetIceServerConfigHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetIceServerConfigHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetIceServerConfigHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetIceServerConfigHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetIceServerConfigHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetIceServerConfigHeaders;
}(SpeakeasyBase));
export { GetIceServerConfigHeaders };
export var GetIceServerConfigRequestBodyServiceEnum;
(function (GetIceServerConfigRequestBodyServiceEnum) {
    GetIceServerConfigRequestBodyServiceEnum["Turn"] = "TURN";
})(GetIceServerConfigRequestBodyServiceEnum || (GetIceServerConfigRequestBodyServiceEnum = {}));
var GetIceServerConfigRequestBody = /** @class */ (function (_super) {
    __extends(GetIceServerConfigRequestBody, _super);
    function GetIceServerConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChannelARN" }),
        __metadata("design:type", String)
    ], GetIceServerConfigRequestBody.prototype, "channelArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientId" }),
        __metadata("design:type", String)
    ], GetIceServerConfigRequestBody.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Service" }),
        __metadata("design:type", String)
    ], GetIceServerConfigRequestBody.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Username" }),
        __metadata("design:type", String)
    ], GetIceServerConfigRequestBody.prototype, "username", void 0);
    return GetIceServerConfigRequestBody;
}(SpeakeasyBase));
export { GetIceServerConfigRequestBody };
var GetIceServerConfigRequest = /** @class */ (function (_super) {
    __extends(GetIceServerConfigRequest, _super);
    function GetIceServerConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIceServerConfigHeaders)
    ], GetIceServerConfigRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetIceServerConfigRequestBody)
    ], GetIceServerConfigRequest.prototype, "request", void 0);
    return GetIceServerConfigRequest;
}(SpeakeasyBase));
export { GetIceServerConfigRequest };
var GetIceServerConfigResponse = /** @class */ (function (_super) {
    __extends(GetIceServerConfigResponse, _super);
    function GetIceServerConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIceServerConfigResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetIceServerConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetIceServerConfigResponse)
    ], GetIceServerConfigResponse.prototype, "getIceServerConfigResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIceServerConfigResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIceServerConfigResponse.prototype, "invalidClientException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIceServerConfigResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIceServerConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetIceServerConfigResponse.prototype, "sessionExpiredException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetIceServerConfigResponse.prototype, "statusCode", void 0);
    return GetIceServerConfigResponse;
}(SpeakeasyBase));
export { GetIceServerConfigResponse };
