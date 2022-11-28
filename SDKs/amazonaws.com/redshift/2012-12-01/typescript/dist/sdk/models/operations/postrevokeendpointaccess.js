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
export var PostRevokeEndpointAccessActionEnum;
(function (PostRevokeEndpointAccessActionEnum) {
    PostRevokeEndpointAccessActionEnum["RevokeEndpointAccess"] = "RevokeEndpointAccess";
})(PostRevokeEndpointAccessActionEnum || (PostRevokeEndpointAccessActionEnum = {}));
export var PostRevokeEndpointAccessVersionEnum;
(function (PostRevokeEndpointAccessVersionEnum) {
    PostRevokeEndpointAccessVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostRevokeEndpointAccessVersionEnum || (PostRevokeEndpointAccessVersionEnum = {}));
var PostRevokeEndpointAccessQueryParams = /** @class */ (function (_super) {
    __extends(PostRevokeEndpointAccessQueryParams, _super);
    function PostRevokeEndpointAccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostRevokeEndpointAccessQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostRevokeEndpointAccessQueryParams.prototype, "version", void 0);
    return PostRevokeEndpointAccessQueryParams;
}(SpeakeasyBase));
export { PostRevokeEndpointAccessQueryParams };
var PostRevokeEndpointAccessHeaders = /** @class */ (function (_super) {
    __extends(PostRevokeEndpointAccessHeaders, _super);
    function PostRevokeEndpointAccessHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostRevokeEndpointAccessHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostRevokeEndpointAccessHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostRevokeEndpointAccessHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostRevokeEndpointAccessHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostRevokeEndpointAccessHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostRevokeEndpointAccessHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostRevokeEndpointAccessHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostRevokeEndpointAccessHeaders;
}(SpeakeasyBase));
export { PostRevokeEndpointAccessHeaders };
var PostRevokeEndpointAccessRequest = /** @class */ (function (_super) {
    __extends(PostRevokeEndpointAccessRequest, _super);
    function PostRevokeEndpointAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRevokeEndpointAccessQueryParams)
    ], PostRevokeEndpointAccessRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostRevokeEndpointAccessHeaders)
    ], PostRevokeEndpointAccessRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostRevokeEndpointAccessRequest.prototype, "request", void 0);
    return PostRevokeEndpointAccessRequest;
}(SpeakeasyBase));
export { PostRevokeEndpointAccessRequest };
var PostRevokeEndpointAccessResponse = /** @class */ (function (_super) {
    __extends(PostRevokeEndpointAccessResponse, _super);
    function PostRevokeEndpointAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostRevokeEndpointAccessResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostRevokeEndpointAccessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostRevokeEndpointAccessResponse.prototype, "statusCode", void 0);
    return PostRevokeEndpointAccessResponse;
}(SpeakeasyBase));
export { PostRevokeEndpointAccessResponse };
