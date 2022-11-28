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
export var GetDescribeTableRestoreStatusActionEnum;
(function (GetDescribeTableRestoreStatusActionEnum) {
    GetDescribeTableRestoreStatusActionEnum["DescribeTableRestoreStatus"] = "DescribeTableRestoreStatus";
})(GetDescribeTableRestoreStatusActionEnum || (GetDescribeTableRestoreStatusActionEnum = {}));
export var GetDescribeTableRestoreStatusVersionEnum;
(function (GetDescribeTableRestoreStatusVersionEnum) {
    GetDescribeTableRestoreStatusVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeTableRestoreStatusVersionEnum || (GetDescribeTableRestoreStatusVersionEnum = {}));
var GetDescribeTableRestoreStatusQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeTableRestoreStatusQueryParams, _super);
    function GetDescribeTableRestoreStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeTableRestoreStatusQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeTableRestoreStatusQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeTableRestoreStatusQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeTableRestoreStatusQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TableRestoreRequestId" }),
        __metadata("design:type", String)
    ], GetDescribeTableRestoreStatusQueryParams.prototype, "tableRestoreRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeTableRestoreStatusQueryParams.prototype, "version", void 0);
    return GetDescribeTableRestoreStatusQueryParams;
}(SpeakeasyBase));
export { GetDescribeTableRestoreStatusQueryParams };
var GetDescribeTableRestoreStatusHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeTableRestoreStatusHeaders, _super);
    function GetDescribeTableRestoreStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeTableRestoreStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeTableRestoreStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeTableRestoreStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeTableRestoreStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeTableRestoreStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeTableRestoreStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeTableRestoreStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeTableRestoreStatusHeaders;
}(SpeakeasyBase));
export { GetDescribeTableRestoreStatusHeaders };
var GetDescribeTableRestoreStatusRequest = /** @class */ (function (_super) {
    __extends(GetDescribeTableRestoreStatusRequest, _super);
    function GetDescribeTableRestoreStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeTableRestoreStatusQueryParams)
    ], GetDescribeTableRestoreStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeTableRestoreStatusHeaders)
    ], GetDescribeTableRestoreStatusRequest.prototype, "headers", void 0);
    return GetDescribeTableRestoreStatusRequest;
}(SpeakeasyBase));
export { GetDescribeTableRestoreStatusRequest };
var GetDescribeTableRestoreStatusResponse = /** @class */ (function (_super) {
    __extends(GetDescribeTableRestoreStatusResponse, _super);
    function GetDescribeTableRestoreStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeTableRestoreStatusResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeTableRestoreStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeTableRestoreStatusResponse.prototype, "statusCode", void 0);
    return GetDescribeTableRestoreStatusResponse;
}(SpeakeasyBase));
export { GetDescribeTableRestoreStatusResponse };
