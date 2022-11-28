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
var CombineSubmissionsCombinedSubmissionData = /** @class */ (function (_super) {
    __extends(CombineSubmissionsCombinedSubmissionData, _super);
    function CombineSubmissionsCombinedSubmissionData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_in" }),
        __metadata("design:type", Number)
    ], CombineSubmissionsCombinedSubmissionData.prototype, "expiresIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], CombineSubmissionsCombinedSubmissionData.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submission_ids" }),
        __metadata("design:type", Array)
    ], CombineSubmissionsCombinedSubmissionData.prototype, "submissionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=test" }),
        __metadata("design:type", Boolean)
    ], CombineSubmissionsCombinedSubmissionData.prototype, "test", void 0);
    return CombineSubmissionsCombinedSubmissionData;
}(SpeakeasyBase));
export { CombineSubmissionsCombinedSubmissionData };
var CombineSubmissionsSecurity = /** @class */ (function (_super) {
    __extends(CombineSubmissionsSecurity, _super);
    function CombineSubmissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], CombineSubmissionsSecurity.prototype, "apiTokenBasic", void 0);
    return CombineSubmissionsSecurity;
}(SpeakeasyBase));
export { CombineSubmissionsSecurity };
export var CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum;
(function (CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum) {
    CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum["Submission"] = "submission";
    CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum["CombinedSubmission"] = "combined_submission";
    CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum["Template"] = "template";
    CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum["CustomFile"] = "custom_file";
})(CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum || (CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum = {}));
var CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1 = /** @class */ (function (_super) {
    __extends(CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1, _super);
    function CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1.prototype, "type", void 0);
    return CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1;
}(SpeakeasyBase));
export { CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1 };
export var CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum;
(function (CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum) {
    CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum["Url"] = "url";
})(CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum || (CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum = {}));
var CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2 = /** @class */ (function (_super) {
    __extends(CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2, _super);
    function CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2.prototype, "url", void 0);
    return CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2;
}(SpeakeasyBase));
export { CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2 };
export var CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum;
(function (CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum) {
    CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum["Pending"] = "pending";
    CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum["Processed"] = "processed";
    CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum["Error"] = "error";
})(CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum || (CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum = {}));
var CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission = /** @class */ (function (_super) {
    __extends(CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission, _super);
    function CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.CombinedSubmissionAction }),
        __metadata("design:type", Array)
    ], CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "downloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expired" }),
        __metadata("design:type", Boolean)
    ], CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "expired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", String)
    ], CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_hash" }),
        __metadata("design:type", String)
    ], CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "pdfHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_pdfs" }),
        __metadata("design:type", Array)
    ], CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "sourcePdfs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submission_ids" }),
        __metadata("design:type", Array)
    ], CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "submissionIds", void 0);
    return CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission;
}(SpeakeasyBase));
export { CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission };
export var CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum;
(function (CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum) {
    CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum["Success"] = "success";
    CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum["Error"] = "error";
})(CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum || (CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum = {}));
var CombineSubmissionsCreateCombinedSubmissionResponse = /** @class */ (function (_super) {
    __extends(CombineSubmissionsCreateCombinedSubmissionResponse, _super);
    function CombineSubmissionsCreateCombinedSubmissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combined_submission" }),
        __metadata("design:type", CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission)
    ], CombineSubmissionsCreateCombinedSubmissionResponse.prototype, "combinedSubmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], CombineSubmissionsCreateCombinedSubmissionResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CombineSubmissionsCreateCombinedSubmissionResponse.prototype, "status", void 0);
    return CombineSubmissionsCreateCombinedSubmissionResponse;
}(SpeakeasyBase));
export { CombineSubmissionsCreateCombinedSubmissionResponse };
var CombineSubmissionsRequest = /** @class */ (function (_super) {
    __extends(CombineSubmissionsRequest, _super);
    function CombineSubmissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CombineSubmissionsCombinedSubmissionData)
    ], CombineSubmissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CombineSubmissionsSecurity)
    ], CombineSubmissionsRequest.prototype, "security", void 0);
    return CombineSubmissionsRequest;
}(SpeakeasyBase));
export { CombineSubmissionsRequest };
var CombineSubmissionsResponse = /** @class */ (function (_super) {
    __extends(CombineSubmissionsResponse, _super);
    function CombineSubmissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CombineSubmissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CombineSubmissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], CombineSubmissionsResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CombineSubmissionsCreateCombinedSubmissionResponse)
    ], CombineSubmissionsResponse.prototype, "createCombinedSubmissionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], CombineSubmissionsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidRequest)
    ], CombineSubmissionsResponse.prototype, "invalidRequest", void 0);
    return CombineSubmissionsResponse;
}(SpeakeasyBase));
export { CombineSubmissionsResponse };
