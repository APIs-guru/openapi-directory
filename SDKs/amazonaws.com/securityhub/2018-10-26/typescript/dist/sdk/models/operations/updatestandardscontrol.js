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
var UpdateStandardsControlPathParams = /** @class */ (function (_super) {
    __extends(UpdateStandardsControlPathParams, _super);
    function UpdateStandardsControlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=StandardsControlArn" }),
        __metadata("design:type", String)
    ], UpdateStandardsControlPathParams.prototype, "standardsControlArn", void 0);
    return UpdateStandardsControlPathParams;
}(SpeakeasyBase));
export { UpdateStandardsControlPathParams };
var UpdateStandardsControlHeaders = /** @class */ (function (_super) {
    __extends(UpdateStandardsControlHeaders, _super);
    function UpdateStandardsControlHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateStandardsControlHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateStandardsControlHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateStandardsControlHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateStandardsControlHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateStandardsControlHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateStandardsControlHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateStandardsControlHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateStandardsControlHeaders;
}(SpeakeasyBase));
export { UpdateStandardsControlHeaders };
export var UpdateStandardsControlRequestBodyControlStatusEnum;
(function (UpdateStandardsControlRequestBodyControlStatusEnum) {
    UpdateStandardsControlRequestBodyControlStatusEnum["Enabled"] = "ENABLED";
    UpdateStandardsControlRequestBodyControlStatusEnum["Disabled"] = "DISABLED";
})(UpdateStandardsControlRequestBodyControlStatusEnum || (UpdateStandardsControlRequestBodyControlStatusEnum = {}));
var UpdateStandardsControlRequestBody = /** @class */ (function (_super) {
    __extends(UpdateStandardsControlRequestBody, _super);
    function UpdateStandardsControlRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ControlStatus" }),
        __metadata("design:type", String)
    ], UpdateStandardsControlRequestBody.prototype, "controlStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisabledReason" }),
        __metadata("design:type", String)
    ], UpdateStandardsControlRequestBody.prototype, "disabledReason", void 0);
    return UpdateStandardsControlRequestBody;
}(SpeakeasyBase));
export { UpdateStandardsControlRequestBody };
var UpdateStandardsControlRequest = /** @class */ (function (_super) {
    __extends(UpdateStandardsControlRequest, _super);
    function UpdateStandardsControlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateStandardsControlPathParams)
    ], UpdateStandardsControlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateStandardsControlHeaders)
    ], UpdateStandardsControlRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateStandardsControlRequestBody)
    ], UpdateStandardsControlRequest.prototype, "request", void 0);
    return UpdateStandardsControlRequest;
}(SpeakeasyBase));
export { UpdateStandardsControlRequest };
var UpdateStandardsControlResponse = /** @class */ (function (_super) {
    __extends(UpdateStandardsControlResponse, _super);
    function UpdateStandardsControlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateStandardsControlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStandardsControlResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStandardsControlResponse.prototype, "invalidAccessException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStandardsControlResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateStandardsControlResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateStandardsControlResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateStandardsControlResponse.prototype, "updateStandardsControlResponse", void 0);
    return UpdateStandardsControlResponse;
}(SpeakeasyBase));
export { UpdateStandardsControlResponse };
