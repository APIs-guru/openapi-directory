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
export var PostDescribeDbClusterEndpointsActionEnum;
(function (PostDescribeDbClusterEndpointsActionEnum) {
    PostDescribeDbClusterEndpointsActionEnum["DescribeDbClusterEndpoints"] = "DescribeDBClusterEndpoints";
})(PostDescribeDbClusterEndpointsActionEnum || (PostDescribeDbClusterEndpointsActionEnum = {}));
export var PostDescribeDbClusterEndpointsVersionEnum;
(function (PostDescribeDbClusterEndpointsVersionEnum) {
    PostDescribeDbClusterEndpointsVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDescribeDbClusterEndpointsVersionEnum || (PostDescribeDbClusterEndpointsVersionEnum = {}));
var PostDescribeDbClusterEndpointsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterEndpointsQueryParams, _super);
    function PostDescribeDbClusterEndpointsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterEndpointsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterEndpointsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterEndpointsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterEndpointsQueryParams.prototype, "version", void 0);
    return PostDescribeDbClusterEndpointsQueryParams;
}(SpeakeasyBase));
export { PostDescribeDbClusterEndpointsQueryParams };
var PostDescribeDbClusterEndpointsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterEndpointsHeaders, _super);
    function PostDescribeDbClusterEndpointsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterEndpointsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterEndpointsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterEndpointsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterEndpointsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterEndpointsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterEndpointsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterEndpointsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeDbClusterEndpointsHeaders;
}(SpeakeasyBase));
export { PostDescribeDbClusterEndpointsHeaders };
var PostDescribeDbClusterEndpointsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterEndpointsRequest, _super);
    function PostDescribeDbClusterEndpointsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeDbClusterEndpointsQueryParams)
    ], PostDescribeDbClusterEndpointsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeDbClusterEndpointsHeaders)
    ], PostDescribeDbClusterEndpointsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbClusterEndpointsRequest.prototype, "request", void 0);
    return PostDescribeDbClusterEndpointsRequest;
}(SpeakeasyBase));
export { PostDescribeDbClusterEndpointsRequest };
var PostDescribeDbClusterEndpointsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterEndpointsResponse, _super);
    function PostDescribeDbClusterEndpointsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbClusterEndpointsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeDbClusterEndpointsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeDbClusterEndpointsResponse.prototype, "statusCode", void 0);
    return PostDescribeDbClusterEndpointsResponse;
}(SpeakeasyBase));
export { PostDescribeDbClusterEndpointsResponse };
