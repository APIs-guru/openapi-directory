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
export var PostDescribeClusterSubnetGroupsActionEnum;
(function (PostDescribeClusterSubnetGroupsActionEnum) {
    PostDescribeClusterSubnetGroupsActionEnum["DescribeClusterSubnetGroups"] = "DescribeClusterSubnetGroups";
})(PostDescribeClusterSubnetGroupsActionEnum || (PostDescribeClusterSubnetGroupsActionEnum = {}));
export var PostDescribeClusterSubnetGroupsVersionEnum;
(function (PostDescribeClusterSubnetGroupsVersionEnum) {
    PostDescribeClusterSubnetGroupsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeClusterSubnetGroupsVersionEnum || (PostDescribeClusterSubnetGroupsVersionEnum = {}));
var PostDescribeClusterSubnetGroupsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeClusterSubnetGroupsQueryParams, _super);
    function PostDescribeClusterSubnetGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeClusterSubnetGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeClusterSubnetGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeClusterSubnetGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeClusterSubnetGroupsQueryParams.prototype, "version", void 0);
    return PostDescribeClusterSubnetGroupsQueryParams;
}(SpeakeasyBase));
export { PostDescribeClusterSubnetGroupsQueryParams };
var PostDescribeClusterSubnetGroupsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeClusterSubnetGroupsHeaders, _super);
    function PostDescribeClusterSubnetGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeClusterSubnetGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeClusterSubnetGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeClusterSubnetGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeClusterSubnetGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeClusterSubnetGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeClusterSubnetGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeClusterSubnetGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeClusterSubnetGroupsHeaders;
}(SpeakeasyBase));
export { PostDescribeClusterSubnetGroupsHeaders };
var PostDescribeClusterSubnetGroupsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeClusterSubnetGroupsRequest, _super);
    function PostDescribeClusterSubnetGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeClusterSubnetGroupsQueryParams)
    ], PostDescribeClusterSubnetGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeClusterSubnetGroupsHeaders)
    ], PostDescribeClusterSubnetGroupsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeClusterSubnetGroupsRequest.prototype, "request", void 0);
    return PostDescribeClusterSubnetGroupsRequest;
}(SpeakeasyBase));
export { PostDescribeClusterSubnetGroupsRequest };
var PostDescribeClusterSubnetGroupsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeClusterSubnetGroupsResponse, _super);
    function PostDescribeClusterSubnetGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeClusterSubnetGroupsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeClusterSubnetGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeClusterSubnetGroupsResponse.prototype, "statusCode", void 0);
    return PostDescribeClusterSubnetGroupsResponse;
}(SpeakeasyBase));
export { PostDescribeClusterSubnetGroupsResponse };
