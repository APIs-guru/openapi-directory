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
export var PostUntagQueueActionEnum;
(function (PostUntagQueueActionEnum) {
    PostUntagQueueActionEnum["UntagQueue"] = "UntagQueue";
})(PostUntagQueueActionEnum || (PostUntagQueueActionEnum = {}));
export var PostUntagQueueVersionEnum;
(function (PostUntagQueueVersionEnum) {
    PostUntagQueueVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(PostUntagQueueVersionEnum || (PostUntagQueueVersionEnum = {}));
var PostUntagQueueQueryParams = /** @class */ (function (_super) {
    __extends(PostUntagQueueQueryParams, _super);
    function PostUntagQueueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUntagQueueQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUntagQueueQueryParams.prototype, "version", void 0);
    return PostUntagQueueQueryParams;
}(SpeakeasyBase));
export { PostUntagQueueQueryParams };
var PostUntagQueueHeaders = /** @class */ (function (_super) {
    __extends(PostUntagQueueHeaders, _super);
    function PostUntagQueueHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUntagQueueHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUntagQueueHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUntagQueueHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUntagQueueHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUntagQueueHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUntagQueueHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUntagQueueHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUntagQueueHeaders;
}(SpeakeasyBase));
export { PostUntagQueueHeaders };
var PostUntagQueueRequest = /** @class */ (function (_super) {
    __extends(PostUntagQueueRequest, _super);
    function PostUntagQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostUntagQueueQueryParams)
    ], PostUntagQueueRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostUntagQueueHeaders)
    ], PostUntagQueueRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUntagQueueRequest.prototype, "request", void 0);
    return PostUntagQueueRequest;
}(SpeakeasyBase));
export { PostUntagQueueRequest };
var PostUntagQueueResponse = /** @class */ (function (_super) {
    __extends(PostUntagQueueResponse, _super);
    function PostUntagQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostUntagQueueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostUntagQueueResponse.prototype, "statusCode", void 0);
    return PostUntagQueueResponse;
}(SpeakeasyBase));
export { PostUntagQueueResponse };
