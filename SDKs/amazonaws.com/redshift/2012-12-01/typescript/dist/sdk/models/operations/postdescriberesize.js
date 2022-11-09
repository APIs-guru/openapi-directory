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
export var PostDescribeResizeActionEnum;
(function (PostDescribeResizeActionEnum) {
    PostDescribeResizeActionEnum["DescribeResize"] = "DescribeResize";
})(PostDescribeResizeActionEnum || (PostDescribeResizeActionEnum = {}));
export var PostDescribeResizeVersionEnum;
(function (PostDescribeResizeVersionEnum) {
    PostDescribeResizeVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeResizeVersionEnum || (PostDescribeResizeVersionEnum = {}));
var PostDescribeResizeQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeResizeQueryParams, _super);
    function PostDescribeResizeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeResizeQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeResizeQueryParams.prototype, "version", void 0);
    return PostDescribeResizeQueryParams;
}(SpeakeasyBase));
export { PostDescribeResizeQueryParams };
var PostDescribeResizeHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeResizeHeaders, _super);
    function PostDescribeResizeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeResizeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeResizeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeResizeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeResizeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeResizeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeResizeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeResizeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeResizeHeaders;
}(SpeakeasyBase));
export { PostDescribeResizeHeaders };
var PostDescribeResizeRequest = /** @class */ (function (_super) {
    __extends(PostDescribeResizeRequest, _super);
    function PostDescribeResizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeResizeQueryParams)
    ], PostDescribeResizeRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeResizeHeaders)
    ], PostDescribeResizeRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeResizeRequest.prototype, "request", void 0);
    return PostDescribeResizeRequest;
}(SpeakeasyBase));
export { PostDescribeResizeRequest };
var PostDescribeResizeResponse = /** @class */ (function (_super) {
    __extends(PostDescribeResizeResponse, _super);
    function PostDescribeResizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeResizeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeResizeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeResizeResponse.prototype, "statusCode", void 0);
    return PostDescribeResizeResponse;
}(SpeakeasyBase));
export { PostDescribeResizeResponse };
