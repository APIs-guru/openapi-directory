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
export var PostCreateUsageLimitActionEnum;
(function (PostCreateUsageLimitActionEnum) {
    PostCreateUsageLimitActionEnum["CreateUsageLimit"] = "CreateUsageLimit";
})(PostCreateUsageLimitActionEnum || (PostCreateUsageLimitActionEnum = {}));
export var PostCreateUsageLimitVersionEnum;
(function (PostCreateUsageLimitVersionEnum) {
    PostCreateUsageLimitVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostCreateUsageLimitVersionEnum || (PostCreateUsageLimitVersionEnum = {}));
var PostCreateUsageLimitQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateUsageLimitQueryParams, _super);
    function PostCreateUsageLimitQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateUsageLimitQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateUsageLimitQueryParams.prototype, "version", void 0);
    return PostCreateUsageLimitQueryParams;
}(SpeakeasyBase));
export { PostCreateUsageLimitQueryParams };
var PostCreateUsageLimitHeaders = /** @class */ (function (_super) {
    __extends(PostCreateUsageLimitHeaders, _super);
    function PostCreateUsageLimitHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateUsageLimitHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateUsageLimitHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateUsageLimitHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateUsageLimitHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateUsageLimitHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateUsageLimitHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateUsageLimitHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateUsageLimitHeaders;
}(SpeakeasyBase));
export { PostCreateUsageLimitHeaders };
var PostCreateUsageLimitRequest = /** @class */ (function (_super) {
    __extends(PostCreateUsageLimitRequest, _super);
    function PostCreateUsageLimitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateUsageLimitQueryParams)
    ], PostCreateUsageLimitRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCreateUsageLimitHeaders)
    ], PostCreateUsageLimitRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateUsageLimitRequest.prototype, "request", void 0);
    return PostCreateUsageLimitRequest;
}(SpeakeasyBase));
export { PostCreateUsageLimitRequest };
var PostCreateUsageLimitResponse = /** @class */ (function (_super) {
    __extends(PostCreateUsageLimitResponse, _super);
    function PostCreateUsageLimitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCreateUsageLimitResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCreateUsageLimitResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCreateUsageLimitResponse.prototype, "statusCode", void 0);
    return PostCreateUsageLimitResponse;
}(SpeakeasyBase));
export { PostCreateUsageLimitResponse };
