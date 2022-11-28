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
export var GetDescribeLoggingStatusActionEnum;
(function (GetDescribeLoggingStatusActionEnum) {
    GetDescribeLoggingStatusActionEnum["DescribeLoggingStatus"] = "DescribeLoggingStatus";
})(GetDescribeLoggingStatusActionEnum || (GetDescribeLoggingStatusActionEnum = {}));
export var GetDescribeLoggingStatusVersionEnum;
(function (GetDescribeLoggingStatusVersionEnum) {
    GetDescribeLoggingStatusVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeLoggingStatusVersionEnum || (GetDescribeLoggingStatusVersionEnum = {}));
var GetDescribeLoggingStatusQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeLoggingStatusQueryParams, _super);
    function GetDescribeLoggingStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeLoggingStatusQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeLoggingStatusQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeLoggingStatusQueryParams.prototype, "version", void 0);
    return GetDescribeLoggingStatusQueryParams;
}(SpeakeasyBase));
export { GetDescribeLoggingStatusQueryParams };
var GetDescribeLoggingStatusHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeLoggingStatusHeaders, _super);
    function GetDescribeLoggingStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeLoggingStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeLoggingStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeLoggingStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeLoggingStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeLoggingStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeLoggingStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeLoggingStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeLoggingStatusHeaders;
}(SpeakeasyBase));
export { GetDescribeLoggingStatusHeaders };
var GetDescribeLoggingStatusRequest = /** @class */ (function (_super) {
    __extends(GetDescribeLoggingStatusRequest, _super);
    function GetDescribeLoggingStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeLoggingStatusQueryParams)
    ], GetDescribeLoggingStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeLoggingStatusHeaders)
    ], GetDescribeLoggingStatusRequest.prototype, "headers", void 0);
    return GetDescribeLoggingStatusRequest;
}(SpeakeasyBase));
export { GetDescribeLoggingStatusRequest };
var GetDescribeLoggingStatusResponse = /** @class */ (function (_super) {
    __extends(GetDescribeLoggingStatusResponse, _super);
    function GetDescribeLoggingStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeLoggingStatusResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeLoggingStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeLoggingStatusResponse.prototype, "statusCode", void 0);
    return GetDescribeLoggingStatusResponse;
}(SpeakeasyBase));
export { GetDescribeLoggingStatusResponse };
