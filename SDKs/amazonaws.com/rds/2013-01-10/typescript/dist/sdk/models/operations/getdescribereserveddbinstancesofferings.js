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
export var GetDescribeReservedDbInstancesOfferingsActionEnum;
(function (GetDescribeReservedDbInstancesOfferingsActionEnum) {
    GetDescribeReservedDbInstancesOfferingsActionEnum["DescribeReservedDbInstancesOfferings"] = "DescribeReservedDBInstancesOfferings";
})(GetDescribeReservedDbInstancesOfferingsActionEnum || (GetDescribeReservedDbInstancesOfferingsActionEnum = {}));
export var GetDescribeReservedDbInstancesOfferingsVersionEnum;
(function (GetDescribeReservedDbInstancesOfferingsVersionEnum) {
    GetDescribeReservedDbInstancesOfferingsVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetDescribeReservedDbInstancesOfferingsVersionEnum || (GetDescribeReservedDbInstancesOfferingsVersionEnum = {}));
var GetDescribeReservedDbInstancesOfferingsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeReservedDbInstancesOfferingsQueryParams, _super);
    function GetDescribeReservedDbInstancesOfferingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsQueryParams.prototype, "dbInstanceClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Duration" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsQueryParams.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeReservedDbInstancesOfferingsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MultiAZ" }),
        __metadata("design:type", Boolean)
    ], GetDescribeReservedDbInstancesOfferingsQueryParams.prototype, "multiAz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OfferingType" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsQueryParams.prototype, "offeringType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ProductDescription" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsQueryParams.prototype, "productDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ReservedDBInstancesOfferingId" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsQueryParams.prototype, "reservedDbInstancesOfferingId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsQueryParams.prototype, "version", void 0);
    return GetDescribeReservedDbInstancesOfferingsQueryParams;
}(SpeakeasyBase));
export { GetDescribeReservedDbInstancesOfferingsQueryParams };
var GetDescribeReservedDbInstancesOfferingsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeReservedDbInstancesOfferingsHeaders, _super);
    function GetDescribeReservedDbInstancesOfferingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeReservedDbInstancesOfferingsHeaders;
}(SpeakeasyBase));
export { GetDescribeReservedDbInstancesOfferingsHeaders };
var GetDescribeReservedDbInstancesOfferingsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeReservedDbInstancesOfferingsRequest, _super);
    function GetDescribeReservedDbInstancesOfferingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeReservedDbInstancesOfferingsQueryParams)
    ], GetDescribeReservedDbInstancesOfferingsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeReservedDbInstancesOfferingsHeaders)
    ], GetDescribeReservedDbInstancesOfferingsRequest.prototype, "headers", void 0);
    return GetDescribeReservedDbInstancesOfferingsRequest;
}(SpeakeasyBase));
export { GetDescribeReservedDbInstancesOfferingsRequest };
var GetDescribeReservedDbInstancesOfferingsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeReservedDbInstancesOfferingsResponse, _super);
    function GetDescribeReservedDbInstancesOfferingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeReservedDbInstancesOfferingsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeReservedDbInstancesOfferingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeReservedDbInstancesOfferingsResponse.prototype, "statusCode", void 0);
    return GetDescribeReservedDbInstancesOfferingsResponse;
}(SpeakeasyBase));
export { GetDescribeReservedDbInstancesOfferingsResponse };
