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
export var PostDescribeDbClusterBacktracksActionEnum;
(function (PostDescribeDbClusterBacktracksActionEnum) {
    PostDescribeDbClusterBacktracksActionEnum["DescribeDbClusterBacktracks"] = "DescribeDBClusterBacktracks";
})(PostDescribeDbClusterBacktracksActionEnum || (PostDescribeDbClusterBacktracksActionEnum = {}));
export var PostDescribeDbClusterBacktracksVersionEnum;
(function (PostDescribeDbClusterBacktracksVersionEnum) {
    PostDescribeDbClusterBacktracksVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDescribeDbClusterBacktracksVersionEnum || (PostDescribeDbClusterBacktracksVersionEnum = {}));
var PostDescribeDbClusterBacktracksQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterBacktracksQueryParams, _super);
    function PostDescribeDbClusterBacktracksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterBacktracksQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterBacktracksQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterBacktracksQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterBacktracksQueryParams.prototype, "version", void 0);
    return PostDescribeDbClusterBacktracksQueryParams;
}(SpeakeasyBase));
export { PostDescribeDbClusterBacktracksQueryParams };
var PostDescribeDbClusterBacktracksHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterBacktracksHeaders, _super);
    function PostDescribeDbClusterBacktracksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterBacktracksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterBacktracksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterBacktracksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterBacktracksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterBacktracksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterBacktracksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterBacktracksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeDbClusterBacktracksHeaders;
}(SpeakeasyBase));
export { PostDescribeDbClusterBacktracksHeaders };
var PostDescribeDbClusterBacktracksRequest = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterBacktracksRequest, _super);
    function PostDescribeDbClusterBacktracksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeDbClusterBacktracksQueryParams)
    ], PostDescribeDbClusterBacktracksRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeDbClusterBacktracksHeaders)
    ], PostDescribeDbClusterBacktracksRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbClusterBacktracksRequest.prototype, "request", void 0);
    return PostDescribeDbClusterBacktracksRequest;
}(SpeakeasyBase));
export { PostDescribeDbClusterBacktracksRequest };
var PostDescribeDbClusterBacktracksResponse = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterBacktracksResponse, _super);
    function PostDescribeDbClusterBacktracksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbClusterBacktracksResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeDbClusterBacktracksResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeDbClusterBacktracksResponse.prototype, "statusCode", void 0);
    return PostDescribeDbClusterBacktracksResponse;
}(SpeakeasyBase));
export { PostDescribeDbClusterBacktracksResponse };
