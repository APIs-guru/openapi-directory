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
export var PostDescribeDataSharesForProducerActionEnum;
(function (PostDescribeDataSharesForProducerActionEnum) {
    PostDescribeDataSharesForProducerActionEnum["DescribeDataSharesForProducer"] = "DescribeDataSharesForProducer";
})(PostDescribeDataSharesForProducerActionEnum || (PostDescribeDataSharesForProducerActionEnum = {}));
export var PostDescribeDataSharesForProducerVersionEnum;
(function (PostDescribeDataSharesForProducerVersionEnum) {
    PostDescribeDataSharesForProducerVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeDataSharesForProducerVersionEnum || (PostDescribeDataSharesForProducerVersionEnum = {}));
var PostDescribeDataSharesForProducerQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeDataSharesForProducerQueryParams, _super);
    function PostDescribeDataSharesForProducerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeDataSharesForProducerQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeDataSharesForProducerQueryParams.prototype, "version", void 0);
    return PostDescribeDataSharesForProducerQueryParams;
}(SpeakeasyBase));
export { PostDescribeDataSharesForProducerQueryParams };
var PostDescribeDataSharesForProducerHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeDataSharesForProducerHeaders, _super);
    function PostDescribeDataSharesForProducerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeDataSharesForProducerHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeDataSharesForProducerHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeDataSharesForProducerHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeDataSharesForProducerHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeDataSharesForProducerHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeDataSharesForProducerHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeDataSharesForProducerHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeDataSharesForProducerHeaders;
}(SpeakeasyBase));
export { PostDescribeDataSharesForProducerHeaders };
var PostDescribeDataSharesForProducerRequest = /** @class */ (function (_super) {
    __extends(PostDescribeDataSharesForProducerRequest, _super);
    function PostDescribeDataSharesForProducerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeDataSharesForProducerQueryParams)
    ], PostDescribeDataSharesForProducerRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeDataSharesForProducerHeaders)
    ], PostDescribeDataSharesForProducerRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDataSharesForProducerRequest.prototype, "request", void 0);
    return PostDescribeDataSharesForProducerRequest;
}(SpeakeasyBase));
export { PostDescribeDataSharesForProducerRequest };
var PostDescribeDataSharesForProducerResponse = /** @class */ (function (_super) {
    __extends(PostDescribeDataSharesForProducerResponse, _super);
    function PostDescribeDataSharesForProducerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDataSharesForProducerResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeDataSharesForProducerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeDataSharesForProducerResponse.prototype, "statusCode", void 0);
    return PostDescribeDataSharesForProducerResponse;
}(SpeakeasyBase));
export { PostDescribeDataSharesForProducerResponse };
