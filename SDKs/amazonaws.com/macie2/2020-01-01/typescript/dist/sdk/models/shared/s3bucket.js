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
import { ServerSideEncryption } from "./serversideencryption";
import { S3BucketOwner } from "./s3bucketowner";
import { BucketPublicAccess } from "./bucketpublicaccess";
import { KeyValuePair } from "./keyvaluepair";
// S3Bucket
/**
 * Provides information about the S3 bucket that a finding applies to.
**/
var S3Bucket = /** @class */ (function (_super) {
    __extends(S3Bucket, _super);
    function S3Bucket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowsUnencryptedObjectUploads" }),
        __metadata("design:type", String)
    ], S3Bucket.prototype, "allowsUnencryptedObjectUploads", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], S3Bucket.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], S3Bucket.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultServerSideEncryption" }),
        __metadata("design:type", ServerSideEncryption)
    ], S3Bucket.prototype, "defaultServerSideEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], S3Bucket.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", S3BucketOwner)
    ], S3Bucket.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicAccess" }),
        __metadata("design:type", BucketPublicAccess)
    ], S3Bucket.prototype, "publicAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: KeyValuePair }),
        __metadata("design:type", Array)
    ], S3Bucket.prototype, "tags", void 0);
    return S3Bucket;
}(SpeakeasyBase));
export { S3Bucket };
