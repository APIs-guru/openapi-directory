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
export var GetDescribeDbParameterGroupsActionEnum;
(function (GetDescribeDbParameterGroupsActionEnum) {
    GetDescribeDbParameterGroupsActionEnum["DescribeDbParameterGroups"] = "DescribeDBParameterGroups";
})(GetDescribeDbParameterGroupsActionEnum || (GetDescribeDbParameterGroupsActionEnum = {}));
export var GetDescribeDbParameterGroupsVersionEnum;
(function (GetDescribeDbParameterGroupsVersionEnum) {
    GetDescribeDbParameterGroupsVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetDescribeDbParameterGroupsVersionEnum || (GetDescribeDbParameterGroupsVersionEnum = {}));
var GetDescribeDbParameterGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeDbParameterGroupsQueryParams, _super);
    function GetDescribeDbParameterGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeDbParameterGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBParameterGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeDbParameterGroupsQueryParams.prototype, "dbParameterGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeDbParameterGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeDbParameterGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeDbParameterGroupsQueryParams.prototype, "version", void 0);
    return GetDescribeDbParameterGroupsQueryParams;
}(SpeakeasyBase));
export { GetDescribeDbParameterGroupsQueryParams };
var GetDescribeDbParameterGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeDbParameterGroupsHeaders, _super);
    function GetDescribeDbParameterGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeDbParameterGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeDbParameterGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeDbParameterGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeDbParameterGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeDbParameterGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeDbParameterGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeDbParameterGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeDbParameterGroupsHeaders;
}(SpeakeasyBase));
export { GetDescribeDbParameterGroupsHeaders };
var GetDescribeDbParameterGroupsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeDbParameterGroupsRequest, _super);
    function GetDescribeDbParameterGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeDbParameterGroupsQueryParams)
    ], GetDescribeDbParameterGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeDbParameterGroupsHeaders)
    ], GetDescribeDbParameterGroupsRequest.prototype, "headers", void 0);
    return GetDescribeDbParameterGroupsRequest;
}(SpeakeasyBase));
export { GetDescribeDbParameterGroupsRequest };
var GetDescribeDbParameterGroupsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeDbParameterGroupsResponse, _super);
    function GetDescribeDbParameterGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeDbParameterGroupsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeDbParameterGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeDbParameterGroupsResponse.prototype, "statusCode", void 0);
    return GetDescribeDbParameterGroupsResponse;
}(SpeakeasyBase));
export { GetDescribeDbParameterGroupsResponse };
