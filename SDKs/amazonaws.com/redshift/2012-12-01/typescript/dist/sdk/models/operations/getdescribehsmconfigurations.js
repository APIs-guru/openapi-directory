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
export var GetDescribeHsmConfigurationsActionEnum;
(function (GetDescribeHsmConfigurationsActionEnum) {
    GetDescribeHsmConfigurationsActionEnum["DescribeHsmConfigurations"] = "DescribeHsmConfigurations";
})(GetDescribeHsmConfigurationsActionEnum || (GetDescribeHsmConfigurationsActionEnum = {}));
export var GetDescribeHsmConfigurationsVersionEnum;
(function (GetDescribeHsmConfigurationsVersionEnum) {
    GetDescribeHsmConfigurationsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeHsmConfigurationsVersionEnum || (GetDescribeHsmConfigurationsVersionEnum = {}));
var GetDescribeHsmConfigurationsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeHsmConfigurationsQueryParams, _super);
    function GetDescribeHsmConfigurationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeHsmConfigurationsQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HsmConfigurationIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeHsmConfigurationsQueryParams.prototype, "hsmConfigurationIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeHsmConfigurationsQueryParams.prototype, "marker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeHsmConfigurationsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagKeys" }),
        __metadata("design:type", Array)
    ], GetDescribeHsmConfigurationsQueryParams.prototype, "tagKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TagValues" }),
        __metadata("design:type", Array)
    ], GetDescribeHsmConfigurationsQueryParams.prototype, "tagValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeHsmConfigurationsQueryParams.prototype, "version", void 0);
    return GetDescribeHsmConfigurationsQueryParams;
}(SpeakeasyBase));
export { GetDescribeHsmConfigurationsQueryParams };
var GetDescribeHsmConfigurationsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeHsmConfigurationsHeaders, _super);
    function GetDescribeHsmConfigurationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeHsmConfigurationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeHsmConfigurationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeHsmConfigurationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeHsmConfigurationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeHsmConfigurationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeHsmConfigurationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeHsmConfigurationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeHsmConfigurationsHeaders;
}(SpeakeasyBase));
export { GetDescribeHsmConfigurationsHeaders };
var GetDescribeHsmConfigurationsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeHsmConfigurationsRequest, _super);
    function GetDescribeHsmConfigurationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeHsmConfigurationsQueryParams)
    ], GetDescribeHsmConfigurationsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDescribeHsmConfigurationsHeaders)
    ], GetDescribeHsmConfigurationsRequest.prototype, "headers", void 0);
    return GetDescribeHsmConfigurationsRequest;
}(SpeakeasyBase));
export { GetDescribeHsmConfigurationsRequest };
var GetDescribeHsmConfigurationsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeHsmConfigurationsResponse, _super);
    function GetDescribeHsmConfigurationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeHsmConfigurationsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDescribeHsmConfigurationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDescribeHsmConfigurationsResponse.prototype, "statusCode", void 0);
    return GetDescribeHsmConfigurationsResponse;
}(SpeakeasyBase));
export { GetDescribeHsmConfigurationsResponse };
