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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GetDescribeClusterSecurityGroupsActionEnum;
(function (GetDescribeClusterSecurityGroupsActionEnum) {
    GetDescribeClusterSecurityGroupsActionEnum["DescribeClusterSecurityGroups"] = "DescribeClusterSecurityGroups";
})(GetDescribeClusterSecurityGroupsActionEnum || (GetDescribeClusterSecurityGroupsActionEnum = {}));
export var GetDescribeClusterSecurityGroupsVersionEnum;
(function (GetDescribeClusterSecurityGroupsVersionEnum) {
    GetDescribeClusterSecurityGroupsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeClusterSecurityGroupsVersionEnum || (GetDescribeClusterSecurityGroupsVersionEnum = {}));
var GetDescribeClusterSecurityGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeClusterSecurityGroupsQueryParams, _super);
    function GetDescribeClusterSecurityGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeClusterSecurityGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterSecurityGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeClusterSecurityGroupsQueryParams.prototype, "clusterSecurityGroupName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeClusterSecurityGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeClusterSecurityGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" }),
        __metadata("design:type", Array)
    ], GetDescribeClusterSecurityGroupsQueryParams.prototype, "tagKeys", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TagValues" }),
        __metadata("design:type", Array)
    ], GetDescribeClusterSecurityGroupsQueryParams.prototype, "tagValues", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeClusterSecurityGroupsQueryParams.prototype, "version", void 0);
    return GetDescribeClusterSecurityGroupsQueryParams;
}(SpeakeasyBase));
export { GetDescribeClusterSecurityGroupsQueryParams };
var GetDescribeClusterSecurityGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeClusterSecurityGroupsHeaders, _super);
    function GetDescribeClusterSecurityGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeClusterSecurityGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeClusterSecurityGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeClusterSecurityGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeClusterSecurityGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeClusterSecurityGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeClusterSecurityGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeClusterSecurityGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeClusterSecurityGroupsHeaders;
}(SpeakeasyBase));
export { GetDescribeClusterSecurityGroupsHeaders };
var GetDescribeClusterSecurityGroupsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeClusterSecurityGroupsRequest, _super);
    function GetDescribeClusterSecurityGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeClusterSecurityGroupsQueryParams)
    ], GetDescribeClusterSecurityGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeClusterSecurityGroupsHeaders)
    ], GetDescribeClusterSecurityGroupsRequest.prototype, "headers", void 0);
    return GetDescribeClusterSecurityGroupsRequest;
}(SpeakeasyBase));
export { GetDescribeClusterSecurityGroupsRequest };
var GetDescribeClusterSecurityGroupsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeClusterSecurityGroupsResponse, _super);
    function GetDescribeClusterSecurityGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeClusterSecurityGroupsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeClusterSecurityGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeClusterSecurityGroupsResponse.prototype, "statusCode", void 0);
    return GetDescribeClusterSecurityGroupsResponse;
}(SpeakeasyBase));
export { GetDescribeClusterSecurityGroupsResponse };
