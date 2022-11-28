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
var GetSubmissionBatchPathParams = /** @class */ (function (_super) {
    __extends(GetSubmissionBatchPathParams, _super);
    function GetSubmissionBatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=submission_batch_id" }),
        __metadata("design:type", String)
    ], GetSubmissionBatchPathParams.prototype, "submissionBatchId", void 0);
    return GetSubmissionBatchPathParams;
}(SpeakeasyBase));
export { GetSubmissionBatchPathParams };
var GetSubmissionBatchQueryParams = /** @class */ (function (_super) {
    __extends(GetSubmissionBatchQueryParams, _super);
    function GetSubmissionBatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_submissions" }),
        __metadata("design:type", Boolean)
    ], GetSubmissionBatchQueryParams.prototype, "includeSubmissions", void 0);
    return GetSubmissionBatchQueryParams;
}(SpeakeasyBase));
export { GetSubmissionBatchQueryParams };
var GetSubmissionBatchSecurity = /** @class */ (function (_super) {
    __extends(GetSubmissionBatchSecurity, _super);
    function GetSubmissionBatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], GetSubmissionBatchSecurity.prototype, "apiTokenBasic", void 0);
    return GetSubmissionBatchSecurity;
}(SpeakeasyBase));
export { GetSubmissionBatchSecurity };
export var GetSubmissionBatchSubmissionBatchStateEnum;
(function (GetSubmissionBatchSubmissionBatchStateEnum) {
    GetSubmissionBatchSubmissionBatchStateEnum["Pending"] = "pending";
    GetSubmissionBatchSubmissionBatchStateEnum["Processed"] = "processed";
    GetSubmissionBatchSubmissionBatchStateEnum["Error"] = "error";
})(GetSubmissionBatchSubmissionBatchStateEnum || (GetSubmissionBatchSubmissionBatchStateEnum = {}));
var GetSubmissionBatchSubmissionBatch = /** @class */ (function (_super) {
    __extends(GetSubmissionBatchSubmissionBatch, _super);
    function GetSubmissionBatchSubmissionBatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completion_percentage" }),
        __metadata("design:type", Number)
    ], GetSubmissionBatchSubmissionBatch.prototype, "completionPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_count" }),
        __metadata("design:type", Number)
    ], GetSubmissionBatchSubmissionBatch.prototype, "errorCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetSubmissionBatchSubmissionBatch.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], GetSubmissionBatchSubmissionBatch.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pending_count" }),
        __metadata("design:type", Number)
    ], GetSubmissionBatchSubmissionBatch.prototype, "pendingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processed_at" }),
        __metadata("design:type", String)
    ], GetSubmissionBatchSubmissionBatch.prototype, "processedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GetSubmissionBatchSubmissionBatch.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submissions", elemType: shared.Submission }),
        __metadata("design:type", Array)
    ], GetSubmissionBatchSubmissionBatch.prototype, "submissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_count" }),
        __metadata("design:type", Number)
    ], GetSubmissionBatchSubmissionBatch.prototype, "totalCount", void 0);
    return GetSubmissionBatchSubmissionBatch;
}(SpeakeasyBase));
export { GetSubmissionBatchSubmissionBatch };
var GetSubmissionBatchRequest = /** @class */ (function (_super) {
    __extends(GetSubmissionBatchRequest, _super);
    function GetSubmissionBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubmissionBatchPathParams)
    ], GetSubmissionBatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubmissionBatchQueryParams)
    ], GetSubmissionBatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubmissionBatchSecurity)
    ], GetSubmissionBatchRequest.prototype, "security", void 0);
    return GetSubmissionBatchRequest;
}(SpeakeasyBase));
export { GetSubmissionBatchRequest };
var GetSubmissionBatchResponse = /** @class */ (function (_super) {
    __extends(GetSubmissionBatchResponse, _super);
    function GetSubmissionBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSubmissionBatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSubmissionBatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], GetSubmissionBatchResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetSubmissionBatchResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubmissionBatchSubmissionBatch)
    ], GetSubmissionBatchResponse.prototype, "submissionBatch", void 0);
    return GetSubmissionBatchResponse;
}(SpeakeasyBase));
export { GetSubmissionBatchResponse };
