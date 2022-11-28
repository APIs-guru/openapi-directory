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
export var GetDescribeOrderableDbInstanceOptionsActionEnum;
(function (GetDescribeOrderableDbInstanceOptionsActionEnum) {
    GetDescribeOrderableDbInstanceOptionsActionEnum["DescribeOrderableDbInstanceOptions"] = "DescribeOrderableDBInstanceOptions";
})(GetDescribeOrderableDbInstanceOptionsActionEnum || (GetDescribeOrderableDbInstanceOptionsActionEnum = {}));
export var GetDescribeOrderableDbInstanceOptionsVersionEnum;
(function (GetDescribeOrderableDbInstanceOptionsVersionEnum) {
    GetDescribeOrderableDbInstanceOptionsVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetDescribeOrderableDbInstanceOptionsVersionEnum || (GetDescribeOrderableDbInstanceOptionsVersionEnum = {}));
var GetDescribeOrderableDbInstanceOptionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeOrderableDbInstanceOptionsQueryParams, _super);
    function GetDescribeOrderableDbInstanceOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsQueryParams.prototype, "dbInstanceClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Engine" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsQueryParams.prototype, "engine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EngineVersion" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsQueryParams.prototype, "engineVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LicenseModel" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsQueryParams.prototype, "licenseModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeOrderableDbInstanceOptionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsQueryParams.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Vpc" }),
        __metadata("design:type", Boolean)
    ], GetDescribeOrderableDbInstanceOptionsQueryParams.prototype, "vpc", void 0);
    return GetDescribeOrderableDbInstanceOptionsQueryParams;
}(SpeakeasyBase));
export { GetDescribeOrderableDbInstanceOptionsQueryParams };
var GetDescribeOrderableDbInstanceOptionsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeOrderableDbInstanceOptionsHeaders, _super);
    function GetDescribeOrderableDbInstanceOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeOrderableDbInstanceOptionsHeaders;
}(SpeakeasyBase));
export { GetDescribeOrderableDbInstanceOptionsHeaders };
var GetDescribeOrderableDbInstanceOptionsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeOrderableDbInstanceOptionsRequest, _super);
    function GetDescribeOrderableDbInstanceOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeOrderableDbInstanceOptionsQueryParams)
    ], GetDescribeOrderableDbInstanceOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeOrderableDbInstanceOptionsHeaders)
    ], GetDescribeOrderableDbInstanceOptionsRequest.prototype, "headers", void 0);
    return GetDescribeOrderableDbInstanceOptionsRequest;
}(SpeakeasyBase));
export { GetDescribeOrderableDbInstanceOptionsRequest };
var GetDescribeOrderableDbInstanceOptionsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeOrderableDbInstanceOptionsResponse, _super);
    function GetDescribeOrderableDbInstanceOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeOrderableDbInstanceOptionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeOrderableDbInstanceOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeOrderableDbInstanceOptionsResponse.prototype, "statusCode", void 0);
    return GetDescribeOrderableDbInstanceOptionsResponse;
}(SpeakeasyBase));
export { GetDescribeOrderableDbInstanceOptionsResponse };
