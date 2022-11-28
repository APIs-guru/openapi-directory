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
export var PostDescribeEndpointAccessActionEnum;
(function (PostDescribeEndpointAccessActionEnum) {
    PostDescribeEndpointAccessActionEnum["DescribeEndpointAccess"] = "DescribeEndpointAccess";
})(PostDescribeEndpointAccessActionEnum || (PostDescribeEndpointAccessActionEnum = {}));
export var PostDescribeEndpointAccessVersionEnum;
(function (PostDescribeEndpointAccessVersionEnum) {
    PostDescribeEndpointAccessVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeEndpointAccessVersionEnum || (PostDescribeEndpointAccessVersionEnum = {}));
var PostDescribeEndpointAccessQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeEndpointAccessQueryParams, _super);
    function PostDescribeEndpointAccessQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeEndpointAccessQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeEndpointAccessQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeEndpointAccessQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeEndpointAccessQueryParams.prototype, "version", void 0);
    return PostDescribeEndpointAccessQueryParams;
}(SpeakeasyBase));
export { PostDescribeEndpointAccessQueryParams };
var PostDescribeEndpointAccessHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeEndpointAccessHeaders, _super);
    function PostDescribeEndpointAccessHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeEndpointAccessHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeEndpointAccessHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeEndpointAccessHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeEndpointAccessHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeEndpointAccessHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeEndpointAccessHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeEndpointAccessHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeEndpointAccessHeaders;
}(SpeakeasyBase));
export { PostDescribeEndpointAccessHeaders };
var PostDescribeEndpointAccessRequest = /** @class */ (function (_super) {
    __extends(PostDescribeEndpointAccessRequest, _super);
    function PostDescribeEndpointAccessRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeEndpointAccessQueryParams)
    ], PostDescribeEndpointAccessRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeEndpointAccessHeaders)
    ], PostDescribeEndpointAccessRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEndpointAccessRequest.prototype, "request", void 0);
    return PostDescribeEndpointAccessRequest;
}(SpeakeasyBase));
export { PostDescribeEndpointAccessRequest };
var PostDescribeEndpointAccessResponse = /** @class */ (function (_super) {
    __extends(PostDescribeEndpointAccessResponse, _super);
    function PostDescribeEndpointAccessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEndpointAccessResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeEndpointAccessResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeEndpointAccessResponse.prototype, "statusCode", void 0);
    return PostDescribeEndpointAccessResponse;
}(SpeakeasyBase));
export { PostDescribeEndpointAccessResponse };
