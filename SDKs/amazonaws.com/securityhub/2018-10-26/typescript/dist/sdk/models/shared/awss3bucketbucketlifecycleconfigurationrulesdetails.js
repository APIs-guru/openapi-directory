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
import { AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails } from "./awss3bucketbucketlifecycleconfigurationrulesabortincompletemultipartuploaddetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails } from "./awss3bucketbucketlifecycleconfigurationrulesfilterdetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails } from "./awss3bucketbucketlifecycleconfigurationrulesnoncurrentversiontransitionsdetails";
import { AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails } from "./awss3bucketbucketlifecycleconfigurationrulestransitionsdetails";
// AwsS3BucketBucketLifecycleConfigurationRulesDetails
/**
 * Configuration for a lifecycle rule.
**/
var AwsS3BucketBucketLifecycleConfigurationRulesDetails = /** @class */ (function (_super) {
    __extends(AwsS3BucketBucketLifecycleConfigurationRulesDetails, _super);
    function AwsS3BucketBucketLifecycleConfigurationRulesDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AbortIncompleteMultipartUpload" }),
        __metadata("design:type", AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails)
    ], AwsS3BucketBucketLifecycleConfigurationRulesDetails.prototype, "abortIncompleteMultipartUpload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDate" }),
        __metadata("design:type", String)
    ], AwsS3BucketBucketLifecycleConfigurationRulesDetails.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationInDays" }),
        __metadata("design:type", Number)
    ], AwsS3BucketBucketLifecycleConfigurationRulesDetails.prototype, "expirationInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpiredObjectDeleteMarker" }),
        __metadata("design:type", Boolean)
    ], AwsS3BucketBucketLifecycleConfigurationRulesDetails.prototype, "expiredObjectDeleteMarker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Filter" }),
        __metadata("design:type", AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails)
    ], AwsS3BucketBucketLifecycleConfigurationRulesDetails.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ID" }),
        __metadata("design:type", String)
    ], AwsS3BucketBucketLifecycleConfigurationRulesDetails.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NoncurrentVersionExpirationInDays" }),
        __metadata("design:type", Number)
    ], AwsS3BucketBucketLifecycleConfigurationRulesDetails.prototype, "noncurrentVersionExpirationInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NoncurrentVersionTransitions", elemType: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails }),
        __metadata("design:type", Array)
    ], AwsS3BucketBucketLifecycleConfigurationRulesDetails.prototype, "noncurrentVersionTransitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Prefix" }),
        __metadata("design:type", String)
    ], AwsS3BucketBucketLifecycleConfigurationRulesDetails.prototype, "prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], AwsS3BucketBucketLifecycleConfigurationRulesDetails.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Transitions", elemType: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails }),
        __metadata("design:type", Array)
    ], AwsS3BucketBucketLifecycleConfigurationRulesDetails.prototype, "transitions", void 0);
    return AwsS3BucketBucketLifecycleConfigurationRulesDetails;
}(SpeakeasyBase));
export { AwsS3BucketBucketLifecycleConfigurationRulesDetails };
