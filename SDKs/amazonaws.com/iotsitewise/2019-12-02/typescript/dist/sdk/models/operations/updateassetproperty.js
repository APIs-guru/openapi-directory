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
var UpdateAssetPropertyPathParams = /** @class */ (function (_super) {
    __extends(UpdateAssetPropertyPathParams, _super);
    function UpdateAssetPropertyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assetId" }),
        __metadata("design:type", String)
    ], UpdateAssetPropertyPathParams.prototype, "assetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=propertyId" }),
        __metadata("design:type", String)
    ], UpdateAssetPropertyPathParams.prototype, "propertyId", void 0);
    return UpdateAssetPropertyPathParams;
}(SpeakeasyBase));
export { UpdateAssetPropertyPathParams };
var UpdateAssetPropertyHeaders = /** @class */ (function (_super) {
    __extends(UpdateAssetPropertyHeaders, _super);
    function UpdateAssetPropertyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateAssetPropertyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateAssetPropertyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateAssetPropertyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateAssetPropertyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateAssetPropertyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateAssetPropertyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateAssetPropertyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateAssetPropertyHeaders;
}(SpeakeasyBase));
export { UpdateAssetPropertyHeaders };
export var UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum;
(function (UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum) {
    UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum["Enabled"] = "ENABLED";
    UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum["Disabled"] = "DISABLED";
})(UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum || (UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum = {}));
var UpdateAssetPropertyRequestBody = /** @class */ (function (_super) {
    __extends(UpdateAssetPropertyRequestBody, _super);
    function UpdateAssetPropertyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientToken" }),
        __metadata("design:type", String)
    ], UpdateAssetPropertyRequestBody.prototype, "clientToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propertyAlias" }),
        __metadata("design:type", String)
    ], UpdateAssetPropertyRequestBody.prototype, "propertyAlias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propertyNotificationState" }),
        __metadata("design:type", String)
    ], UpdateAssetPropertyRequestBody.prototype, "propertyNotificationState", void 0);
    return UpdateAssetPropertyRequestBody;
}(SpeakeasyBase));
export { UpdateAssetPropertyRequestBody };
var UpdateAssetPropertyRequest = /** @class */ (function (_super) {
    __extends(UpdateAssetPropertyRequest, _super);
    function UpdateAssetPropertyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAssetPropertyPathParams)
    ], UpdateAssetPropertyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateAssetPropertyHeaders)
    ], UpdateAssetPropertyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateAssetPropertyRequestBody)
    ], UpdateAssetPropertyRequest.prototype, "request", void 0);
    return UpdateAssetPropertyRequest;
}(SpeakeasyBase));
export { UpdateAssetPropertyRequest };
var UpdateAssetPropertyResponse = /** @class */ (function (_super) {
    __extends(UpdateAssetPropertyResponse, _super);
    function UpdateAssetPropertyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssetPropertyResponse.prototype, "conflictingOperationException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateAssetPropertyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssetPropertyResponse.prototype, "internalFailureException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssetPropertyResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssetPropertyResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateAssetPropertyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateAssetPropertyResponse.prototype, "throttlingException", void 0);
    return UpdateAssetPropertyResponse;
}(SpeakeasyBase));
export { UpdateAssetPropertyResponse };
