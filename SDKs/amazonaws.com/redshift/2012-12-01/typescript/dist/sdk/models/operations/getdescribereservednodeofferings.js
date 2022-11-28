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
export var GetDescribeReservedNodeOfferingsActionEnum;
(function (GetDescribeReservedNodeOfferingsActionEnum) {
    GetDescribeReservedNodeOfferingsActionEnum["DescribeReservedNodeOfferings"] = "DescribeReservedNodeOfferings";
})(GetDescribeReservedNodeOfferingsActionEnum || (GetDescribeReservedNodeOfferingsActionEnum = {}));
export var GetDescribeReservedNodeOfferingsVersionEnum;
(function (GetDescribeReservedNodeOfferingsVersionEnum) {
    GetDescribeReservedNodeOfferingsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeReservedNodeOfferingsVersionEnum || (GetDescribeReservedNodeOfferingsVersionEnum = {}));
var GetDescribeReservedNodeOfferingsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeReservedNodeOfferingsQueryParams, _super);
    function GetDescribeReservedNodeOfferingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeReservedNodeOfferingsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeReservedNodeOfferingsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeReservedNodeOfferingsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedNodeOfferingId" }),
        __metadata("design:type", String)
    ], GetDescribeReservedNodeOfferingsQueryParams.prototype, "reservedNodeOfferingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeReservedNodeOfferingsQueryParams.prototype, "version", void 0);
    return GetDescribeReservedNodeOfferingsQueryParams;
}(SpeakeasyBase));
export { GetDescribeReservedNodeOfferingsQueryParams };
var GetDescribeReservedNodeOfferingsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeReservedNodeOfferingsHeaders, _super);
    function GetDescribeReservedNodeOfferingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeReservedNodeOfferingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeReservedNodeOfferingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeReservedNodeOfferingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeReservedNodeOfferingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeReservedNodeOfferingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeReservedNodeOfferingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeReservedNodeOfferingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeReservedNodeOfferingsHeaders;
}(SpeakeasyBase));
export { GetDescribeReservedNodeOfferingsHeaders };
var GetDescribeReservedNodeOfferingsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeReservedNodeOfferingsRequest, _super);
    function GetDescribeReservedNodeOfferingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeReservedNodeOfferingsQueryParams)
    ], GetDescribeReservedNodeOfferingsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeReservedNodeOfferingsHeaders)
    ], GetDescribeReservedNodeOfferingsRequest.prototype, "headers", void 0);
    return GetDescribeReservedNodeOfferingsRequest;
}(SpeakeasyBase));
export { GetDescribeReservedNodeOfferingsRequest };
var GetDescribeReservedNodeOfferingsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeReservedNodeOfferingsResponse, _super);
    function GetDescribeReservedNodeOfferingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeReservedNodeOfferingsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeReservedNodeOfferingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeReservedNodeOfferingsResponse.prototype, "statusCode", void 0);
    return GetDescribeReservedNodeOfferingsResponse;
}(SpeakeasyBase));
export { GetDescribeReservedNodeOfferingsResponse };
