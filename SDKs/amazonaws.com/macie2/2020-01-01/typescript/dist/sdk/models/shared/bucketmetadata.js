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
import { AllowsUnencryptedObjectUploadsEnum } from "./allowsunencryptedobjectuploadsenum";
import { JobDetails } from "./jobdetails";
import { ObjectCountByEncryptionType } from "./objectcountbyencryptiontype";
import { BucketPublicAccess } from "./bucketpublicaccess";
import { ReplicationDetails } from "./replicationdetails";
import { BucketServerSideEncryption } from "./bucketserversideencryption";
import { SharedAccessEnum } from "./sharedaccessenum";
import { KeyValuePair } from "./keyvaluepair";
import { ObjectLevelStatistics } from "./objectlevelstatistics";
// BucketMetadata
/**
 * Provides information about an S3 bucket that Amazon Macie monitors and analyzes.
**/
var BucketMetadata = /** @class */ (function (_super) {
    __extends(BucketMetadata, _super);
    function BucketMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], BucketMetadata.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowsUnencryptedObjectUploads" }),
        __metadata("design:type", String)
    ], BucketMetadata.prototype, "allowsUnencryptedObjectUploads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketArn" }),
        __metadata("design:type", String)
    ], BucketMetadata.prototype, "bucketArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketCreatedAt" }),
        __metadata("design:type", Date)
    ], BucketMetadata.prototype, "bucketCreatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketName" }),
        __metadata("design:type", String)
    ], BucketMetadata.prototype, "bucketName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classifiableObjectCount" }),
        __metadata("design:type", Number)
    ], BucketMetadata.prototype, "classifiableObjectCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classifiableSizeInBytes" }),
        __metadata("design:type", Number)
    ], BucketMetadata.prototype, "classifiableSizeInBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobDetails" }),
        __metadata("design:type", JobDetails)
    ], BucketMetadata.prototype, "jobDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], BucketMetadata.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectCount" }),
        __metadata("design:type", Number)
    ], BucketMetadata.prototype, "objectCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectCountByEncryptionType" }),
        __metadata("design:type", ObjectCountByEncryptionType)
    ], BucketMetadata.prototype, "objectCountByEncryptionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicAccess" }),
        __metadata("design:type", BucketPublicAccess)
    ], BucketMetadata.prototype, "publicAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], BucketMetadata.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicationDetails" }),
        __metadata("design:type", ReplicationDetails)
    ], BucketMetadata.prototype, "replicationDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverSideEncryption" }),
        __metadata("design:type", BucketServerSideEncryption)
    ], BucketMetadata.prototype, "serverSideEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharedAccess" }),
        __metadata("design:type", String)
    ], BucketMetadata.prototype, "sharedAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeInBytes" }),
        __metadata("design:type", Number)
    ], BucketMetadata.prototype, "sizeInBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeInBytesCompressed" }),
        __metadata("design:type", Number)
    ], BucketMetadata.prototype, "sizeInBytesCompressed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: KeyValuePair }),
        __metadata("design:type", Array)
    ], BucketMetadata.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unclassifiableObjectCount" }),
        __metadata("design:type", ObjectLevelStatistics)
    ], BucketMetadata.prototype, "unclassifiableObjectCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unclassifiableObjectSizeInBytes" }),
        __metadata("design:type", ObjectLevelStatistics)
    ], BucketMetadata.prototype, "unclassifiableObjectSizeInBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versioning" }),
        __metadata("design:type", Boolean)
    ], BucketMetadata.prototype, "versioning", void 0);
    return BucketMetadata;
}(SpeakeasyBase));
export { BucketMetadata };
