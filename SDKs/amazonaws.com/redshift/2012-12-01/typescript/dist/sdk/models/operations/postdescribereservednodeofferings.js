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
export var PostDescribeReservedNodeOfferingsActionEnum;
(function (PostDescribeReservedNodeOfferingsActionEnum) {
    PostDescribeReservedNodeOfferingsActionEnum["DescribeReservedNodeOfferings"] = "DescribeReservedNodeOfferings";
})(PostDescribeReservedNodeOfferingsActionEnum || (PostDescribeReservedNodeOfferingsActionEnum = {}));
export var PostDescribeReservedNodeOfferingsVersionEnum;
(function (PostDescribeReservedNodeOfferingsVersionEnum) {
    PostDescribeReservedNodeOfferingsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeReservedNodeOfferingsVersionEnum || (PostDescribeReservedNodeOfferingsVersionEnum = {}));
var PostDescribeReservedNodeOfferingsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeReservedNodeOfferingsQueryParams, _super);
    function PostDescribeReservedNodeOfferingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodeOfferingsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodeOfferingsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodeOfferingsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodeOfferingsQueryParams.prototype, "version", void 0);
    return PostDescribeReservedNodeOfferingsQueryParams;
}(SpeakeasyBase));
export { PostDescribeReservedNodeOfferingsQueryParams };
var PostDescribeReservedNodeOfferingsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeReservedNodeOfferingsHeaders, _super);
    function PostDescribeReservedNodeOfferingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodeOfferingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodeOfferingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodeOfferingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodeOfferingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodeOfferingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodeOfferingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeReservedNodeOfferingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeReservedNodeOfferingsHeaders;
}(SpeakeasyBase));
export { PostDescribeReservedNodeOfferingsHeaders };
var PostDescribeReservedNodeOfferingsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeReservedNodeOfferingsRequest, _super);
    function PostDescribeReservedNodeOfferingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeReservedNodeOfferingsQueryParams)
    ], PostDescribeReservedNodeOfferingsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDescribeReservedNodeOfferingsHeaders)
    ], PostDescribeReservedNodeOfferingsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeReservedNodeOfferingsRequest.prototype, "request", void 0);
    return PostDescribeReservedNodeOfferingsRequest;
}(SpeakeasyBase));
export { PostDescribeReservedNodeOfferingsRequest };
var PostDescribeReservedNodeOfferingsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeReservedNodeOfferingsResponse, _super);
    function PostDescribeReservedNodeOfferingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeReservedNodeOfferingsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDescribeReservedNodeOfferingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDescribeReservedNodeOfferingsResponse.prototype, "statusCode", void 0);
    return PostDescribeReservedNodeOfferingsResponse;
}(SpeakeasyBase));
export { PostDescribeReservedNodeOfferingsResponse };
