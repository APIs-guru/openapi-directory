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
var ExpireCombinedSubmissionPathParams = /** @class */ (function (_super) {
    __extends(ExpireCombinedSubmissionPathParams, _super);
    function ExpireCombinedSubmissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=combined_submission_id" }),
        __metadata("design:type", String)
    ], ExpireCombinedSubmissionPathParams.prototype, "combinedSubmissionId", void 0);
    return ExpireCombinedSubmissionPathParams;
}(SpeakeasyBase));
export { ExpireCombinedSubmissionPathParams };
var ExpireCombinedSubmissionSecurity = /** @class */ (function (_super) {
    __extends(ExpireCombinedSubmissionSecurity, _super);
    function ExpireCombinedSubmissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], ExpireCombinedSubmissionSecurity.prototype, "apiTokenBasic", void 0);
    return ExpireCombinedSubmissionSecurity;
}(SpeakeasyBase));
export { ExpireCombinedSubmissionSecurity };
export var ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum;
(function (ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum) {
    ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum["Submission"] = "submission";
    ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum["CombinedSubmission"] = "combined_submission";
    ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum["Template"] = "template";
    ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum["CustomFile"] = "custom_file";
})(ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum || (ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum = {}));
var ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1 = /** @class */ (function (_super) {
    __extends(ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1, _super);
    function ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1.prototype, "type", void 0);
    return ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1;
}(SpeakeasyBase));
export { ExpireCombinedSubmissionCombinedSubmissionSourcePdfs1 };
export var ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum;
(function (ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum) {
    ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum["Url"] = "url";
})(ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum || (ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum = {}));
var ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2 = /** @class */ (function (_super) {
    __extends(ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2, _super);
    function ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2.prototype, "url", void 0);
    return ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2;
}(SpeakeasyBase));
export { ExpireCombinedSubmissionCombinedSubmissionSourcePdfs2 };
export var ExpireCombinedSubmissionCombinedSubmissionStateEnum;
(function (ExpireCombinedSubmissionCombinedSubmissionStateEnum) {
    ExpireCombinedSubmissionCombinedSubmissionStateEnum["Pending"] = "pending";
    ExpireCombinedSubmissionCombinedSubmissionStateEnum["Processed"] = "processed";
    ExpireCombinedSubmissionCombinedSubmissionStateEnum["Error"] = "error";
})(ExpireCombinedSubmissionCombinedSubmissionStateEnum || (ExpireCombinedSubmissionCombinedSubmissionStateEnum = {}));
var ExpireCombinedSubmissionCombinedSubmission = /** @class */ (function (_super) {
    __extends(ExpireCombinedSubmissionCombinedSubmission, _super);
    function ExpireCombinedSubmissionCombinedSubmission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.CombinedSubmissionAction }),
        __metadata("design:type", Array)
    ], ExpireCombinedSubmissionCombinedSubmission.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], ExpireCombinedSubmissionCombinedSubmission.prototype, "downloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expired" }),
        __metadata("design:type", Boolean)
    ], ExpireCombinedSubmissionCombinedSubmission.prototype, "expired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", String)
    ], ExpireCombinedSubmissionCombinedSubmission.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ExpireCombinedSubmissionCombinedSubmission.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], ExpireCombinedSubmissionCombinedSubmission.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_hash" }),
        __metadata("design:type", String)
    ], ExpireCombinedSubmissionCombinedSubmission.prototype, "pdfHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_pdfs" }),
        __metadata("design:type", Array)
    ], ExpireCombinedSubmissionCombinedSubmission.prototype, "sourcePdfs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ExpireCombinedSubmissionCombinedSubmission.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submission_ids" }),
        __metadata("design:type", Array)
    ], ExpireCombinedSubmissionCombinedSubmission.prototype, "submissionIds", void 0);
    return ExpireCombinedSubmissionCombinedSubmission;
}(SpeakeasyBase));
export { ExpireCombinedSubmissionCombinedSubmission };
var ExpireCombinedSubmissionRequest = /** @class */ (function (_super) {
    __extends(ExpireCombinedSubmissionRequest, _super);
    function ExpireCombinedSubmissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExpireCombinedSubmissionPathParams)
    ], ExpireCombinedSubmissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExpireCombinedSubmissionSecurity)
    ], ExpireCombinedSubmissionRequest.prototype, "security", void 0);
    return ExpireCombinedSubmissionRequest;
}(SpeakeasyBase));
export { ExpireCombinedSubmissionRequest };
var ExpireCombinedSubmissionResponse = /** @class */ (function (_super) {
    __extends(ExpireCombinedSubmissionResponse, _super);
    function ExpireCombinedSubmissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExpireCombinedSubmissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExpireCombinedSubmissionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], ExpireCombinedSubmissionResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExpireCombinedSubmissionCombinedSubmission)
    ], ExpireCombinedSubmissionResponse.prototype, "combinedSubmission", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], ExpireCombinedSubmissionResponse.prototype, "error", void 0);
    return ExpireCombinedSubmissionResponse;
}(SpeakeasyBase));
export { ExpireCombinedSubmissionResponse };
