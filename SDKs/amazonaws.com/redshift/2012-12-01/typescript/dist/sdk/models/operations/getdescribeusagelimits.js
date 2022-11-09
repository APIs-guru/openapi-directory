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
export var GetDescribeUsageLimitsActionEnum;
(function (GetDescribeUsageLimitsActionEnum) {
    GetDescribeUsageLimitsActionEnum["DescribeUsageLimits"] = "DescribeUsageLimits";
})(GetDescribeUsageLimitsActionEnum || (GetDescribeUsageLimitsActionEnum = {}));
export var GetDescribeUsageLimitsFeatureTypeEnum;
(function (GetDescribeUsageLimitsFeatureTypeEnum) {
    GetDescribeUsageLimitsFeatureTypeEnum["Spectrum"] = "spectrum";
    GetDescribeUsageLimitsFeatureTypeEnum["ConcurrencyScaling"] = "concurrency-scaling";
})(GetDescribeUsageLimitsFeatureTypeEnum || (GetDescribeUsageLimitsFeatureTypeEnum = {}));
export var GetDescribeUsageLimitsVersionEnum;
(function (GetDescribeUsageLimitsVersionEnum) {
    GetDescribeUsageLimitsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeUsageLimitsVersionEnum || (GetDescribeUsageLimitsVersionEnum = {}));
var GetDescribeUsageLimitsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeUsageLimitsQueryParams, _super);
    function GetDescribeUsageLimitsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeUsageLimitsQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeUsageLimitsQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FeatureType" }),
        __metadata("design:type", String)
    ], GetDescribeUsageLimitsQueryParams.prototype, "featureType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeUsageLimitsQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeUsageLimitsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TagKeys" }),
        __metadata("design:type", Array)
    ], GetDescribeUsageLimitsQueryParams.prototype, "tagKeys", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=TagValues" }),
        __metadata("design:type", Array)
    ], GetDescribeUsageLimitsQueryParams.prototype, "tagValues", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=UsageLimitId" }),
        __metadata("design:type", String)
    ], GetDescribeUsageLimitsQueryParams.prototype, "usageLimitId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeUsageLimitsQueryParams.prototype, "version", void 0);
    return GetDescribeUsageLimitsQueryParams;
}(SpeakeasyBase));
export { GetDescribeUsageLimitsQueryParams };
var GetDescribeUsageLimitsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeUsageLimitsHeaders, _super);
    function GetDescribeUsageLimitsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeUsageLimitsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeUsageLimitsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeUsageLimitsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeUsageLimitsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeUsageLimitsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeUsageLimitsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeUsageLimitsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeUsageLimitsHeaders;
}(SpeakeasyBase));
export { GetDescribeUsageLimitsHeaders };
var GetDescribeUsageLimitsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeUsageLimitsRequest, _super);
    function GetDescribeUsageLimitsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeUsageLimitsQueryParams)
    ], GetDescribeUsageLimitsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeUsageLimitsHeaders)
    ], GetDescribeUsageLimitsRequest.prototype, "headers", void 0);
    return GetDescribeUsageLimitsRequest;
}(SpeakeasyBase));
export { GetDescribeUsageLimitsRequest };
var GetDescribeUsageLimitsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeUsageLimitsResponse, _super);
    function GetDescribeUsageLimitsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeUsageLimitsResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeUsageLimitsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeUsageLimitsResponse.prototype, "statusCode", void 0);
    return GetDescribeUsageLimitsResponse;
}(SpeakeasyBase));
export { GetDescribeUsageLimitsResponse };
