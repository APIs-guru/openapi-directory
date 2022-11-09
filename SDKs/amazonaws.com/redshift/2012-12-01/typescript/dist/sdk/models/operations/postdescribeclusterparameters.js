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
export var PostDescribeClusterParametersActionEnum;
(function (PostDescribeClusterParametersActionEnum) {
    PostDescribeClusterParametersActionEnum["DescribeClusterParameters"] = "DescribeClusterParameters";
})(PostDescribeClusterParametersActionEnum || (PostDescribeClusterParametersActionEnum = {}));
export var PostDescribeClusterParametersVersionEnum;
(function (PostDescribeClusterParametersVersionEnum) {
    PostDescribeClusterParametersVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeClusterParametersVersionEnum || (PostDescribeClusterParametersVersionEnum = {}));
var PostDescribeClusterParametersQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeClusterParametersQueryParams, _super);
    function PostDescribeClusterParametersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParametersQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParametersQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParametersQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParametersQueryParams.prototype, "version", void 0);
    return PostDescribeClusterParametersQueryParams;
}(SpeakeasyBase));
export { PostDescribeClusterParametersQueryParams };
var PostDescribeClusterParametersHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeClusterParametersHeaders, _super);
    function PostDescribeClusterParametersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParametersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParametersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParametersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParametersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParametersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParametersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParametersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeClusterParametersHeaders;
}(SpeakeasyBase));
export { PostDescribeClusterParametersHeaders };
var PostDescribeClusterParametersRequest = /** @class */ (function (_super) {
    __extends(PostDescribeClusterParametersRequest, _super);
    function PostDescribeClusterParametersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeClusterParametersQueryParams)
    ], PostDescribeClusterParametersRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeClusterParametersHeaders)
    ], PostDescribeClusterParametersRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeClusterParametersRequest.prototype, "request", void 0);
    return PostDescribeClusterParametersRequest;
}(SpeakeasyBase));
export { PostDescribeClusterParametersRequest };
var PostDescribeClusterParametersResponse = /** @class */ (function (_super) {
    __extends(PostDescribeClusterParametersResponse, _super);
    function PostDescribeClusterParametersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeClusterParametersResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeClusterParametersResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeClusterParametersResponse.prototype, "statusCode", void 0);
    return PostDescribeClusterParametersResponse;
}(SpeakeasyBase));
export { PostDescribeClusterParametersResponse };
