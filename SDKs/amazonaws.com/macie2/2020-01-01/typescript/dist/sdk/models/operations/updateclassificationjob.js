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
var UpdateClassificationJobPathParams = /** @class */ (function (_super) {
    __extends(UpdateClassificationJobPathParams, _super);
    function UpdateClassificationJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", String)
    ], UpdateClassificationJobPathParams.prototype, "jobId", void 0);
    return UpdateClassificationJobPathParams;
}(SpeakeasyBase));
export { UpdateClassificationJobPathParams };
var UpdateClassificationJobHeaders = /** @class */ (function (_super) {
    __extends(UpdateClassificationJobHeaders, _super);
    function UpdateClassificationJobHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateClassificationJobHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateClassificationJobHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateClassificationJobHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateClassificationJobHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateClassificationJobHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateClassificationJobHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateClassificationJobHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateClassificationJobHeaders;
}(SpeakeasyBase));
export { UpdateClassificationJobHeaders };
export var UpdateClassificationJobRequestBodyJobStatusEnum;
(function (UpdateClassificationJobRequestBodyJobStatusEnum) {
    UpdateClassificationJobRequestBodyJobStatusEnum["Running"] = "RUNNING";
    UpdateClassificationJobRequestBodyJobStatusEnum["Paused"] = "PAUSED";
    UpdateClassificationJobRequestBodyJobStatusEnum["Cancelled"] = "CANCELLED";
    UpdateClassificationJobRequestBodyJobStatusEnum["Complete"] = "COMPLETE";
    UpdateClassificationJobRequestBodyJobStatusEnum["Idle"] = "IDLE";
    UpdateClassificationJobRequestBodyJobStatusEnum["UserPaused"] = "USER_PAUSED";
})(UpdateClassificationJobRequestBodyJobStatusEnum || (UpdateClassificationJobRequestBodyJobStatusEnum = {}));
var UpdateClassificationJobRequestBody = /** @class */ (function (_super) {
    __extends(UpdateClassificationJobRequestBody, _super);
    function UpdateClassificationJobRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobStatus" }),
        __metadata("design:type", String)
    ], UpdateClassificationJobRequestBody.prototype, "jobStatus", void 0);
    return UpdateClassificationJobRequestBody;
}(SpeakeasyBase));
export { UpdateClassificationJobRequestBody };
var UpdateClassificationJobRequest = /** @class */ (function (_super) {
    __extends(UpdateClassificationJobRequest, _super);
    function UpdateClassificationJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateClassificationJobPathParams)
    ], UpdateClassificationJobRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateClassificationJobHeaders)
    ], UpdateClassificationJobRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateClassificationJobRequestBody)
    ], UpdateClassificationJobRequest.prototype, "request", void 0);
    return UpdateClassificationJobRequest;
}(SpeakeasyBase));
export { UpdateClassificationJobRequest };
var UpdateClassificationJobResponse = /** @class */ (function (_super) {
    __extends(UpdateClassificationJobResponse, _super);
    function UpdateClassificationJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateClassificationJobResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateClassificationJobResponse.prototype, "conflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateClassificationJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateClassificationJobResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateClassificationJobResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateClassificationJobResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateClassificationJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateClassificationJobResponse.prototype, "throttlingException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateClassificationJobResponse.prototype, "updateClassificationJobResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UpdateClassificationJobResponse.prototype, "validationException", void 0);
    return UpdateClassificationJobResponse;
}(SpeakeasyBase));
export { UpdateClassificationJobResponse };
