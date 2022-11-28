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
var ImportProjectChoices = /** @class */ (function (_super) {
    __extends(ImportProjectChoices, _super);
    function ImportProjectChoices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=human_name" }),
        __metadata("design:type", String)
    ], ImportProjectChoices.prototype, "humanName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tfvc_project" }),
        __metadata("design:type", String)
    ], ImportProjectChoices.prototype, "tfvcProject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vcs" }),
        __metadata("design:type", String)
    ], ImportProjectChoices.prototype, "vcs", void 0);
    return ImportProjectChoices;
}(SpeakeasyBase));
export { ImportProjectChoices };
export var ImportStatusEnum;
(function (ImportStatusEnum) {
    ImportStatusEnum["Auth"] = "auth";
    ImportStatusEnum["Error"] = "error";
    ImportStatusEnum["None"] = "none";
    ImportStatusEnum["Detecting"] = "detecting";
    ImportStatusEnum["Choose"] = "choose";
    ImportStatusEnum["AuthFailed"] = "auth_failed";
    ImportStatusEnum["Importing"] = "importing";
    ImportStatusEnum["Mapping"] = "mapping";
    ImportStatusEnum["WaitingToPush"] = "waiting_to_push";
    ImportStatusEnum["Pushing"] = "pushing";
    ImportStatusEnum["Complete"] = "complete";
    ImportStatusEnum["Setup"] = "setup";
    ImportStatusEnum["Unknown"] = "unknown";
    ImportStatusEnum["DetectionFoundMultiple"] = "detection_found_multiple";
    ImportStatusEnum["DetectionFoundNothing"] = "detection_found_nothing";
    ImportStatusEnum["DetectionNeedsAuth"] = "detection_needs_auth";
})(ImportStatusEnum || (ImportStatusEnum = {}));
// Import
/**
 * A repository import from an external source.
**/
var Import = /** @class */ (function (_super) {
    __extends(Import, _super);
    function Import() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authors_count" }),
        __metadata("design:type", Number)
    ], Import.prototype, "authorsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authors_url" }),
        __metadata("design:type", String)
    ], Import.prototype, "authorsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_count" }),
        __metadata("design:type", Number)
    ], Import.prototype, "commitCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error_message" }),
        __metadata("design:type", String)
    ], Import.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failed_step" }),
        __metadata("design:type", String)
    ], Import.prototype, "failedStep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_large_files" }),
        __metadata("design:type", Boolean)
    ], Import.prototype, "hasLargeFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], Import.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=import_percent" }),
        __metadata("design:type", Number)
    ], Import.prototype, "importPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=large_files_count" }),
        __metadata("design:type", Number)
    ], Import.prototype, "largeFilesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=large_files_size" }),
        __metadata("design:type", Number)
    ], Import.prototype, "largeFilesSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Import.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=project_choices", elemType: ImportProjectChoices }),
        __metadata("design:type", Array)
    ], Import.prototype, "projectChoices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=push_percent" }),
        __metadata("design:type", Number)
    ], Import.prototype, "pushPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repository_url" }),
        __metadata("design:type", String)
    ], Import.prototype, "repositoryUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Import.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_text" }),
        __metadata("design:type", String)
    ], Import.prototype, "statusText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svc_root" }),
        __metadata("design:type", String)
    ], Import.prototype, "svcRoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=svn_root" }),
        __metadata("design:type", String)
    ], Import.prototype, "svnRoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tfvc_project" }),
        __metadata("design:type", String)
    ], Import.prototype, "tfvcProject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], Import.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_lfs" }),
        __metadata("design:type", String)
    ], Import.prototype, "useLfs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vcs" }),
        __metadata("design:type", String)
    ], Import.prototype, "vcs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vcs_url" }),
        __metadata("design:type", String)
    ], Import.prototype, "vcsUrl", void 0);
    return Import;
}(SpeakeasyBase));
export { Import };
