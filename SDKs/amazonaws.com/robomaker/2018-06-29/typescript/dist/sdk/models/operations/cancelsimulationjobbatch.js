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
var CancelSimulationJobBatchHeaders = /** @class */ (function (_super) {
    __extends(CancelSimulationJobBatchHeaders, _super);
    function CancelSimulationJobBatchHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CancelSimulationJobBatchHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CancelSimulationJobBatchHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CancelSimulationJobBatchHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CancelSimulationJobBatchHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CancelSimulationJobBatchHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CancelSimulationJobBatchHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CancelSimulationJobBatchHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CancelSimulationJobBatchHeaders;
}(SpeakeasyBase));
export { CancelSimulationJobBatchHeaders };
var CancelSimulationJobBatchRequestBody = /** @class */ (function (_super) {
    __extends(CancelSimulationJobBatchRequestBody, _super);
    function CancelSimulationJobBatchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batch" }),
        __metadata("design:type", String)
    ], CancelSimulationJobBatchRequestBody.prototype, "batch", void 0);
    return CancelSimulationJobBatchRequestBody;
}(SpeakeasyBase));
export { CancelSimulationJobBatchRequestBody };
var CancelSimulationJobBatchRequest = /** @class */ (function (_super) {
    __extends(CancelSimulationJobBatchRequest, _super);
    function CancelSimulationJobBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CancelSimulationJobBatchHeaders)
    ], CancelSimulationJobBatchRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CancelSimulationJobBatchRequestBody)
    ], CancelSimulationJobBatchRequest.prototype, "request", void 0);
    return CancelSimulationJobBatchRequest;
}(SpeakeasyBase));
export { CancelSimulationJobBatchRequest };
var CancelSimulationJobBatchResponse = /** @class */ (function (_super) {
    __extends(CancelSimulationJobBatchResponse, _super);
    function CancelSimulationJobBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CancelSimulationJobBatchResponse.prototype, "cancelSimulationJobBatchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CancelSimulationJobBatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CancelSimulationJobBatchResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CancelSimulationJobBatchResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CancelSimulationJobBatchResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CancelSimulationJobBatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CancelSimulationJobBatchResponse.prototype, "throttlingException", void 0);
    return CancelSimulationJobBatchResponse;
}(SpeakeasyBase));
export { CancelSimulationJobBatchResponse };
