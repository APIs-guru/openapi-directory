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
import { MailboxExportJobStateEnum } from "./mailboxexportjobstateenum";
// MailboxExportJob
/**
 * The details of a mailbox export job, including the user or resource ID associated with the mailbox and the S3 bucket that the mailbox contents are exported to.
**/
var MailboxExportJob = /** @class */ (function (_super) {
    __extends(MailboxExportJob, _super);
    function MailboxExportJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], MailboxExportJob.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], MailboxExportJob.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EntityId" }),
        __metadata("design:type", String)
    ], MailboxExportJob.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EstimatedProgress" }),
        __metadata("design:type", Number)
    ], MailboxExportJob.prototype, "estimatedProgress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=JobId" }),
        __metadata("design:type", String)
    ], MailboxExportJob.prototype, "jobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3BucketName" }),
        __metadata("design:type", String)
    ], MailboxExportJob.prototype, "s3BucketName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Path" }),
        __metadata("design:type", String)
    ], MailboxExportJob.prototype, "s3Path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], MailboxExportJob.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], MailboxExportJob.prototype, "state", void 0);
    return MailboxExportJob;
}(SpeakeasyBase));
export { MailboxExportJob };
