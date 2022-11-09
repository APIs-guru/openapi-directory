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
export var PostDescribeHsmConfigurationsActionEnum;
(function (PostDescribeHsmConfigurationsActionEnum) {
    PostDescribeHsmConfigurationsActionEnum["DescribeHsmConfigurations"] = "DescribeHsmConfigurations";
})(PostDescribeHsmConfigurationsActionEnum || (PostDescribeHsmConfigurationsActionEnum = {}));
export var PostDescribeHsmConfigurationsVersionEnum;
(function (PostDescribeHsmConfigurationsVersionEnum) {
    PostDescribeHsmConfigurationsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeHsmConfigurationsVersionEnum || (PostDescribeHsmConfigurationsVersionEnum = {}));
var PostDescribeHsmConfigurationsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeHsmConfigurationsQueryParams, _super);
    function PostDescribeHsmConfigurationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeHsmConfigurationsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeHsmConfigurationsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeHsmConfigurationsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeHsmConfigurationsQueryParams.prototype, "version", void 0);
    return PostDescribeHsmConfigurationsQueryParams;
}(SpeakeasyBase));
export { PostDescribeHsmConfigurationsQueryParams };
var PostDescribeHsmConfigurationsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeHsmConfigurationsHeaders, _super);
    function PostDescribeHsmConfigurationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeHsmConfigurationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeHsmConfigurationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeHsmConfigurationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeHsmConfigurationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeHsmConfigurationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeHsmConfigurationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeHsmConfigurationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeHsmConfigurationsHeaders;
}(SpeakeasyBase));
export { PostDescribeHsmConfigurationsHeaders };
var PostDescribeHsmConfigurationsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeHsmConfigurationsRequest, _super);
    function PostDescribeHsmConfigurationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeHsmConfigurationsQueryParams)
    ], PostDescribeHsmConfigurationsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostDescribeHsmConfigurationsHeaders)
    ], PostDescribeHsmConfigurationsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeHsmConfigurationsRequest.prototype, "request", void 0);
    return PostDescribeHsmConfigurationsRequest;
}(SpeakeasyBase));
export { PostDescribeHsmConfigurationsRequest };
var PostDescribeHsmConfigurationsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeHsmConfigurationsResponse, _super);
    function PostDescribeHsmConfigurationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeHsmConfigurationsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostDescribeHsmConfigurationsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostDescribeHsmConfigurationsResponse.prototype, "statusCode", void 0);
    return PostDescribeHsmConfigurationsResponse;
}(SpeakeasyBase));
export { PostDescribeHsmConfigurationsResponse };
