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
export var PostDescribeReservedNodesActionEnum;
(function (PostDescribeReservedNodesActionEnum) {
    PostDescribeReservedNodesActionEnum["DescribeReservedNodes"] = "DescribeReservedNodes";
})(PostDescribeReservedNodesActionEnum || (PostDescribeReservedNodesActionEnum = {}));
export var PostDescribeReservedNodesVersionEnum;
(function (PostDescribeReservedNodesVersionEnum) {
    PostDescribeReservedNodesVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeReservedNodesVersionEnum || (PostDescribeReservedNodesVersionEnum = {}));
var PostDescribeReservedNodesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeReservedNodesQueryParams, _super);
    function PostDescribeReservedNodesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodesQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodesQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodesQueryParams.prototype, "version", void 0);
    return PostDescribeReservedNodesQueryParams;
}(SpeakeasyBase));
export { PostDescribeReservedNodesQueryParams };
var PostDescribeReservedNodesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeReservedNodesHeaders, _super);
    function PostDescribeReservedNodesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeReservedNodesHeaders;
}(SpeakeasyBase));
export { PostDescribeReservedNodesHeaders };
var PostDescribeReservedNodesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeReservedNodesRequest, _super);
    function PostDescribeReservedNodesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeReservedNodesQueryParams)
    ], PostDescribeReservedNodesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeReservedNodesHeaders)
    ], PostDescribeReservedNodesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeReservedNodesRequest.prototype, "request", void 0);
    return PostDescribeReservedNodesRequest;
}(SpeakeasyBase));
export { PostDescribeReservedNodesRequest };
var PostDescribeReservedNodesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeReservedNodesResponse, _super);
    function PostDescribeReservedNodesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeReservedNodesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeReservedNodesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeReservedNodesResponse.prototype, "statusCode", void 0);
    return PostDescribeReservedNodesResponse;
}(SpeakeasyBase));
export { PostDescribeReservedNodesResponse };
