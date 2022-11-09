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
export var PostDescribeGlobalClustersActionEnum;
(function (PostDescribeGlobalClustersActionEnum) {
    PostDescribeGlobalClustersActionEnum["DescribeGlobalClusters"] = "DescribeGlobalClusters";
})(PostDescribeGlobalClustersActionEnum || (PostDescribeGlobalClustersActionEnum = {}));
export var PostDescribeGlobalClustersVersionEnum;
(function (PostDescribeGlobalClustersVersionEnum) {
    PostDescribeGlobalClustersVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDescribeGlobalClustersVersionEnum || (PostDescribeGlobalClustersVersionEnum = {}));
var PostDescribeGlobalClustersQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeGlobalClustersQueryParams, _super);
    function PostDescribeGlobalClustersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalClustersQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalClustersQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalClustersQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalClustersQueryParams.prototype, "version", void 0);
    return PostDescribeGlobalClustersQueryParams;
}(SpeakeasyBase));
export { PostDescribeGlobalClustersQueryParams };
var PostDescribeGlobalClustersHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeGlobalClustersHeaders, _super);
    function PostDescribeGlobalClustersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalClustersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalClustersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalClustersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalClustersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalClustersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalClustersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalClustersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeGlobalClustersHeaders;
}(SpeakeasyBase));
export { PostDescribeGlobalClustersHeaders };
var PostDescribeGlobalClustersRequest = /** @class */ (function (_super) {
    __extends(PostDescribeGlobalClustersRequest, _super);
    function PostDescribeGlobalClustersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeGlobalClustersQueryParams)
    ], PostDescribeGlobalClustersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeGlobalClustersHeaders)
    ], PostDescribeGlobalClustersRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeGlobalClustersRequest.prototype, "request", void 0);
    return PostDescribeGlobalClustersRequest;
}(SpeakeasyBase));
export { PostDescribeGlobalClustersRequest };
var PostDescribeGlobalClustersResponse = /** @class */ (function (_super) {
    __extends(PostDescribeGlobalClustersResponse, _super);
    function PostDescribeGlobalClustersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeGlobalClustersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeGlobalClustersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeGlobalClustersResponse.prototype, "statusCode", void 0);
    return PostDescribeGlobalClustersResponse;
}(SpeakeasyBase));
export { PostDescribeGlobalClustersResponse };
