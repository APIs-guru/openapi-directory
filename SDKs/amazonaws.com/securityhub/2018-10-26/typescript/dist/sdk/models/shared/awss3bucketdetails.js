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
import { AwsS3BucketBucketLifecycleConfigurationDetails } from "./awss3bucketbucketlifecycleconfigurationdetails";
import { AwsS3BucketLoggingConfiguration } from "./awss3bucketloggingconfiguration";
import { AwsS3BucketNotificationConfiguration } from "./awss3bucketnotificationconfiguration";
import { AwsS3BucketWebsiteConfiguration } from "./awss3bucketwebsiteconfiguration";
import { AwsS3AccountPublicAccessBlockDetails } from "./awss3accountpublicaccessblockdetails";
import { AwsS3BucketServerSideEncryptionConfiguration } from "./awss3bucketserversideencryptionconfiguration";
// AwsS3BucketDetails
/**
 * The details of an Amazon S3 bucket.
**/
var AwsS3BucketDetails = /** @class */ (function (_super) {
    __extends(AwsS3BucketDetails, _super);
    function AwsS3BucketDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessControlList" }),
        __metadata("design:type", String)
    ], AwsS3BucketDetails.prototype, "accessControlList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BucketLifecycleConfiguration" }),
        __metadata("design:type", AwsS3BucketBucketLifecycleConfigurationDetails)
    ], AwsS3BucketDetails.prototype, "bucketLifecycleConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BucketLoggingConfiguration" }),
        __metadata("design:type", AwsS3BucketLoggingConfiguration)
    ], AwsS3BucketDetails.prototype, "bucketLoggingConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BucketNotificationConfiguration" }),
        __metadata("design:type", AwsS3BucketNotificationConfiguration)
    ], AwsS3BucketDetails.prototype, "bucketNotificationConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BucketWebsiteConfiguration" }),
        __metadata("design:type", AwsS3BucketWebsiteConfiguration)
    ], AwsS3BucketDetails.prototype, "bucketWebsiteConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", String)
    ], AwsS3BucketDetails.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwnerId" }),
        __metadata("design:type", String)
    ], AwsS3BucketDetails.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwnerName" }),
        __metadata("design:type", String)
    ], AwsS3BucketDetails.prototype, "ownerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublicAccessBlockConfiguration" }),
        __metadata("design:type", AwsS3AccountPublicAccessBlockDetails)
    ], AwsS3BucketDetails.prototype, "publicAccessBlockConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServerSideEncryptionConfiguration" }),
        __metadata("design:type", AwsS3BucketServerSideEncryptionConfiguration)
    ], AwsS3BucketDetails.prototype, "serverSideEncryptionConfiguration", void 0);
    return AwsS3BucketDetails;
}(SpeakeasyBase));
export { AwsS3BucketDetails };
