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
export var GetDescribeDbSecurityGroupsActionEnum;
(function (GetDescribeDbSecurityGroupsActionEnum) {
    GetDescribeDbSecurityGroupsActionEnum["DescribeDbSecurityGroups"] = "DescribeDBSecurityGroups";
})(GetDescribeDbSecurityGroupsActionEnum || (GetDescribeDbSecurityGroupsActionEnum = {}));
export var GetDescribeDbSecurityGroupsVersionEnum;
(function (GetDescribeDbSecurityGroupsVersionEnum) {
    GetDescribeDbSecurityGroupsVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetDescribeDbSecurityGroupsVersionEnum || (GetDescribeDbSecurityGroupsVersionEnum = {}));
var GetDescribeDbSecurityGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeDbSecurityGroupsQueryParams, _super);
    function GetDescribeDbSecurityGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeDbSecurityGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSecurityGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeDbSecurityGroupsQueryParams.prototype, "dbSecurityGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeDbSecurityGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeDbSecurityGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeDbSecurityGroupsQueryParams.prototype, "version", void 0);
    return GetDescribeDbSecurityGroupsQueryParams;
}(SpeakeasyBase));
export { GetDescribeDbSecurityGroupsQueryParams };
var GetDescribeDbSecurityGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeDbSecurityGroupsHeaders, _super);
    function GetDescribeDbSecurityGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeDbSecurityGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeDbSecurityGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeDbSecurityGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeDbSecurityGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeDbSecurityGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeDbSecurityGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeDbSecurityGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeDbSecurityGroupsHeaders;
}(SpeakeasyBase));
export { GetDescribeDbSecurityGroupsHeaders };
var GetDescribeDbSecurityGroupsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeDbSecurityGroupsRequest, _super);
    function GetDescribeDbSecurityGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeDbSecurityGroupsQueryParams)
    ], GetDescribeDbSecurityGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeDbSecurityGroupsHeaders)
    ], GetDescribeDbSecurityGroupsRequest.prototype, "headers", void 0);
    return GetDescribeDbSecurityGroupsRequest;
}(SpeakeasyBase));
export { GetDescribeDbSecurityGroupsRequest };
var GetDescribeDbSecurityGroupsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeDbSecurityGroupsResponse, _super);
    function GetDescribeDbSecurityGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeDbSecurityGroupsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeDbSecurityGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeDbSecurityGroupsResponse.prototype, "statusCode", void 0);
    return GetDescribeDbSecurityGroupsResponse;
}(SpeakeasyBase));
export { GetDescribeDbSecurityGroupsResponse };
