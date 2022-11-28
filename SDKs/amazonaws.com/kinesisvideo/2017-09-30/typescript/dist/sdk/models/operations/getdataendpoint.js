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
var GetDataEndpointHeaders = /** @class */ (function (_super) {
    __extends(GetDataEndpointHeaders, _super);
    function GetDataEndpointHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDataEndpointHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDataEndpointHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDataEndpointHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDataEndpointHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDataEndpointHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDataEndpointHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDataEndpointHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDataEndpointHeaders;
}(SpeakeasyBase));
export { GetDataEndpointHeaders };
export var GetDataEndpointRequestBodyApiNameEnum;
(function (GetDataEndpointRequestBodyApiNameEnum) {
    GetDataEndpointRequestBodyApiNameEnum["PutMedia"] = "PUT_MEDIA";
    GetDataEndpointRequestBodyApiNameEnum["GetMedia"] = "GET_MEDIA";
    GetDataEndpointRequestBodyApiNameEnum["ListFragments"] = "LIST_FRAGMENTS";
    GetDataEndpointRequestBodyApiNameEnum["GetMediaForFragmentList"] = "GET_MEDIA_FOR_FRAGMENT_LIST";
    GetDataEndpointRequestBodyApiNameEnum["GetHlsStreamingSessionUrl"] = "GET_HLS_STREAMING_SESSION_URL";
    GetDataEndpointRequestBodyApiNameEnum["GetDashStreamingSessionUrl"] = "GET_DASH_STREAMING_SESSION_URL";
    GetDataEndpointRequestBodyApiNameEnum["GetClip"] = "GET_CLIP";
})(GetDataEndpointRequestBodyApiNameEnum || (GetDataEndpointRequestBodyApiNameEnum = {}));
var GetDataEndpointRequestBody = /** @class */ (function (_super) {
    __extends(GetDataEndpointRequestBody, _super);
    function GetDataEndpointRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=APIName" }),
        __metadata("design:type", String)
    ], GetDataEndpointRequestBody.prototype, "apiName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamARN" }),
        __metadata("design:type", String)
    ], GetDataEndpointRequestBody.prototype, "streamArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreamName" }),
        __metadata("design:type", String)
    ], GetDataEndpointRequestBody.prototype, "streamName", void 0);
    return GetDataEndpointRequestBody;
}(SpeakeasyBase));
export { GetDataEndpointRequestBody };
var GetDataEndpointRequest = /** @class */ (function (_super) {
    __extends(GetDataEndpointRequest, _super);
    function GetDataEndpointRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDataEndpointHeaders)
    ], GetDataEndpointRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetDataEndpointRequestBody)
    ], GetDataEndpointRequest.prototype, "request", void 0);
    return GetDataEndpointRequest;
}(SpeakeasyBase));
export { GetDataEndpointRequest };
var GetDataEndpointResponse = /** @class */ (function (_super) {
    __extends(GetDataEndpointResponse, _super);
    function GetDataEndpointResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDataEndpointResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDataEndpointResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetDataEndpointOutput)
    ], GetDataEndpointResponse.prototype, "getDataEndpointOutput", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDataEndpointResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDataEndpointResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetDataEndpointResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDataEndpointResponse.prototype, "statusCode", void 0);
    return GetDataEndpointResponse;
}(SpeakeasyBase));
export { GetDataEndpointResponse };
