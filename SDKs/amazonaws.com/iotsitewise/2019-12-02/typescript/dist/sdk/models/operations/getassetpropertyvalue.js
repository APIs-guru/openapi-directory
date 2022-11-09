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
import * as shared from "../shared";
var GetAssetPropertyValueQueryParams = /** @class */ (function (_super) {
    __extends(GetAssetPropertyValueQueryParams, _super);
    function GetAssetPropertyValueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=assetId" }),
        __metadata("design:type", String)
    ], GetAssetPropertyValueQueryParams.prototype, "assetId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=propertyAlias" }),
        __metadata("design:type", String)
    ], GetAssetPropertyValueQueryParams.prototype, "propertyAlias", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=propertyId" }),
        __metadata("design:type", String)
    ], GetAssetPropertyValueQueryParams.prototype, "propertyId", void 0);
    return GetAssetPropertyValueQueryParams;
}(SpeakeasyBase));
export { GetAssetPropertyValueQueryParams };
var GetAssetPropertyValueHeaders = /** @class */ (function (_super) {
    __extends(GetAssetPropertyValueHeaders, _super);
    function GetAssetPropertyValueHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAssetPropertyValueHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAssetPropertyValueHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAssetPropertyValueHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAssetPropertyValueHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAssetPropertyValueHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAssetPropertyValueHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAssetPropertyValueHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAssetPropertyValueHeaders;
}(SpeakeasyBase));
export { GetAssetPropertyValueHeaders };
var GetAssetPropertyValueRequest = /** @class */ (function (_super) {
    __extends(GetAssetPropertyValueRequest, _super);
    function GetAssetPropertyValueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssetPropertyValueQueryParams)
    ], GetAssetPropertyValueRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAssetPropertyValueHeaders)
    ], GetAssetPropertyValueRequest.prototype, "headers", void 0);
    return GetAssetPropertyValueRequest;
}(SpeakeasyBase));
export { GetAssetPropertyValueRequest };
var GetAssetPropertyValueResponse = /** @class */ (function (_super) {
    __extends(GetAssetPropertyValueResponse, _super);
    function GetAssetPropertyValueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAssetPropertyValueResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GetAssetPropertyValueResponse)
    ], GetAssetPropertyValueResponse.prototype, "getAssetPropertyValueResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAssetPropertyValueResponse.prototype, "internalFailureException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAssetPropertyValueResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAssetPropertyValueResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAssetPropertyValueResponse.prototype, "serviceUnavailableException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAssetPropertyValueResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetAssetPropertyValueResponse.prototype, "throttlingException", void 0);
    return GetAssetPropertyValueResponse;
}(SpeakeasyBase));
export { GetAssetPropertyValueResponse };
