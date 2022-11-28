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
import { SubmissionAction } from "./submissionaction";
import { SubmissionDataRequest } from "./submissiondatarequest";
export var SubmissionStateEnum;
(function (SubmissionStateEnum) {
    SubmissionStateEnum["Pending"] = "pending";
    SubmissionStateEnum["Processed"] = "processed";
    SubmissionStateEnum["InvalidData"] = "invalid_data";
    SubmissionStateEnum["Error"] = "error";
    SubmissionStateEnum["ImageDownloadFailed"] = "image_download_failed";
    SubmissionStateEnum["ImageProcessingFailed"] = "image_processing_failed";
    SubmissionStateEnum["WaitingForDataRequests"] = "waiting_for_data_requests";
    SubmissionStateEnum["SyntaxError"] = "syntax_error";
    SubmissionStateEnum["AccountSuspended"] = "account_suspended";
    SubmissionStateEnum["LicenseRevoked"] = "license_revoked";
    SubmissionStateEnum["Accidental"] = "accidental";
})(SubmissionStateEnum || (SubmissionStateEnum = {}));
var Submission = /** @class */ (function (_super) {
    __extends(Submission, _super);
    function Submission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: SubmissionAction }),
        __metadata("design:type", Array)
    ], Submission.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=batch_id" }),
        __metadata("design:type", String)
    ], Submission.prototype, "batchId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], Submission.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_requests", elemType: SubmissionDataRequest }),
        __metadata("design:type", Array)
    ], Submission.prototype, "dataRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], Submission.prototype, "downloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editable" }),
        __metadata("design:type", Boolean)
    ], Submission.prototype, "editable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expired" }),
        __metadata("design:type", Boolean)
    ], Submission.prototype, "expired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", String)
    ], Submission.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Submission.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], Submission.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_hash" }),
        __metadata("design:type", String)
    ], Submission.prototype, "pdfHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permanent_download_url" }),
        __metadata("design:type", String)
    ], Submission.prototype, "permanentDownloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processed_at" }),
        __metadata("design:type", String)
    ], Submission.prototype, "processedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referrer" }),
        __metadata("design:type", String)
    ], Submission.prototype, "referrer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], Submission.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Submission.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_id" }),
        __metadata("design:type", String)
    ], Submission.prototype, "templateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=test" }),
        __metadata("design:type", Boolean)
    ], Submission.prototype, "test", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=truncated_text" }),
        __metadata("design:type", Map)
    ], Submission.prototype, "truncatedText", void 0);
    return Submission;
}(SpeakeasyBase));
export { Submission };
