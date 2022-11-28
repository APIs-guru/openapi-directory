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
var GetCombinedSubmissionPathParams = /** @class */ (function (_super) {
    __extends(GetCombinedSubmissionPathParams, _super);
    function GetCombinedSubmissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=combined_submission_id" }),
        __metadata("design:type", String)
    ], GetCombinedSubmissionPathParams.prototype, "combinedSubmissionId", void 0);
    return GetCombinedSubmissionPathParams;
}(SpeakeasyBase));
export { GetCombinedSubmissionPathParams };
var GetCombinedSubmissionSecurity = /** @class */ (function (_super) {
    __extends(GetCombinedSubmissionSecurity, _super);
    function GetCombinedSubmissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], GetCombinedSubmissionSecurity.prototype, "apiTokenBasic", void 0);
    return GetCombinedSubmissionSecurity;
}(SpeakeasyBase));
export { GetCombinedSubmissionSecurity };
export var GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum;
(function (GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum) {
    GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum["Submission"] = "submission";
    GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum["CombinedSubmission"] = "combined_submission";
    GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum["Template"] = "template";
    GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum["CustomFile"] = "custom_file";
})(GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum || (GetCombinedSubmissionCombinedSubmissionSourcePdfs1TypeEnum = {}));
var GetCombinedSubmissionCombinedSubmissionSourcePdfs1 = /** @class */ (function (_super) {
    __extends(GetCombinedSubmissionCombinedSubmissionSourcePdfs1, _super);
    function GetCombinedSubmissionCombinedSubmissionSourcePdfs1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetCombinedSubmissionCombinedSubmissionSourcePdfs1.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetCombinedSubmissionCombinedSubmissionSourcePdfs1.prototype, "type", void 0);
    return GetCombinedSubmissionCombinedSubmissionSourcePdfs1;
}(SpeakeasyBase));
export { GetCombinedSubmissionCombinedSubmissionSourcePdfs1 };
export var GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum;
(function (GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum) {
    GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum["Url"] = "url";
})(GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum || (GetCombinedSubmissionCombinedSubmissionSourcePdfs2TypeEnum = {}));
var GetCombinedSubmissionCombinedSubmissionSourcePdfs2 = /** @class */ (function (_super) {
    __extends(GetCombinedSubmissionCombinedSubmissionSourcePdfs2, _super);
    function GetCombinedSubmissionCombinedSubmissionSourcePdfs2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetCombinedSubmissionCombinedSubmissionSourcePdfs2.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GetCombinedSubmissionCombinedSubmissionSourcePdfs2.prototype, "url", void 0);
    return GetCombinedSubmissionCombinedSubmissionSourcePdfs2;
}(SpeakeasyBase));
export { GetCombinedSubmissionCombinedSubmissionSourcePdfs2 };
export var GetCombinedSubmissionCombinedSubmissionStateEnum;
(function (GetCombinedSubmissionCombinedSubmissionStateEnum) {
    GetCombinedSubmissionCombinedSubmissionStateEnum["Pending"] = "pending";
    GetCombinedSubmissionCombinedSubmissionStateEnum["Processed"] = "processed";
    GetCombinedSubmissionCombinedSubmissionStateEnum["Error"] = "error";
})(GetCombinedSubmissionCombinedSubmissionStateEnum || (GetCombinedSubmissionCombinedSubmissionStateEnum = {}));
var GetCombinedSubmissionCombinedSubmission = /** @class */ (function (_super) {
    __extends(GetCombinedSubmissionCombinedSubmission, _super);
    function GetCombinedSubmissionCombinedSubmission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.CombinedSubmissionAction }),
        __metadata("design:type", Array)
    ], GetCombinedSubmissionCombinedSubmission.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=download_url" }),
        __metadata("design:type", String)
    ], GetCombinedSubmissionCombinedSubmission.prototype, "downloadUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expired" }),
        __metadata("design:type", Boolean)
    ], GetCombinedSubmissionCombinedSubmission.prototype, "expired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", String)
    ], GetCombinedSubmissionCombinedSubmission.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetCombinedSubmissionCombinedSubmission.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], GetCombinedSubmissionCombinedSubmission.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_hash" }),
        __metadata("design:type", String)
    ], GetCombinedSubmissionCombinedSubmission.prototype, "pdfHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_pdfs" }),
        __metadata("design:type", Array)
    ], GetCombinedSubmissionCombinedSubmission.prototype, "sourcePdfs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GetCombinedSubmissionCombinedSubmission.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submission_ids" }),
        __metadata("design:type", Array)
    ], GetCombinedSubmissionCombinedSubmission.prototype, "submissionIds", void 0);
    return GetCombinedSubmissionCombinedSubmission;
}(SpeakeasyBase));
export { GetCombinedSubmissionCombinedSubmission };
var GetCombinedSubmissionRequest = /** @class */ (function (_super) {
    __extends(GetCombinedSubmissionRequest, _super);
    function GetCombinedSubmissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCombinedSubmissionPathParams)
    ], GetCombinedSubmissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCombinedSubmissionSecurity)
    ], GetCombinedSubmissionRequest.prototype, "security", void 0);
    return GetCombinedSubmissionRequest;
}(SpeakeasyBase));
export { GetCombinedSubmissionRequest };
var GetCombinedSubmissionResponse = /** @class */ (function (_super) {
    __extends(GetCombinedSubmissionResponse, _super);
    function GetCombinedSubmissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCombinedSubmissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCombinedSubmissionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], GetCombinedSubmissionResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCombinedSubmissionCombinedSubmission)
    ], GetCombinedSubmissionResponse.prototype, "combinedSubmission", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetCombinedSubmissionResponse.prototype, "error", void 0);
    return GetCombinedSubmissionResponse;
}(SpeakeasyBase));
export { GetCombinedSubmissionResponse };
