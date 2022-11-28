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
export var PostDescribeDbSecurityGroupsActionEnum;
(function (PostDescribeDbSecurityGroupsActionEnum) {
    PostDescribeDbSecurityGroupsActionEnum["DescribeDbSecurityGroups"] = "DescribeDBSecurityGroups";
})(PostDescribeDbSecurityGroupsActionEnum || (PostDescribeDbSecurityGroupsActionEnum = {}));
export var PostDescribeDbSecurityGroupsVersionEnum;
(function (PostDescribeDbSecurityGroupsVersionEnum) {
    PostDescribeDbSecurityGroupsVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDescribeDbSecurityGroupsVersionEnum || (PostDescribeDbSecurityGroupsVersionEnum = {}));
var PostDescribeDbSecurityGroupsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeDbSecurityGroupsQueryParams, _super);
    function PostDescribeDbSecurityGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeDbSecurityGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeDbSecurityGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeDbSecurityGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeDbSecurityGroupsQueryParams.prototype, "version", void 0);
    return PostDescribeDbSecurityGroupsQueryParams;
}(SpeakeasyBase));
export { PostDescribeDbSecurityGroupsQueryParams };
var PostDescribeDbSecurityGroupsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeDbSecurityGroupsHeaders, _super);
    function PostDescribeDbSecurityGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeDbSecurityGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeDbSecurityGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeDbSecurityGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeDbSecurityGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeDbSecurityGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeDbSecurityGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeDbSecurityGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeDbSecurityGroupsHeaders;
}(SpeakeasyBase));
export { PostDescribeDbSecurityGroupsHeaders };
var PostDescribeDbSecurityGroupsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeDbSecurityGroupsRequest, _super);
    function PostDescribeDbSecurityGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeDbSecurityGroupsQueryParams)
    ], PostDescribeDbSecurityGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeDbSecurityGroupsHeaders)
    ], PostDescribeDbSecurityGroupsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbSecurityGroupsRequest.prototype, "request", void 0);
    return PostDescribeDbSecurityGroupsRequest;
}(SpeakeasyBase));
export { PostDescribeDbSecurityGroupsRequest };
var PostDescribeDbSecurityGroupsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeDbSecurityGroupsResponse, _super);
    function PostDescribeDbSecurityGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbSecurityGroupsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeDbSecurityGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeDbSecurityGroupsResponse.prototype, "statusCode", void 0);
    return PostDescribeDbSecurityGroupsResponse;
}(SpeakeasyBase));
export { PostDescribeDbSecurityGroupsResponse };
