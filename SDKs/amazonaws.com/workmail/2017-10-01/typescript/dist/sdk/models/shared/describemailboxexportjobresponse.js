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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MailboxExportJobStateEnum } from "./mailboxexportjobstateenum";
var DescribeMailboxExportJobResponse = /** @class */ (function (_super) {
    __extends(DescribeMailboxExportJobResponse, _super);
    function DescribeMailboxExportJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], DescribeMailboxExportJobResponse.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], DescribeMailboxExportJobResponse.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "json, name=EntityId" }),
        __metadata("design:type", String)
    ], DescribeMailboxExportJobResponse.prototype, "entityId", void 0);
    __decorate([
        Metadata({ data: "json, name=ErrorInfo" }),
        __metadata("design:type", String)
    ], DescribeMailboxExportJobResponse.prototype, "errorInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=EstimatedProgress" }),
        __metadata("design:type", Number)
    ], DescribeMailboxExportJobResponse.prototype, "estimatedProgress", void 0);
    __decorate([
        Metadata({ data: "json, name=KmsKeyArn" }),
        __metadata("design:type", String)
    ], DescribeMailboxExportJobResponse.prototype, "kmsKeyArn", void 0);
    __decorate([
        Metadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], DescribeMailboxExportJobResponse.prototype, "roleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=S3BucketName" }),
        __metadata("design:type", String)
    ], DescribeMailboxExportJobResponse.prototype, "s3BucketName", void 0);
    __decorate([
        Metadata({ data: "json, name=S3Path" }),
        __metadata("design:type", String)
    ], DescribeMailboxExportJobResponse.prototype, "s3Path", void 0);
    __decorate([
        Metadata({ data: "json, name=S3Prefix" }),
        __metadata("design:type", String)
    ], DescribeMailboxExportJobResponse.prototype, "s3Prefix", void 0);
    __decorate([
        Metadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], DescribeMailboxExportJobResponse.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], DescribeMailboxExportJobResponse.prototype, "state", void 0);
    return DescribeMailboxExportJobResponse;
}(SpeakeasyBase));
export { DescribeMailboxExportJobResponse };
