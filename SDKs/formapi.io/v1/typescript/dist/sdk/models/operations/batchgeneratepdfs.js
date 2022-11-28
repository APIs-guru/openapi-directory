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
var BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest = /** @class */ (function (_super) {
    __extends(BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest, _super);
    function BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=css" }),
        __metadata("design:type", String)
    ], BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest.prototype, "css", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_id" }),
        __metadata("design:type", String)
    ], BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest.prototype, "templateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=test" }),
        __metadata("design:type", Boolean)
    ], BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest.prototype, "test", void 0);
    return BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest;
}(SpeakeasyBase));
export { BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest };
var BatchGeneratePdfsSubmissionBatchData = /** @class */ (function (_super) {
    __extends(BatchGeneratePdfsSubmissionBatchData, _super);
    function BatchGeneratePdfsSubmissionBatchData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], BatchGeneratePdfsSubmissionBatchData.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submissions", elemType: BatchGeneratePdfsSubmissionBatchDataSubmissionDataBatchRequest }),
        __metadata("design:type", Array)
    ], BatchGeneratePdfsSubmissionBatchData.prototype, "submissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_id" }),
        __metadata("design:type", String)
    ], BatchGeneratePdfsSubmissionBatchData.prototype, "templateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=test" }),
        __metadata("design:type", Boolean)
    ], BatchGeneratePdfsSubmissionBatchData.prototype, "test", void 0);
    return BatchGeneratePdfsSubmissionBatchData;
}(SpeakeasyBase));
export { BatchGeneratePdfsSubmissionBatchData };
var BatchGeneratePdfsSecurity = /** @class */ (function (_super) {
    __extends(BatchGeneratePdfsSecurity, _super);
    function BatchGeneratePdfsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], BatchGeneratePdfsSecurity.prototype, "apiTokenBasic", void 0);
    return BatchGeneratePdfsSecurity;
}(SpeakeasyBase));
export { BatchGeneratePdfsSecurity };
export var BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum;
(function (BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum) {
    BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum["Success"] = "success";
    BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum["Error"] = "error";
})(BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum || (BatchGeneratePdfsCreateSubmissionBatchResponseStatusEnum = {}));
export var BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum;
(function (BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum) {
    BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum["Pending"] = "pending";
    BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum["Processed"] = "processed";
    BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum["Error"] = "error";
})(BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum || (BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatchStateEnum = {}));
var BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch = /** @class */ (function (_super) {
    __extends(BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch, _super);
    function BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completion_percentage" }),
        __metadata("design:type", Number)
    ], BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch.prototype, "completionPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_count" }),
        __metadata("design:type", Number)
    ], BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch.prototype, "errorCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pending_count" }),
        __metadata("design:type", Number)
    ], BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch.prototype, "pendingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processed_at" }),
        __metadata("design:type", String)
    ], BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch.prototype, "processedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submissions", elemType: shared.Submission }),
        __metadata("design:type", Array)
    ], BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch.prototype, "submissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch.prototype, "totalCount", void 0);
    return BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch;
}(SpeakeasyBase));
export { BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch };
export var BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum;
(function (BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum) {
    BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum["Success"] = "success";
    BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum["Error"] = "error";
    BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum["ValidButNotSaved"] = "valid_but_not_saved";
})(BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum || (BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponseStatusEnum = {}));
var BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse = /** @class */ (function (_super) {
    __extends(BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse, _super);
    function BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submission" }),
        __metadata("design:type", shared.Submission)
    ], BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse.prototype, "submission", void 0);
    return BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse;
}(SpeakeasyBase));
export { BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse };
var BatchGeneratePdfsCreateSubmissionBatchResponse = /** @class */ (function (_super) {
    __extends(BatchGeneratePdfsCreateSubmissionBatchResponse, _super);
    function BatchGeneratePdfsCreateSubmissionBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], BatchGeneratePdfsCreateSubmissionBatchResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], BatchGeneratePdfsCreateSubmissionBatchResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], BatchGeneratePdfsCreateSubmissionBatchResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submission_batch" }),
        __metadata("design:type", BatchGeneratePdfsCreateSubmissionBatchResponseSubmissionBatch)
    ], BatchGeneratePdfsCreateSubmissionBatchResponse.prototype, "submissionBatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submissions", elemType: BatchGeneratePdfsCreateSubmissionBatchResponseCreateSubmissionBatchSubmissionsResponse }),
        __metadata("design:type", Array)
    ], BatchGeneratePdfsCreateSubmissionBatchResponse.prototype, "submissions", void 0);
    return BatchGeneratePdfsCreateSubmissionBatchResponse;
}(SpeakeasyBase));
export { BatchGeneratePdfsCreateSubmissionBatchResponse };
var BatchGeneratePdfsRequest = /** @class */ (function (_super) {
    __extends(BatchGeneratePdfsRequest, _super);
    function BatchGeneratePdfsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BatchGeneratePdfsSubmissionBatchData)
    ], BatchGeneratePdfsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchGeneratePdfsSecurity)
    ], BatchGeneratePdfsRequest.prototype, "security", void 0);
    return BatchGeneratePdfsRequest;
}(SpeakeasyBase));
export { BatchGeneratePdfsRequest };
var BatchGeneratePdfsResponse = /** @class */ (function (_super) {
    __extends(BatchGeneratePdfsResponse, _super);
    function BatchGeneratePdfsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BatchGeneratePdfsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BatchGeneratePdfsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], BatchGeneratePdfsResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BatchGeneratePdfsCreateSubmissionBatchResponse)
    ], BatchGeneratePdfsResponse.prototype, "createSubmissionBatchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], BatchGeneratePdfsResponse.prototype, "error", void 0);
    return BatchGeneratePdfsResponse;
}(SpeakeasyBase));
export { BatchGeneratePdfsResponse };
