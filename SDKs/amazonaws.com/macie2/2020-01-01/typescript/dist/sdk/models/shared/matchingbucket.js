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
import { JobDetails } from "./jobdetails";
import { ObjectCountByEncryptionType } from "./objectcountbyencryptiontype";
import { ObjectLevelStatistics } from "./objectlevelstatistics";
// MatchingBucket
/**
 * Provides statistical data and other information about an S3 bucket that Amazon Macie monitors and analyzes.
**/
var MatchingBucket = /** @class */ (function (_super) {
    __extends(MatchingBucket, _super);
    function MatchingBucket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], MatchingBucket.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bucketName" }),
        __metadata("design:type", String)
    ], MatchingBucket.prototype, "bucketName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classifiableObjectCount" }),
        __metadata("design:type", Number)
    ], MatchingBucket.prototype, "classifiableObjectCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=classifiableSizeInBytes" }),
        __metadata("design:type", Number)
    ], MatchingBucket.prototype, "classifiableSizeInBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobDetails" }),
        __metadata("design:type", JobDetails)
    ], MatchingBucket.prototype, "jobDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectCount" }),
        __metadata("design:type", Number)
    ], MatchingBucket.prototype, "objectCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectCountByEncryptionType" }),
        __metadata("design:type", ObjectCountByEncryptionType)
    ], MatchingBucket.prototype, "objectCountByEncryptionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeInBytes" }),
        __metadata("design:type", Number)
    ], MatchingBucket.prototype, "sizeInBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeInBytesCompressed" }),
        __metadata("design:type", Number)
    ], MatchingBucket.prototype, "sizeInBytesCompressed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unclassifiableObjectCount" }),
        __metadata("design:type", ObjectLevelStatistics)
    ], MatchingBucket.prototype, "unclassifiableObjectCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unclassifiableObjectSizeInBytes" }),
        __metadata("design:type", ObjectLevelStatistics)
    ], MatchingBucket.prototype, "unclassifiableObjectSizeInBytes", void 0);
    return MatchingBucket;
}(SpeakeasyBase));
export { MatchingBucket };
