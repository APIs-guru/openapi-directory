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
export var GetDescribeOrderableClusterOptionsActionEnum;
(function (GetDescribeOrderableClusterOptionsActionEnum) {
    GetDescribeOrderableClusterOptionsActionEnum["DescribeOrderableClusterOptions"] = "DescribeOrderableClusterOptions";
})(GetDescribeOrderableClusterOptionsActionEnum || (GetDescribeOrderableClusterOptionsActionEnum = {}));
export var GetDescribeOrderableClusterOptionsVersionEnum;
(function (GetDescribeOrderableClusterOptionsVersionEnum) {
    GetDescribeOrderableClusterOptionsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeOrderableClusterOptionsVersionEnum || (GetDescribeOrderableClusterOptionsVersionEnum = {}));
var GetDescribeOrderableClusterOptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeOrderableClusterOptionsQueryParams, _super);
    function GetDescribeOrderableClusterOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableClusterOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterVersion" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableClusterOptionsQueryParams.prototype, "clusterVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableClusterOptionsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeOrderableClusterOptionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NodeType" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableClusterOptionsQueryParams.prototype, "nodeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableClusterOptionsQueryParams.prototype, "version", void 0);
    return GetDescribeOrderableClusterOptionsQueryParams;
}(SpeakeasyBase));
export { GetDescribeOrderableClusterOptionsQueryParams };
var GetDescribeOrderableClusterOptionsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeOrderableClusterOptionsHeaders, _super);
    function GetDescribeOrderableClusterOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableClusterOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableClusterOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableClusterOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableClusterOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableClusterOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableClusterOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableClusterOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeOrderableClusterOptionsHeaders;
}(SpeakeasyBase));
export { GetDescribeOrderableClusterOptionsHeaders };
var GetDescribeOrderableClusterOptionsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeOrderableClusterOptionsRequest, _super);
    function GetDescribeOrderableClusterOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeOrderableClusterOptionsQueryParams)
    ], GetDescribeOrderableClusterOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeOrderableClusterOptionsHeaders)
    ], GetDescribeOrderableClusterOptionsRequest.prototype, "headers", void 0);
    return GetDescribeOrderableClusterOptionsRequest;
}(SpeakeasyBase));
export { GetDescribeOrderableClusterOptionsRequest };
var GetDescribeOrderableClusterOptionsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeOrderableClusterOptionsResponse, _super);
    function GetDescribeOrderableClusterOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeOrderableClusterOptionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeOrderableClusterOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeOrderableClusterOptionsResponse.prototype, "statusCode", void 0);
    return GetDescribeOrderableClusterOptionsResponse;
}(SpeakeasyBase));
export { GetDescribeOrderableClusterOptionsResponse };
