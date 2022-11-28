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
export var PostAuthorizeEndpointAccessActionEnum;
(function (PostAuthorizeEndpointAccessActionEnum) {
    PostAuthorizeEndpointAccessActionEnum["AuthorizeEndpointAccess"] = "AuthorizeEndpointAccess";
})(PostAuthorizeEndpointAccessActionEnum || (PostAuthorizeEndpointAccessActionEnum = {}));
export var PostAuthorizeEndpointAccessVersionEnum;
(function (PostAuthorizeEndpointAccessVersionEnum) {
    PostAuthorizeEndpointAccessVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostAuthorizeEndpointAccessVersionEnum || (PostAuthorizeEndpointAccessVersionEnum = {}));
var PostAuthorizeEndpointAccessQueryParams = /** @class */ (function (_super) {
    __extends(PostAuthorizeEndpointAccessQueryParams, _super);
    function PostAuthorizeEndpointAccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAuthorizeEndpointAccessQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAuthorizeEndpointAccessQueryParams.prototype, "version", void 0);
    return PostAuthorizeEndpointAccessQueryParams;
}(SpeakeasyBase));
export { PostAuthorizeEndpointAccessQueryParams };
var PostAuthorizeEndpointAccessHeaders = /** @class */ (function (_super) {
    __extends(PostAuthorizeEndpointAccessHeaders, _super);
    function PostAuthorizeEndpointAccessHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAuthorizeEndpointAccessHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAuthorizeEndpointAccessHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAuthorizeEndpointAccessHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAuthorizeEndpointAccessHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAuthorizeEndpointAccessHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAuthorizeEndpointAccessHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAuthorizeEndpointAccessHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAuthorizeEndpointAccessHeaders;
}(SpeakeasyBase));
export { PostAuthorizeEndpointAccessHeaders };
var PostAuthorizeEndpointAccessRequest = /** @class */ (function (_super) {
    __extends(PostAuthorizeEndpointAccessRequest, _super);
    function PostAuthorizeEndpointAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAuthorizeEndpointAccessQueryParams)
    ], PostAuthorizeEndpointAccessRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAuthorizeEndpointAccessHeaders)
    ], PostAuthorizeEndpointAccessRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAuthorizeEndpointAccessRequest.prototype, "request", void 0);
    return PostAuthorizeEndpointAccessRequest;
}(SpeakeasyBase));
export { PostAuthorizeEndpointAccessRequest };
var PostAuthorizeEndpointAccessResponse = /** @class */ (function (_super) {
    __extends(PostAuthorizeEndpointAccessResponse, _super);
    function PostAuthorizeEndpointAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAuthorizeEndpointAccessResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAuthorizeEndpointAccessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAuthorizeEndpointAccessResponse.prototype, "statusCode", void 0);
    return PostAuthorizeEndpointAccessResponse;
}(SpeakeasyBase));
export { PostAuthorizeEndpointAccessResponse };
