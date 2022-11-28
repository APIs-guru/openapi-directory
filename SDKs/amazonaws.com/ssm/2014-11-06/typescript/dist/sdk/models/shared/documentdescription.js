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
import { AttachmentInformation } from "./attachmentinformation";
import { DocumentFormatEnum } from "./documentformatenum";
import { DocumentTypeEnum } from "./documenttypeenum";
import { DocumentHashTypeEnum } from "./documenthashtypeenum";
import { DocumentParameter } from "./documentparameter";
import { DocumentRequires } from "./documentrequires";
import { ReviewInformation } from "./reviewinformation";
import { ReviewStatusEnum } from "./reviewstatusenum";
import { DocumentStatusEnum } from "./documentstatusenum";
import { Tag } from "./tag";
// DocumentDescription
/**
 * Describes a Amazon Web Services Systems Manager document (SSM document).
**/
var DocumentDescription = /** @class */ (function (_super) {
    __extends(DocumentDescription, _super);
    function DocumentDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApprovedVersion" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "approvedVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttachmentsInformation", elemType: AttachmentInformation }),
        __metadata("design:type", Array)
    ], DocumentDescription.prototype, "attachmentsInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Author" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Date)
    ], DocumentDescription.prototype, "createdDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultVersion" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "defaultVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DisplayName" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentFormat" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "documentFormat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentType" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "documentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DocumentVersion" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "documentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Hash" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HashType" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "hashType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LatestVersion" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "latestVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Owner" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Parameters", elemType: DocumentParameter }),
        __metadata("design:type", Array)
    ], DocumentDescription.prototype, "parameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PendingReviewVersion" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "pendingReviewVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PlatformTypes" }),
        __metadata("design:type", Array)
    ], DocumentDescription.prototype, "platformTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Requires", elemType: DocumentRequires }),
        __metadata("design:type", Array)
    ], DocumentDescription.prototype, "requires", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReviewInformation", elemType: ReviewInformation }),
        __metadata("design:type", Array)
    ], DocumentDescription.prototype, "reviewInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReviewStatus" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "reviewStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemaVersion" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "schemaVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Sha1" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "sha1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusInformation" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "statusInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], DocumentDescription.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetType" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "targetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VersionName" }),
        __metadata("design:type", String)
    ], DocumentDescription.prototype, "versionName", void 0);
    return DocumentDescription;
}(SpeakeasyBase));
export { DocumentDescription };
