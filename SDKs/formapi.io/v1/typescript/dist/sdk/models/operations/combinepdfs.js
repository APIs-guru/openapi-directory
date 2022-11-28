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
export var CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum;
(function (CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum) {
    CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum["Submission"] = "submission";
    CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum["CombinedSubmission"] = "combined_submission";
    CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum["Template"] = "template";
    CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum["CustomFile"] = "custom_file";
})(CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum || (CombinePdfsCombinePdfsDataSourcePdfs1TypeEnum = {}));
var CombinePdfsCombinePdfsDataSourcePdfs1 = /** @class */ (function (_super) {
    __extends(CombinePdfsCombinePdfsDataSourcePdfs1, _super);
    function CombinePdfsCombinePdfsDataSourcePdfs1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CombinePdfsCombinePdfsDataSourcePdfs1.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CombinePdfsCombinePdfsDataSourcePdfs1.prototype, "type", void 0);
    return CombinePdfsCombinePdfsDataSourcePdfs1;
}(SpeakeasyBase));
export { CombinePdfsCombinePdfsDataSourcePdfs1 };
export var CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum;
(function (CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum) {
    CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum["Url"] = "url";
})(CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum || (CombinePdfsCombinePdfsDataSourcePdfs2TypeEnum = {}));
var CombinePdfsCombinePdfsDataSourcePdfs2 = /** @class */ (function (_super) {
    __extends(CombinePdfsCombinePdfsDataSourcePdfs2, _super);
    function CombinePdfsCombinePdfsDataSourcePdfs2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CombinePdfsCombinePdfsDataSourcePdfs2.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CombinePdfsCombinePdfsDataSourcePdfs2.prototype, "url", void 0);
    return CombinePdfsCombinePdfsDataSourcePdfs2;
}(SpeakeasyBase));
export { CombinePdfsCombinePdfsDataSourcePdfs2 };
var CombinePdfsCombinePdfsData = /** @class */ (function (_super) {
    __extends(CombinePdfsCombinePdfsData, _super);
    function CombinePdfsCombinePdfsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete_custom_files" }),
        __metadata("design:type", Boolean)
    ], CombinePdfsCombinePdfsData.prototype, "deleteCustomFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_in" }),
        __metadata("design:type", Number)
    ], CombinePdfsCombinePdfsData.prototype, "expiresIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], CombinePdfsCombinePdfsData.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_pdfs" }),
        __metadata("design:type", Array)
    ], CombinePdfsCombinePdfsData.prototype, "sourcePdfs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=test" }),
        __metadata("design:type", Boolean)
    ], CombinePdfsCombinePdfsData.prototype, "test", void 0);
    return CombinePdfsCombinePdfsData;
}(SpeakeasyBase));
export { CombinePdfsCombinePdfsData };
var CombinePdfsSecurity = /** @class */ (function (_super) {
    __extends(CombinePdfsSecurity, _super);
    function CombinePdfsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], CombinePdfsSecurity.prototype, "apiTokenBasic", void 0);
    return CombinePdfsSecurity;
}(SpeakeasyBase));
export { CombinePdfsSecurity };
export var CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum;
(function (CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum) {
    CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum["Submission"] = "submission";
    CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum["CombinedSubmission"] = "combined_submission";
    CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum["Template"] = "template";
    CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum["CustomFile"] = "custom_file";
})(CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum || (CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum = {}));
var CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1 = /** @class */ (function (_super) {
    __extends(CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1, _super);
    function CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1.prototype, "type", void 0);
    return CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1;
}(SpeakeasyBase));
export { CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1 };
export var CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum;
(function (CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum) {
    CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum["Url"] = "url";
})(CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum || (CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum = {}));
var CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2 = /** @class */ (function (_super) {
    __extends(CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2, _super);
    function CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2.prototype, "url", void 0);
    return CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2;
}(SpeakeasyBase));
export { CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2 };
export var CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum;
(function (CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum) {
    CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum["Pending"] = "pending";
    CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum["Processed"] = "processed";
    CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum["Error"] = "error";
})(CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum || (CombinePdfsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum = {}));
var CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission = /** @class */ (function (_super) {
    __extends(CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission, _super);
    function CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.CombinedSubmissionAction }),
        __metadata("design:type", Array)
    ], CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "downloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expired" }),
        __metadata("design:type", Boolean)
    ], CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "expired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", String)
    ], CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_hash" }),
        __metadata("design:type", String)
    ], CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "pdfHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_pdfs" }),
        __metadata("design:type", Array)
    ], CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "sourcePdfs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submission_ids" }),
        __metadata("design:type", Array)
    ], CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission.prototype, "submissionIds", void 0);
    return CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission;
}(SpeakeasyBase));
export { CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission };
export var CombinePdfsCreateCombinedSubmissionResponseStatusEnum;
(function (CombinePdfsCreateCombinedSubmissionResponseStatusEnum) {
    CombinePdfsCreateCombinedSubmissionResponseStatusEnum["Success"] = "success";
    CombinePdfsCreateCombinedSubmissionResponseStatusEnum["Error"] = "error";
})(CombinePdfsCreateCombinedSubmissionResponseStatusEnum || (CombinePdfsCreateCombinedSubmissionResponseStatusEnum = {}));
var CombinePdfsCreateCombinedSubmissionResponse = /** @class */ (function (_super) {
    __extends(CombinePdfsCreateCombinedSubmissionResponse, _super);
    function CombinePdfsCreateCombinedSubmissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combined_submission" }),
        __metadata("design:type", CombinePdfsCreateCombinedSubmissionResponseCombinedSubmission)
    ], CombinePdfsCreateCombinedSubmissionResponse.prototype, "combinedSubmission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], CombinePdfsCreateCombinedSubmissionResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CombinePdfsCreateCombinedSubmissionResponse.prototype, "status", void 0);
    return CombinePdfsCreateCombinedSubmissionResponse;
}(SpeakeasyBase));
export { CombinePdfsCreateCombinedSubmissionResponse };
var CombinePdfsRequest = /** @class */ (function (_super) {
    __extends(CombinePdfsRequest, _super);
    function CombinePdfsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CombinePdfsCombinePdfsData)
    ], CombinePdfsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CombinePdfsSecurity)
    ], CombinePdfsRequest.prototype, "security", void 0);
    return CombinePdfsRequest;
}(SpeakeasyBase));
export { CombinePdfsRequest };
var CombinePdfsResponse = /** @class */ (function (_super) {
    __extends(CombinePdfsResponse, _super);
    function CombinePdfsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CombinePdfsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CombinePdfsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], CombinePdfsResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CombinePdfsCreateCombinedSubmissionResponse)
    ], CombinePdfsResponse.prototype, "createCombinedSubmissionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], CombinePdfsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidRequest)
    ], CombinePdfsResponse.prototype, "invalidRequest", void 0);
    return CombinePdfsResponse;
}(SpeakeasyBase));
export { CombinePdfsResponse };
