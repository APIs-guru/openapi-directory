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
import { BucketCountByEffectivePermission } from "./bucketcountbyeffectivepermission";
import { BucketCountByEncryptionType } from "./bucketcountbyencryptiontype";
import { BucketCountPolicyAllowsUnencryptedObjectUploads } from "./bucketcountpolicyallowsunencryptedobjectuploads";
import { BucketCountBySharedAccessType } from "./bucketcountbysharedaccesstype";
import { ObjectLevelStatistics } from "./objectlevelstatistics";
var GetBucketStatisticsResponse = /** @class */ (function (_super) {
    __extends(GetBucketStatisticsResponse, _super);
    function GetBucketStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketCount" }),
        __metadata("design:type", Number)
    ], GetBucketStatisticsResponse.prototype, "bucketCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketCountByEffectivePermission" }),
        __metadata("design:type", BucketCountByEffectivePermission)
    ], GetBucketStatisticsResponse.prototype, "bucketCountByEffectivePermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketCountByEncryptionType" }),
        __metadata("design:type", BucketCountByEncryptionType)
    ], GetBucketStatisticsResponse.prototype, "bucketCountByEncryptionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketCountByObjectEncryptionRequirement" }),
        __metadata("design:type", BucketCountPolicyAllowsUnencryptedObjectUploads)
    ], GetBucketStatisticsResponse.prototype, "bucketCountByObjectEncryptionRequirement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketCountBySharedAccessType" }),
        __metadata("design:type", BucketCountBySharedAccessType)
    ], GetBucketStatisticsResponse.prototype, "bucketCountBySharedAccessType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classifiableObjectCount" }),
        __metadata("design:type", Number)
    ], GetBucketStatisticsResponse.prototype, "classifiableObjectCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classifiableSizeInBytes" }),
        __metadata("design:type", Number)
    ], GetBucketStatisticsResponse.prototype, "classifiableSizeInBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], GetBucketStatisticsResponse.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectCount" }),
        __metadata("design:type", Number)
    ], GetBucketStatisticsResponse.prototype, "objectCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeInBytes" }),
        __metadata("design:type", Number)
    ], GetBucketStatisticsResponse.prototype, "sizeInBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeInBytesCompressed" }),
        __metadata("design:type", Number)
    ], GetBucketStatisticsResponse.prototype, "sizeInBytesCompressed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unclassifiableObjectCount" }),
        __metadata("design:type", ObjectLevelStatistics)
    ], GetBucketStatisticsResponse.prototype, "unclassifiableObjectCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unclassifiableObjectSizeInBytes" }),
        __metadata("design:type", ObjectLevelStatistics)
    ], GetBucketStatisticsResponse.prototype, "unclassifiableObjectSizeInBytes", void 0);
    return GetBucketStatisticsResponse;
}(SpeakeasyBase));
export { GetBucketStatisticsResponse };
