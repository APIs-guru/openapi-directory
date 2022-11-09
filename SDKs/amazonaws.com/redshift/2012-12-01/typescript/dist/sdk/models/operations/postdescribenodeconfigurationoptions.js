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
export var PostDescribeNodeConfigurationOptionsActionEnum;
(function (PostDescribeNodeConfigurationOptionsActionEnum) {
    PostDescribeNodeConfigurationOptionsActionEnum["DescribeNodeConfigurationOptions"] = "DescribeNodeConfigurationOptions";
})(PostDescribeNodeConfigurationOptionsActionEnum || (PostDescribeNodeConfigurationOptionsActionEnum = {}));
export var PostDescribeNodeConfigurationOptionsVersionEnum;
(function (PostDescribeNodeConfigurationOptionsVersionEnum) {
    PostDescribeNodeConfigurationOptionsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeNodeConfigurationOptionsVersionEnum || (PostDescribeNodeConfigurationOptionsVersionEnum = {}));
var PostDescribeNodeConfigurationOptionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeNodeConfigurationOptionsQueryParams, _super);
    function PostDescribeNodeConfigurationOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeNodeConfigurationOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeNodeConfigurationOptionsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeNodeConfigurationOptionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeNodeConfigurationOptionsQueryParams.prototype, "version", void 0);
    return PostDescribeNodeConfigurationOptionsQueryParams;
}(SpeakeasyBase));
export { PostDescribeNodeConfigurationOptionsQueryParams };
var PostDescribeNodeConfigurationOptionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeNodeConfigurationOptionsHeaders, _super);
    function PostDescribeNodeConfigurationOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeNodeConfigurationOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeNodeConfigurationOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeNodeConfigurationOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeNodeConfigurationOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeNodeConfigurationOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeNodeConfigurationOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeNodeConfigurationOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeNodeConfigurationOptionsHeaders;
}(SpeakeasyBase));
export { PostDescribeNodeConfigurationOptionsHeaders };
var PostDescribeNodeConfigurationOptionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeNodeConfigurationOptionsRequest, _super);
    function PostDescribeNodeConfigurationOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeNodeConfigurationOptionsQueryParams)
    ], PostDescribeNodeConfigurationOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeNodeConfigurationOptionsHeaders)
    ], PostDescribeNodeConfigurationOptionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeNodeConfigurationOptionsRequest.prototype, "request", void 0);
    return PostDescribeNodeConfigurationOptionsRequest;
}(SpeakeasyBase));
export { PostDescribeNodeConfigurationOptionsRequest };
var PostDescribeNodeConfigurationOptionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeNodeConfigurationOptionsResponse, _super);
    function PostDescribeNodeConfigurationOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeNodeConfigurationOptionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeNodeConfigurationOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeNodeConfigurationOptionsResponse.prototype, "statusCode", void 0);
    return PostDescribeNodeConfigurationOptionsResponse;
}(SpeakeasyBase));
export { PostDescribeNodeConfigurationOptionsResponse };
