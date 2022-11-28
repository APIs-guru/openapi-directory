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
var StartSimulationJobBatchHeaders = /** @class */ (function (_super) {
    __extends(StartSimulationJobBatchHeaders, _super);
    function StartSimulationJobBatchHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], StartSimulationJobBatchHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], StartSimulationJobBatchHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], StartSimulationJobBatchHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], StartSimulationJobBatchHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], StartSimulationJobBatchHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], StartSimulationJobBatchHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], StartSimulationJobBatchHeaders.prototype, "xAmzSignedHeaders", void 0);
    return StartSimulationJobBatchHeaders;
}(SpeakeasyBase));
export { StartSimulationJobBatchHeaders };
// StartSimulationJobBatchRequestBodyBatchPolicy
/**
 * Information about the batch policy.
**/
var StartSimulationJobBatchRequestBodyBatchPolicy = /** @class */ (function (_super) {
    __extends(StartSimulationJobBatchRequestBodyBatchPolicy, _super);
    function StartSimulationJobBatchRequestBodyBatchPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxConcurrency" }),
        __metadata("design:type", Number)
    ], StartSimulationJobBatchRequestBodyBatchPolicy.prototype, "maxConcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" }),
        __metadata("design:type", Number)
    ], StartSimulationJobBatchRequestBodyBatchPolicy.prototype, "timeoutInSeconds", void 0);
    return StartSimulationJobBatchRequestBodyBatchPolicy;
}(SpeakeasyBase));
export { StartSimulationJobBatchRequestBodyBatchPolicy };
var StartSimulationJobBatchRequestBody = /** @class */ (function (_super) {
    __extends(StartSimulationJobBatchRequestBody, _super);
    function StartSimulationJobBatchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batchPolicy" }),
        __metadata("design:type", StartSimulationJobBatchRequestBodyBatchPolicy)
    ], StartSimulationJobBatchRequestBody.prototype, "batchPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], StartSimulationJobBatchRequestBody.prototype, "clientRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createSimulationJobRequests", elemType: shared.SimulationJobRequest }),
        __metadata("design:type", Array)
    ], StartSimulationJobBatchRequestBody.prototype, "createSimulationJobRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], StartSimulationJobBatchRequestBody.prototype, "tags", void 0);
    return StartSimulationJobBatchRequestBody;
}(SpeakeasyBase));
export { StartSimulationJobBatchRequestBody };
var StartSimulationJobBatchRequest = /** @class */ (function (_super) {
    __extends(StartSimulationJobBatchRequest, _super);
    function StartSimulationJobBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StartSimulationJobBatchHeaders)
    ], StartSimulationJobBatchRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StartSimulationJobBatchRequestBody)
    ], StartSimulationJobBatchRequest.prototype, "request", void 0);
    return StartSimulationJobBatchRequest;
}(SpeakeasyBase));
export { StartSimulationJobBatchRequest };
var StartSimulationJobBatchResponse = /** @class */ (function (_super) {
    __extends(StartSimulationJobBatchResponse, _super);
    function StartSimulationJobBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StartSimulationJobBatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSimulationJobBatchResponse.prototype, "idempotentParameterMismatchException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSimulationJobBatchResponse.prototype, "internalServerException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSimulationJobBatchResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSimulationJobBatchResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StartSimulationJobBatchResponse)
    ], StartSimulationJobBatchResponse.prototype, "startSimulationJobBatchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StartSimulationJobBatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], StartSimulationJobBatchResponse.prototype, "throttlingException", void 0);
    return StartSimulationJobBatchResponse;
}(SpeakeasyBase));
export { StartSimulationJobBatchResponse };
