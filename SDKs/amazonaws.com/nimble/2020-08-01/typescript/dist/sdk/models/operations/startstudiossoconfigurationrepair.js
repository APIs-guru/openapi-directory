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
var StartStudioSsoConfigurationRepairPathParams = /** @class */ (function (_super) {
    __extends(StartStudioSsoConfigurationRepairPathParams, _super);
    function StartStudioSsoConfigurationRepairPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=studioId" }),
        __metadata("design:type", String)
    ], StartStudioSsoConfigurationRepairPathParams.prototype, "studioId", void 0);
    return StartStudioSsoConfigurationRepairPathParams;
}(SpeakeasyBase));
export { StartStudioSsoConfigurationRepairPathParams };
var StartStudioSsoConfigurationRepairHeaders = /** @class */ (function (_super) {
    __extends(StartStudioSsoConfigurationRepairHeaders, _super);
    function StartStudioSsoConfigurationRepairHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartStudioSsoConfigurationRepairHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" }),
        __metadata("design:type", String)
    ], StartStudioSsoConfigurationRepairHeaders.prototype, "xAmzClientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartStudioSsoConfigurationRepairHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartStudioSsoConfigurationRepairHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartStudioSsoConfigurationRepairHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartStudioSsoConfigurationRepairHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartStudioSsoConfigurationRepairHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartStudioSsoConfigurationRepairHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartStudioSsoConfigurationRepairHeaders;
}(SpeakeasyBase));
export { StartStudioSsoConfigurationRepairHeaders };
var StartStudioSsoConfigurationRepairRequest = /** @class */ (function (_super) {
    __extends(StartStudioSsoConfigurationRepairRequest, _super);
    function StartStudioSsoConfigurationRepairRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartStudioSsoConfigurationRepairPathParams)
    ], StartStudioSsoConfigurationRepairRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartStudioSsoConfigurationRepairHeaders)
    ], StartStudioSsoConfigurationRepairRequest.prototype, "headers", void 0);
    return StartStudioSsoConfigurationRepairRequest;
}(SpeakeasyBase));
export { StartStudioSsoConfigurationRepairRequest };
var StartStudioSsoConfigurationRepairResponse = /** @class */ (function (_super) {
    __extends(StartStudioSsoConfigurationRepairResponse, _super);
    function StartStudioSsoConfigurationRepairResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartStudioSsoConfigurationRepairResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartStudioSsoConfigurationRepairResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartStudioSsoConfigurationRepairResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartStudioSsoConfigurationRepairResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartStudioSsoConfigurationRepairResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartStudioSsoConfigurationRepairResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartStudioSsoConfigurationRepairResponse)
    ], StartStudioSsoConfigurationRepairResponse.prototype, "startStudioSsoConfigurationRepairResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartStudioSsoConfigurationRepairResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartStudioSsoConfigurationRepairResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartStudioSsoConfigurationRepairResponse.prototype, "validationException", void 0);
    return StartStudioSsoConfigurationRepairResponse;
}(SpeakeasyBase));
export { StartStudioSsoConfigurationRepairResponse };
