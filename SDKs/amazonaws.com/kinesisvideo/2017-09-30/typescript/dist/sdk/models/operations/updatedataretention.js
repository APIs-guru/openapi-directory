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
var UpdateDataRetentionHeaders = /** @class */ (function (_super) {
    __extends(UpdateDataRetentionHeaders, _super);
    function UpdateDataRetentionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateDataRetentionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateDataRetentionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateDataRetentionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateDataRetentionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateDataRetentionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateDataRetentionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateDataRetentionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateDataRetentionHeaders;
}(SpeakeasyBase));
export { UpdateDataRetentionHeaders };
export var UpdateDataRetentionRequestBodyOperationEnum;
(function (UpdateDataRetentionRequestBodyOperationEnum) {
    UpdateDataRetentionRequestBodyOperationEnum["IncreaseDataRetention"] = "INCREASE_DATA_RETENTION";
    UpdateDataRetentionRequestBodyOperationEnum["DecreaseDataRetention"] = "DECREASE_DATA_RETENTION";
})(UpdateDataRetentionRequestBodyOperationEnum || (UpdateDataRetentionRequestBodyOperationEnum = {}));
var UpdateDataRetentionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDataRetentionRequestBody, _super);
    function UpdateDataRetentionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=CurrentVersion" }),
        __metadata("design:type", String)
    ], UpdateDataRetentionRequestBody.prototype, "currentVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=DataRetentionChangeInHours" }),
        __metadata("design:type", Number)
    ], UpdateDataRetentionRequestBody.prototype, "dataRetentionChangeInHours", void 0);
    __decorate([
        Metadata({ data: "json, name=Operation" }),
        __metadata("design:type", String)
    ], UpdateDataRetentionRequestBody.prototype, "operation", void 0);
    __decorate([
        Metadata({ data: "json, name=StreamARN" }),
        __metadata("design:type", String)
    ], UpdateDataRetentionRequestBody.prototype, "streamArn", void 0);
    __decorate([
        Metadata({ data: "json, name=StreamName" }),
        __metadata("design:type", String)
    ], UpdateDataRetentionRequestBody.prototype, "streamName", void 0);
    return UpdateDataRetentionRequestBody;
}(SpeakeasyBase));
export { UpdateDataRetentionRequestBody };
var UpdateDataRetentionRequest = /** @class */ (function (_super) {
    __extends(UpdateDataRetentionRequest, _super);
    function UpdateDataRetentionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateDataRetentionHeaders)
    ], UpdateDataRetentionRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDataRetentionRequestBody)
    ], UpdateDataRetentionRequest.prototype, "request", void 0);
    return UpdateDataRetentionRequest;
}(SpeakeasyBase));
export { UpdateDataRetentionRequest };
var UpdateDataRetentionResponse = /** @class */ (function (_super) {
    __extends(UpdateDataRetentionResponse, _super);
    function UpdateDataRetentionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDataRetentionResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateDataRetentionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDataRetentionResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDataRetentionResponse.prototype, "notAuthorizedException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDataRetentionResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDataRetentionResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateDataRetentionResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], UpdateDataRetentionResponse.prototype, "updateDataRetentionOutput", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], UpdateDataRetentionResponse.prototype, "versionMismatchException", void 0);
    return UpdateDataRetentionResponse;
}(SpeakeasyBase));
export { UpdateDataRetentionResponse };
