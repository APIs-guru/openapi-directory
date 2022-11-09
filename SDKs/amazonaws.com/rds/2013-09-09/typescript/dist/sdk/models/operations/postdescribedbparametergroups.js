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
export var PostDescribeDbParameterGroupsActionEnum;
(function (PostDescribeDbParameterGroupsActionEnum) {
    PostDescribeDbParameterGroupsActionEnum["DescribeDbParameterGroups"] = "DescribeDBParameterGroups";
})(PostDescribeDbParameterGroupsActionEnum || (PostDescribeDbParameterGroupsActionEnum = {}));
export var PostDescribeDbParameterGroupsVersionEnum;
(function (PostDescribeDbParameterGroupsVersionEnum) {
    PostDescribeDbParameterGroupsVersionEnum["TwoThousandAndThirteen0909"] = "2013-09-09";
})(PostDescribeDbParameterGroupsVersionEnum || (PostDescribeDbParameterGroupsVersionEnum = {}));
var PostDescribeDbParameterGroupsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeDbParameterGroupsQueryParams, _super);
    function PostDescribeDbParameterGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeDbParameterGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeDbParameterGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeDbParameterGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeDbParameterGroupsQueryParams.prototype, "version", void 0);
    return PostDescribeDbParameterGroupsQueryParams;
}(SpeakeasyBase));
export { PostDescribeDbParameterGroupsQueryParams };
var PostDescribeDbParameterGroupsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeDbParameterGroupsHeaders, _super);
    function PostDescribeDbParameterGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeDbParameterGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeDbParameterGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeDbParameterGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeDbParameterGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeDbParameterGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeDbParameterGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeDbParameterGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeDbParameterGroupsHeaders;
}(SpeakeasyBase));
export { PostDescribeDbParameterGroupsHeaders };
var PostDescribeDbParameterGroupsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeDbParameterGroupsRequest, _super);
    function PostDescribeDbParameterGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeDbParameterGroupsQueryParams)
    ], PostDescribeDbParameterGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeDbParameterGroupsHeaders)
    ], PostDescribeDbParameterGroupsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbParameterGroupsRequest.prototype, "request", void 0);
    return PostDescribeDbParameterGroupsRequest;
}(SpeakeasyBase));
export { PostDescribeDbParameterGroupsRequest };
var PostDescribeDbParameterGroupsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeDbParameterGroupsResponse, _super);
    function PostDescribeDbParameterGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbParameterGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeDbParameterGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeDbParameterGroupsResponse.prototype, "statusCode", void 0);
    return PostDescribeDbParameterGroupsResponse;
}(SpeakeasyBase));
export { PostDescribeDbParameterGroupsResponse };
