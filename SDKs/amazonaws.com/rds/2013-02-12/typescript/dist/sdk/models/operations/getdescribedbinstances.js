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
export var GetDescribeDbInstancesActionEnum;
(function (GetDescribeDbInstancesActionEnum) {
    GetDescribeDbInstancesActionEnum["DescribeDbInstances"] = "DescribeDBInstances";
})(GetDescribeDbInstancesActionEnum || (GetDescribeDbInstancesActionEnum = {}));
export var GetDescribeDbInstancesVersionEnum;
(function (GetDescribeDbInstancesVersionEnum) {
    GetDescribeDbInstancesVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetDescribeDbInstancesVersionEnum || (GetDescribeDbInstancesVersionEnum = {}));
var GetDescribeDbInstancesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeDbInstancesQueryParams, _super);
    function GetDescribeDbInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeDbInstancesQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeDbInstancesQueryParams.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeDbInstancesQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeDbInstancesQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeDbInstancesQueryParams.prototype, "version", void 0);
    return GetDescribeDbInstancesQueryParams;
}(SpeakeasyBase));
export { GetDescribeDbInstancesQueryParams };
var GetDescribeDbInstancesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeDbInstancesHeaders, _super);
    function GetDescribeDbInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeDbInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeDbInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeDbInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeDbInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeDbInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeDbInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeDbInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeDbInstancesHeaders;
}(SpeakeasyBase));
export { GetDescribeDbInstancesHeaders };
var GetDescribeDbInstancesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeDbInstancesRequest, _super);
    function GetDescribeDbInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeDbInstancesQueryParams)
    ], GetDescribeDbInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeDbInstancesHeaders)
    ], GetDescribeDbInstancesRequest.prototype, "headers", void 0);
    return GetDescribeDbInstancesRequest;
}(SpeakeasyBase));
export { GetDescribeDbInstancesRequest };
var GetDescribeDbInstancesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeDbInstancesResponse, _super);
    function GetDescribeDbInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeDbInstancesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeDbInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeDbInstancesResponse.prototype, "statusCode", void 0);
    return GetDescribeDbInstancesResponse;
}(SpeakeasyBase));
export { GetDescribeDbInstancesResponse };
