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
var DeleteConfigurationSetEventDestinationPathParams = /** @class */ (function (_super) {
    __extends(DeleteConfigurationSetEventDestinationPathParams, _super);
    function DeleteConfigurationSetEventDestinationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], DeleteConfigurationSetEventDestinationPathParams.prototype, "configurationSetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EventDestinationName" }),
        __metadata("design:type", String)
    ], DeleteConfigurationSetEventDestinationPathParams.prototype, "eventDestinationName", void 0);
    return DeleteConfigurationSetEventDestinationPathParams;
}(SpeakeasyBase));
export { DeleteConfigurationSetEventDestinationPathParams };
var DeleteConfigurationSetEventDestinationHeaders = /** @class */ (function (_super) {
    __extends(DeleteConfigurationSetEventDestinationHeaders, _super);
    function DeleteConfigurationSetEventDestinationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteConfigurationSetEventDestinationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteConfigurationSetEventDestinationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteConfigurationSetEventDestinationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteConfigurationSetEventDestinationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteConfigurationSetEventDestinationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteConfigurationSetEventDestinationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteConfigurationSetEventDestinationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteConfigurationSetEventDestinationHeaders;
}(SpeakeasyBase));
export { DeleteConfigurationSetEventDestinationHeaders };
var DeleteConfigurationSetEventDestinationRequest = /** @class */ (function (_super) {
    __extends(DeleteConfigurationSetEventDestinationRequest, _super);
    function DeleteConfigurationSetEventDestinationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteConfigurationSetEventDestinationPathParams)
    ], DeleteConfigurationSetEventDestinationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteConfigurationSetEventDestinationHeaders)
    ], DeleteConfigurationSetEventDestinationRequest.prototype, "headers", void 0);
    return DeleteConfigurationSetEventDestinationRequest;
}(SpeakeasyBase));
export { DeleteConfigurationSetEventDestinationRequest };
var DeleteConfigurationSetEventDestinationResponse = /** @class */ (function (_super) {
    __extends(DeleteConfigurationSetEventDestinationResponse, _super);
    function DeleteConfigurationSetEventDestinationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteConfigurationSetEventDestinationResponse.prototype, "badRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteConfigurationSetEventDestinationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteConfigurationSetEventDestinationResponse.prototype, "deleteConfigurationSetEventDestinationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteConfigurationSetEventDestinationResponse.prototype, "internalServiceErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteConfigurationSetEventDestinationResponse.prototype, "notFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteConfigurationSetEventDestinationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteConfigurationSetEventDestinationResponse.prototype, "tooManyRequestsException", void 0);
    return DeleteConfigurationSetEventDestinationResponse;
}(SpeakeasyBase));
export { DeleteConfigurationSetEventDestinationResponse };
