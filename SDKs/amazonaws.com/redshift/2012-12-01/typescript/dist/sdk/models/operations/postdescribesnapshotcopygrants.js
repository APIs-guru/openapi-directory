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
export var PostDescribeSnapshotCopyGrantsActionEnum;
(function (PostDescribeSnapshotCopyGrantsActionEnum) {
    PostDescribeSnapshotCopyGrantsActionEnum["DescribeSnapshotCopyGrants"] = "DescribeSnapshotCopyGrants";
})(PostDescribeSnapshotCopyGrantsActionEnum || (PostDescribeSnapshotCopyGrantsActionEnum = {}));
export var PostDescribeSnapshotCopyGrantsVersionEnum;
(function (PostDescribeSnapshotCopyGrantsVersionEnum) {
    PostDescribeSnapshotCopyGrantsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeSnapshotCopyGrantsVersionEnum || (PostDescribeSnapshotCopyGrantsVersionEnum = {}));
var PostDescribeSnapshotCopyGrantsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeSnapshotCopyGrantsQueryParams, _super);
    function PostDescribeSnapshotCopyGrantsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotCopyGrantsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotCopyGrantsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotCopyGrantsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotCopyGrantsQueryParams.prototype, "version", void 0);
    return PostDescribeSnapshotCopyGrantsQueryParams;
}(SpeakeasyBase));
export { PostDescribeSnapshotCopyGrantsQueryParams };
var PostDescribeSnapshotCopyGrantsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeSnapshotCopyGrantsHeaders, _super);
    function PostDescribeSnapshotCopyGrantsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotCopyGrantsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotCopyGrantsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotCopyGrantsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotCopyGrantsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotCopyGrantsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotCopyGrantsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotCopyGrantsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeSnapshotCopyGrantsHeaders;
}(SpeakeasyBase));
export { PostDescribeSnapshotCopyGrantsHeaders };
var PostDescribeSnapshotCopyGrantsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeSnapshotCopyGrantsRequest, _super);
    function PostDescribeSnapshotCopyGrantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeSnapshotCopyGrantsQueryParams)
    ], PostDescribeSnapshotCopyGrantsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeSnapshotCopyGrantsHeaders)
    ], PostDescribeSnapshotCopyGrantsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSnapshotCopyGrantsRequest.prototype, "request", void 0);
    return PostDescribeSnapshotCopyGrantsRequest;
}(SpeakeasyBase));
export { PostDescribeSnapshotCopyGrantsRequest };
var PostDescribeSnapshotCopyGrantsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeSnapshotCopyGrantsResponse, _super);
    function PostDescribeSnapshotCopyGrantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSnapshotCopyGrantsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeSnapshotCopyGrantsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeSnapshotCopyGrantsResponse.prototype, "statusCode", void 0);
    return PostDescribeSnapshotCopyGrantsResponse;
}(SpeakeasyBase));
export { PostDescribeSnapshotCopyGrantsResponse };
