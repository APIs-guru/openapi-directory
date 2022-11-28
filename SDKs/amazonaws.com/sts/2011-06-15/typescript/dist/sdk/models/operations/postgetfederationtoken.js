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
export var PostGetFederationTokenActionEnum;
(function (PostGetFederationTokenActionEnum) {
    PostGetFederationTokenActionEnum["GetFederationToken"] = "GetFederationToken";
})(PostGetFederationTokenActionEnum || (PostGetFederationTokenActionEnum = {}));
export var PostGetFederationTokenVersionEnum;
(function (PostGetFederationTokenVersionEnum) {
    PostGetFederationTokenVersionEnum["TwoThousandAndEleven0615"] = "2011-06-15";
})(PostGetFederationTokenVersionEnum || (PostGetFederationTokenVersionEnum = {}));
var PostGetFederationTokenQueryParams = /** @class */ (function (_super) {
    __extends(PostGetFederationTokenQueryParams, _super);
    function PostGetFederationTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetFederationTokenQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetFederationTokenQueryParams.prototype, "version", void 0);
    return PostGetFederationTokenQueryParams;
}(SpeakeasyBase));
export { PostGetFederationTokenQueryParams };
var PostGetFederationTokenHeaders = /** @class */ (function (_super) {
    __extends(PostGetFederationTokenHeaders, _super);
    function PostGetFederationTokenHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetFederationTokenHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetFederationTokenHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetFederationTokenHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetFederationTokenHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetFederationTokenHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetFederationTokenHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetFederationTokenHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetFederationTokenHeaders;
}(SpeakeasyBase));
export { PostGetFederationTokenHeaders };
var PostGetFederationTokenRequest = /** @class */ (function (_super) {
    __extends(PostGetFederationTokenRequest, _super);
    function PostGetFederationTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetFederationTokenQueryParams)
    ], PostGetFederationTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetFederationTokenHeaders)
    ], PostGetFederationTokenRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetFederationTokenRequest.prototype, "request", void 0);
    return PostGetFederationTokenRequest;
}(SpeakeasyBase));
export { PostGetFederationTokenRequest };
var PostGetFederationTokenResponse = /** @class */ (function (_super) {
    __extends(PostGetFederationTokenResponse, _super);
    function PostGetFederationTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetFederationTokenResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGetFederationTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGetFederationTokenResponse.prototype, "statusCode", void 0);
    return PostGetFederationTokenResponse;
}(SpeakeasyBase));
export { PostGetFederationTokenResponse };
