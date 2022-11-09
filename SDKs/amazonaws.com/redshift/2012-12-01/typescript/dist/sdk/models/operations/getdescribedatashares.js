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
export var GetDescribeDataSharesActionEnum;
(function (GetDescribeDataSharesActionEnum) {
    GetDescribeDataSharesActionEnum["DescribeDataShares"] = "DescribeDataShares";
})(GetDescribeDataSharesActionEnum || (GetDescribeDataSharesActionEnum = {}));
export var GetDescribeDataSharesVersionEnum;
(function (GetDescribeDataSharesVersionEnum) {
    GetDescribeDataSharesVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeDataSharesVersionEnum || (GetDescribeDataSharesVersionEnum = {}));
var GetDescribeDataSharesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeDataSharesQueryParams, _super);
    function GetDescribeDataSharesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesQueryParams.prototype, "action", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=DataShareArn" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesQueryParams.prototype, "dataShareArn", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesQueryParams.prototype, "marker", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeDataSharesQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesQueryParams.prototype, "version", void 0);
    return GetDescribeDataSharesQueryParams;
}(SpeakeasyBase));
export { GetDescribeDataSharesQueryParams };
var GetDescribeDataSharesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeDataSharesHeaders, _super);
    function GetDescribeDataSharesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeDataSharesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeDataSharesHeaders;
}(SpeakeasyBase));
export { GetDescribeDataSharesHeaders };
var GetDescribeDataSharesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeDataSharesRequest, _super);
    function GetDescribeDataSharesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeDataSharesQueryParams)
    ], GetDescribeDataSharesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDescribeDataSharesHeaders)
    ], GetDescribeDataSharesRequest.prototype, "headers", void 0);
    return GetDescribeDataSharesRequest;
}(SpeakeasyBase));
export { GetDescribeDataSharesRequest };
var GetDescribeDataSharesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeDataSharesResponse, _super);
    function GetDescribeDataSharesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeDataSharesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDescribeDataSharesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDescribeDataSharesResponse.prototype, "statusCode", void 0);
    return GetDescribeDataSharesResponse;
}(SpeakeasyBase));
export { GetDescribeDataSharesResponse };
