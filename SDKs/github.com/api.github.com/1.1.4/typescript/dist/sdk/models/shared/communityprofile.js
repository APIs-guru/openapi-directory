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
var CommunityProfileFilesCodeOfConductSimple = /** @class */ (function (_super) {
    __extends(CommunityProfileFilesCodeOfConductSimple, _super);
    function CommunityProfileFilesCodeOfConductSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], CommunityProfileFilesCodeOfConductSimple.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], CommunityProfileFilesCodeOfConductSimple.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CommunityProfileFilesCodeOfConductSimple.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommunityProfileFilesCodeOfConductSimple.prototype, "url", void 0);
    return CommunityProfileFilesCodeOfConductSimple;
}(SpeakeasyBase));
export { CommunityProfileFilesCodeOfConductSimple };
var CommunityProfileFilesCommunityHealthFile = /** @class */ (function (_super) {
    __extends(CommunityProfileFilesCommunityHealthFile, _super);
    function CommunityProfileFilesCommunityHealthFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], CommunityProfileFilesCommunityHealthFile.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommunityProfileFilesCommunityHealthFile.prototype, "url", void 0);
    return CommunityProfileFilesCommunityHealthFile;
}(SpeakeasyBase));
export { CommunityProfileFilesCommunityHealthFile };
var CommunityProfileFilesLicenseSimple = /** @class */ (function (_super) {
    __extends(CommunityProfileFilesLicenseSimple, _super);
    function CommunityProfileFilesLicenseSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html_url" }),
        __metadata("design:type", String)
    ], CommunityProfileFilesLicenseSimple.prototype, "htmlUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], CommunityProfileFilesLicenseSimple.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CommunityProfileFilesLicenseSimple.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=node_id" }),
        __metadata("design:type", String)
    ], CommunityProfileFilesLicenseSimple.prototype, "nodeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spdx_id" }),
        __metadata("design:type", String)
    ], CommunityProfileFilesLicenseSimple.prototype, "spdxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CommunityProfileFilesLicenseSimple.prototype, "url", void 0);
    return CommunityProfileFilesLicenseSimple;
}(SpeakeasyBase));
export { CommunityProfileFilesLicenseSimple };
var CommunityProfileFiles = /** @class */ (function (_super) {
    __extends(CommunityProfileFiles, _super);
    function CommunityProfileFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code_of_conduct" }),
        __metadata("design:type", CommunityProfileFilesCodeOfConductSimple)
    ], CommunityProfileFiles.prototype, "codeOfConduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contributing" }),
        __metadata("design:type", CommunityProfileFilesCommunityHealthFile)
    ], CommunityProfileFiles.prototype, "contributing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issue_template" }),
        __metadata("design:type", CommunityProfileFilesCommunityHealthFile)
    ], CommunityProfileFiles.prototype, "issueTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", CommunityProfileFilesLicenseSimple)
    ], CommunityProfileFiles.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pull_request_template" }),
        __metadata("design:type", CommunityProfileFilesCommunityHealthFile)
    ], CommunityProfileFiles.prototype, "pullRequestTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readme" }),
        __metadata("design:type", CommunityProfileFilesCommunityHealthFile)
    ], CommunityProfileFiles.prototype, "readme", void 0);
    return CommunityProfileFiles;
}(SpeakeasyBase));
export { CommunityProfileFiles };
// CommunityProfile
/**
 * Community Profile
**/
var CommunityProfile = /** @class */ (function (_super) {
    __extends(CommunityProfile, _super);
    function CommunityProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content_reports_enabled" }),
        __metadata("design:type", Boolean)
    ], CommunityProfile.prototype, "contentReportsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CommunityProfile.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation" }),
        __metadata("design:type", String)
    ], CommunityProfile.prototype, "documentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=files" }),
        __metadata("design:type", CommunityProfileFiles)
    ], CommunityProfile.prototype, "files", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_percentage" }),
        __metadata("design:type", Number)
    ], CommunityProfile.prototype, "healthPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], CommunityProfile.prototype, "updatedAt", void 0);
    return CommunityProfile;
}(SpeakeasyBase));
export { CommunityProfile };
