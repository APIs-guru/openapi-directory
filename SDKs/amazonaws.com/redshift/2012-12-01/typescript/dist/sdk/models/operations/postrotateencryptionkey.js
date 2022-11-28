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
export var PostRotateEncryptionKeyActionEnum;
(function (PostRotateEncryptionKeyActionEnum) {
    PostRotateEncryptionKeyActionEnum["RotateEncryptionKey"] = "RotateEncryptionKey";
})(PostRotateEncryptionKeyActionEnum || (PostRotateEncryptionKeyActionEnum = {}));
export var PostRotateEncryptionKeyVersionEnum;
(function (PostRotateEncryptionKeyVersionEnum) {
    PostRotateEncryptionKeyVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostRotateEncryptionKeyVersionEnum || (PostRotateEncryptionKeyVersionEnum = {}));
var PostRotateEncryptionKeyQueryParams = /** @class */ (function (_super) {
    __extends(PostRotateEncryptionKeyQueryParams, _super);
    function PostRotateEncryptionKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRotateEncryptionKeyQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRotateEncryptionKeyQueryParams.prototype, "version", void 0);
    return PostRotateEncryptionKeyQueryParams;
}(SpeakeasyBase));
export { PostRotateEncryptionKeyQueryParams };
var PostRotateEncryptionKeyHeaders = /** @class */ (function (_super) {
    __extends(PostRotateEncryptionKeyHeaders, _super);
    function PostRotateEncryptionKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRotateEncryptionKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRotateEncryptionKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRotateEncryptionKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRotateEncryptionKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRotateEncryptionKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRotateEncryptionKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRotateEncryptionKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRotateEncryptionKeyHeaders;
}(SpeakeasyBase));
export { PostRotateEncryptionKeyHeaders };
var PostRotateEncryptionKeyRequest = /** @class */ (function (_super) {
    __extends(PostRotateEncryptionKeyRequest, _super);
    function PostRotateEncryptionKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRotateEncryptionKeyQueryParams)
    ], PostRotateEncryptionKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRotateEncryptionKeyHeaders)
    ], PostRotateEncryptionKeyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRotateEncryptionKeyRequest.prototype, "request", void 0);
    return PostRotateEncryptionKeyRequest;
}(SpeakeasyBase));
export { PostRotateEncryptionKeyRequest };
var PostRotateEncryptionKeyResponse = /** @class */ (function (_super) {
    __extends(PostRotateEncryptionKeyResponse, _super);
    function PostRotateEncryptionKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostRotateEncryptionKeyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRotateEncryptionKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRotateEncryptionKeyResponse.prototype, "statusCode", void 0);
    return PostRotateEncryptionKeyResponse;
}(SpeakeasyBase));
export { PostRotateEncryptionKeyResponse };
