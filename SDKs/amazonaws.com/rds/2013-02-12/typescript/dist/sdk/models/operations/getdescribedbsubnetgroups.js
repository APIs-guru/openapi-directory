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
export var GetDescribeDbSubnetGroupsActionEnum;
(function (GetDescribeDbSubnetGroupsActionEnum) {
    GetDescribeDbSubnetGroupsActionEnum["DescribeDbSubnetGroups"] = "DescribeDBSubnetGroups";
})(GetDescribeDbSubnetGroupsActionEnum || (GetDescribeDbSubnetGroupsActionEnum = {}));
export var GetDescribeDbSubnetGroupsVersionEnum;
(function (GetDescribeDbSubnetGroupsVersionEnum) {
    GetDescribeDbSubnetGroupsVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetDescribeDbSubnetGroupsVersionEnum || (GetDescribeDbSubnetGroupsVersionEnum = {}));
var GetDescribeDbSubnetGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeDbSubnetGroupsQueryParams, _super);
    function GetDescribeDbSubnetGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeDbSubnetGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSubnetGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeDbSubnetGroupsQueryParams.prototype, "dbSubnetGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeDbSubnetGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeDbSubnetGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeDbSubnetGroupsQueryParams.prototype, "version", void 0);
    return GetDescribeDbSubnetGroupsQueryParams;
}(SpeakeasyBase));
export { GetDescribeDbSubnetGroupsQueryParams };
var GetDescribeDbSubnetGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeDbSubnetGroupsHeaders, _super);
    function GetDescribeDbSubnetGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeDbSubnetGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeDbSubnetGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeDbSubnetGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeDbSubnetGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeDbSubnetGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeDbSubnetGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeDbSubnetGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeDbSubnetGroupsHeaders;
}(SpeakeasyBase));
export { GetDescribeDbSubnetGroupsHeaders };
var GetDescribeDbSubnetGroupsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeDbSubnetGroupsRequest, _super);
    function GetDescribeDbSubnetGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeDbSubnetGroupsQueryParams)
    ], GetDescribeDbSubnetGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeDbSubnetGroupsHeaders)
    ], GetDescribeDbSubnetGroupsRequest.prototype, "headers", void 0);
    return GetDescribeDbSubnetGroupsRequest;
}(SpeakeasyBase));
export { GetDescribeDbSubnetGroupsRequest };
var GetDescribeDbSubnetGroupsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeDbSubnetGroupsResponse, _super);
    function GetDescribeDbSubnetGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeDbSubnetGroupsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeDbSubnetGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeDbSubnetGroupsResponse.prototype, "statusCode", void 0);
    return GetDescribeDbSubnetGroupsResponse;
}(SpeakeasyBase));
export { GetDescribeDbSubnetGroupsResponse };
