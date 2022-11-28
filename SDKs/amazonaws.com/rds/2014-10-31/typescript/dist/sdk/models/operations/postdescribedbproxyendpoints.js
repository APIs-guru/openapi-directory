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
export var PostDescribeDbProxyEndpointsActionEnum;
(function (PostDescribeDbProxyEndpointsActionEnum) {
    PostDescribeDbProxyEndpointsActionEnum["DescribeDbProxyEndpoints"] = "DescribeDBProxyEndpoints";
})(PostDescribeDbProxyEndpointsActionEnum || (PostDescribeDbProxyEndpointsActionEnum = {}));
export var PostDescribeDbProxyEndpointsVersionEnum;
(function (PostDescribeDbProxyEndpointsVersionEnum) {
    PostDescribeDbProxyEndpointsVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDescribeDbProxyEndpointsVersionEnum || (PostDescribeDbProxyEndpointsVersionEnum = {}));
var PostDescribeDbProxyEndpointsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeDbProxyEndpointsQueryParams, _super);
    function PostDescribeDbProxyEndpointsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeDbProxyEndpointsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeDbProxyEndpointsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeDbProxyEndpointsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeDbProxyEndpointsQueryParams.prototype, "version", void 0);
    return PostDescribeDbProxyEndpointsQueryParams;
}(SpeakeasyBase));
export { PostDescribeDbProxyEndpointsQueryParams };
var PostDescribeDbProxyEndpointsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeDbProxyEndpointsHeaders, _super);
    function PostDescribeDbProxyEndpointsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeDbProxyEndpointsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeDbProxyEndpointsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeDbProxyEndpointsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeDbProxyEndpointsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeDbProxyEndpointsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeDbProxyEndpointsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeDbProxyEndpointsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeDbProxyEndpointsHeaders;
}(SpeakeasyBase));
export { PostDescribeDbProxyEndpointsHeaders };
var PostDescribeDbProxyEndpointsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeDbProxyEndpointsRequest, _super);
    function PostDescribeDbProxyEndpointsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeDbProxyEndpointsQueryParams)
    ], PostDescribeDbProxyEndpointsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeDbProxyEndpointsHeaders)
    ], PostDescribeDbProxyEndpointsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbProxyEndpointsRequest.prototype, "request", void 0);
    return PostDescribeDbProxyEndpointsRequest;
}(SpeakeasyBase));
export { PostDescribeDbProxyEndpointsRequest };
var PostDescribeDbProxyEndpointsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeDbProxyEndpointsResponse, _super);
    function PostDescribeDbProxyEndpointsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbProxyEndpointsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeDbProxyEndpointsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeDbProxyEndpointsResponse.prototype, "statusCode", void 0);
    return PostDescribeDbProxyEndpointsResponse;
}(SpeakeasyBase));
export { PostDescribeDbProxyEndpointsResponse };
