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
export var GetDescribeClusterVersionsActionEnum;
(function (GetDescribeClusterVersionsActionEnum) {
    GetDescribeClusterVersionsActionEnum["DescribeClusterVersions"] = "DescribeClusterVersions";
})(GetDescribeClusterVersionsActionEnum || (GetDescribeClusterVersionsActionEnum = {}));
export var GetDescribeClusterVersionsVersionEnum;
(function (GetDescribeClusterVersionsVersionEnum) {
    GetDescribeClusterVersionsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeClusterVersionsVersionEnum || (GetDescribeClusterVersionsVersionEnum = {}));
var GetDescribeClusterVersionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeClusterVersionsQueryParams, _super);
    function GetDescribeClusterVersionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeClusterVersionsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterParameterGroupFamily" }),
        __metadata("design:type", String)
    ], GetDescribeClusterVersionsQueryParams.prototype, "clusterParameterGroupFamily", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterVersion" }),
        __metadata("design:type", String)
    ], GetDescribeClusterVersionsQueryParams.prototype, "clusterVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeClusterVersionsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeClusterVersionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeClusterVersionsQueryParams.prototype, "version", void 0);
    return GetDescribeClusterVersionsQueryParams;
}(SpeakeasyBase));
export { GetDescribeClusterVersionsQueryParams };
var GetDescribeClusterVersionsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeClusterVersionsHeaders, _super);
    function GetDescribeClusterVersionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeClusterVersionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeClusterVersionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeClusterVersionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeClusterVersionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeClusterVersionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeClusterVersionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeClusterVersionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeClusterVersionsHeaders;
}(SpeakeasyBase));
export { GetDescribeClusterVersionsHeaders };
var GetDescribeClusterVersionsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeClusterVersionsRequest, _super);
    function GetDescribeClusterVersionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeClusterVersionsQueryParams)
    ], GetDescribeClusterVersionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeClusterVersionsHeaders)
    ], GetDescribeClusterVersionsRequest.prototype, "headers", void 0);
    return GetDescribeClusterVersionsRequest;
}(SpeakeasyBase));
export { GetDescribeClusterVersionsRequest };
var GetDescribeClusterVersionsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeClusterVersionsResponse, _super);
    function GetDescribeClusterVersionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeClusterVersionsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeClusterVersionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeClusterVersionsResponse.prototype, "statusCode", void 0);
    return GetDescribeClusterVersionsResponse;
}(SpeakeasyBase));
export { GetDescribeClusterVersionsResponse };
