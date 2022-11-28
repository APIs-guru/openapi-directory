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
export var PostGetReservedNodeExchangeOfferingsActionEnum;
(function (PostGetReservedNodeExchangeOfferingsActionEnum) {
    PostGetReservedNodeExchangeOfferingsActionEnum["GetReservedNodeExchangeOfferings"] = "GetReservedNodeExchangeOfferings";
})(PostGetReservedNodeExchangeOfferingsActionEnum || (PostGetReservedNodeExchangeOfferingsActionEnum = {}));
export var PostGetReservedNodeExchangeOfferingsVersionEnum;
(function (PostGetReservedNodeExchangeOfferingsVersionEnum) {
    PostGetReservedNodeExchangeOfferingsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostGetReservedNodeExchangeOfferingsVersionEnum || (PostGetReservedNodeExchangeOfferingsVersionEnum = {}));
var PostGetReservedNodeExchangeOfferingsQueryParams = /** @class */ (function (_super) {
    __extends(PostGetReservedNodeExchangeOfferingsQueryParams, _super);
    function PostGetReservedNodeExchangeOfferingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetReservedNodeExchangeOfferingsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostGetReservedNodeExchangeOfferingsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostGetReservedNodeExchangeOfferingsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetReservedNodeExchangeOfferingsQueryParams.prototype, "version", void 0);
    return PostGetReservedNodeExchangeOfferingsQueryParams;
}(SpeakeasyBase));
export { PostGetReservedNodeExchangeOfferingsQueryParams };
var PostGetReservedNodeExchangeOfferingsHeaders = /** @class */ (function (_super) {
    __extends(PostGetReservedNodeExchangeOfferingsHeaders, _super);
    function PostGetReservedNodeExchangeOfferingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetReservedNodeExchangeOfferingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetReservedNodeExchangeOfferingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetReservedNodeExchangeOfferingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetReservedNodeExchangeOfferingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetReservedNodeExchangeOfferingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetReservedNodeExchangeOfferingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetReservedNodeExchangeOfferingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetReservedNodeExchangeOfferingsHeaders;
}(SpeakeasyBase));
export { PostGetReservedNodeExchangeOfferingsHeaders };
var PostGetReservedNodeExchangeOfferingsRequest = /** @class */ (function (_super) {
    __extends(PostGetReservedNodeExchangeOfferingsRequest, _super);
    function PostGetReservedNodeExchangeOfferingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetReservedNodeExchangeOfferingsQueryParams)
    ], PostGetReservedNodeExchangeOfferingsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGetReservedNodeExchangeOfferingsHeaders)
    ], PostGetReservedNodeExchangeOfferingsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetReservedNodeExchangeOfferingsRequest.prototype, "request", void 0);
    return PostGetReservedNodeExchangeOfferingsRequest;
}(SpeakeasyBase));
export { PostGetReservedNodeExchangeOfferingsRequest };
var PostGetReservedNodeExchangeOfferingsResponse = /** @class */ (function (_super) {
    __extends(PostGetReservedNodeExchangeOfferingsResponse, _super);
    function PostGetReservedNodeExchangeOfferingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostGetReservedNodeExchangeOfferingsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGetReservedNodeExchangeOfferingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGetReservedNodeExchangeOfferingsResponse.prototype, "statusCode", void 0);
    return PostGetReservedNodeExchangeOfferingsResponse;
}(SpeakeasyBase));
export { PostGetReservedNodeExchangeOfferingsResponse };
