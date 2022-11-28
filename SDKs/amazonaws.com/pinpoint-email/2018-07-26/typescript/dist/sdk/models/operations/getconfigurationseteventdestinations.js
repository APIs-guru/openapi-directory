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
import * as shared from "../shared";
var GetConfigurationSetEventDestinationsPathParams = /** @class */ (function (_super) {
    __extends(GetConfigurationSetEventDestinationsPathParams, _super);
    function GetConfigurationSetEventDestinationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], GetConfigurationSetEventDestinationsPathParams.prototype, "configurationSetName", void 0);
    return GetConfigurationSetEventDestinationsPathParams;
}(SpeakeasyBase));
export { GetConfigurationSetEventDestinationsPathParams };
var GetConfigurationSetEventDestinationsHeaders = /** @class */ (function (_super) {
    __extends(GetConfigurationSetEventDestinationsHeaders, _super);
    function GetConfigurationSetEventDestinationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetConfigurationSetEventDestinationsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetConfigurationSetEventDestinationsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetConfigurationSetEventDestinationsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetConfigurationSetEventDestinationsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetConfigurationSetEventDestinationsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetConfigurationSetEventDestinationsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetConfigurationSetEventDestinationsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetConfigurationSetEventDestinationsHeaders;
}(SpeakeasyBase));
export { GetConfigurationSetEventDestinationsHeaders };
var GetConfigurationSetEventDestinationsRequest = /** @class */ (function (_super) {
    __extends(GetConfigurationSetEventDestinationsRequest, _super);
    function GetConfigurationSetEventDestinationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConfigurationSetEventDestinationsPathParams)
    ], GetConfigurationSetEventDestinationsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetConfigurationSetEventDestinationsHeaders)
    ], GetConfigurationSetEventDestinationsRequest.prototype, "headers", void 0);
    return GetConfigurationSetEventDestinationsRequest;
}(SpeakeasyBase));
export { GetConfigurationSetEventDestinationsRequest };
var GetConfigurationSetEventDestinationsResponse = /** @class */ (function (_super) {
    __extends(GetConfigurationSetEventDestinationsResponse, _super);
    function GetConfigurationSetEventDestinationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetConfigurationSetEventDestinationsResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetConfigurationSetEventDestinationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetConfigurationSetEventDestinationsResponse)
    ], GetConfigurationSetEventDestinationsResponse.prototype, "getConfigurationSetEventDestinationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetConfigurationSetEventDestinationsResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetConfigurationSetEventDestinationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetConfigurationSetEventDestinationsResponse.prototype, "tooManyRequestsException", void 0);
    return GetConfigurationSetEventDestinationsResponse;
}(SpeakeasyBase));
export { GetConfigurationSetEventDestinationsResponse };
