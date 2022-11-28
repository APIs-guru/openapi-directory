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
export var PostDescribeEventsActionEnum;
(function (PostDescribeEventsActionEnum) {
    PostDescribeEventsActionEnum["DescribeEvents"] = "DescribeEvents";
})(PostDescribeEventsActionEnum || (PostDescribeEventsActionEnum = {}));
export var PostDescribeEventsVersionEnum;
(function (PostDescribeEventsVersionEnum) {
    PostDescribeEventsVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(PostDescribeEventsVersionEnum || (PostDescribeEventsVersionEnum = {}));
var PostDescribeEventsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeEventsQueryParams, _super);
    function PostDescribeEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeEventsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeEventsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeEventsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeEventsQueryParams.prototype, "version", void 0);
    return PostDescribeEventsQueryParams;
}(SpeakeasyBase));
export { PostDescribeEventsQueryParams };
var PostDescribeEventsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeEventsHeaders, _super);
    function PostDescribeEventsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeEventsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeEventsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeEventsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeEventsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeEventsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeEventsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeEventsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeEventsHeaders;
}(SpeakeasyBase));
export { PostDescribeEventsHeaders };
var PostDescribeEventsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeEventsRequest, _super);
    function PostDescribeEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeEventsQueryParams)
    ], PostDescribeEventsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeEventsHeaders)
    ], PostDescribeEventsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEventsRequest.prototype, "request", void 0);
    return PostDescribeEventsRequest;
}(SpeakeasyBase));
export { PostDescribeEventsRequest };
var PostDescribeEventsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeEventsResponse, _super);
    function PostDescribeEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEventsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeEventsResponse.prototype, "statusCode", void 0);
    return PostDescribeEventsResponse;
}(SpeakeasyBase));
export { PostDescribeEventsResponse };
