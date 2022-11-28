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
export var GetDescribeClusterParameterGroupsActionEnum;
(function (GetDescribeClusterParameterGroupsActionEnum) {
    GetDescribeClusterParameterGroupsActionEnum["DescribeClusterParameterGroups"] = "DescribeClusterParameterGroups";
})(GetDescribeClusterParameterGroupsActionEnum || (GetDescribeClusterParameterGroupsActionEnum = {}));
export var GetDescribeClusterParameterGroupsVersionEnum;
(function (GetDescribeClusterParameterGroupsVersionEnum) {
    GetDescribeClusterParameterGroupsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeClusterParameterGroupsVersionEnum || (GetDescribeClusterParameterGroupsVersionEnum = {}));
var GetDescribeClusterParameterGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeClusterParameterGroupsQueryParams, _super);
    function GetDescribeClusterParameterGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParameterGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParameterGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeClusterParameterGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ParameterGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParameterGroupsQueryParams.prototype, "parameterGroupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagKeys" }),
        __metadata("design:type", Array)
    ], GetDescribeClusterParameterGroupsQueryParams.prototype, "tagKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagValues" }),
        __metadata("design:type", Array)
    ], GetDescribeClusterParameterGroupsQueryParams.prototype, "tagValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParameterGroupsQueryParams.prototype, "version", void 0);
    return GetDescribeClusterParameterGroupsQueryParams;
}(SpeakeasyBase));
export { GetDescribeClusterParameterGroupsQueryParams };
var GetDescribeClusterParameterGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeClusterParameterGroupsHeaders, _super);
    function GetDescribeClusterParameterGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParameterGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParameterGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParameterGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParameterGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParameterGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParameterGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeClusterParameterGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeClusterParameterGroupsHeaders;
}(SpeakeasyBase));
export { GetDescribeClusterParameterGroupsHeaders };
var GetDescribeClusterParameterGroupsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeClusterParameterGroupsRequest, _super);
    function GetDescribeClusterParameterGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeClusterParameterGroupsQueryParams)
    ], GetDescribeClusterParameterGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeClusterParameterGroupsHeaders)
    ], GetDescribeClusterParameterGroupsRequest.prototype, "headers", void 0);
    return GetDescribeClusterParameterGroupsRequest;
}(SpeakeasyBase));
export { GetDescribeClusterParameterGroupsRequest };
var GetDescribeClusterParameterGroupsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeClusterParameterGroupsResponse, _super);
    function GetDescribeClusterParameterGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeClusterParameterGroupsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeClusterParameterGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeClusterParameterGroupsResponse.prototype, "statusCode", void 0);
    return GetDescribeClusterParameterGroupsResponse;
}(SpeakeasyBase));
export { GetDescribeClusterParameterGroupsResponse };
