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
// BucketCountByEncryptionType
/**
 * Provides information about the number of S3 buckets that use certain types of server-side encryption by default or don't encrypt new objects by default. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.
**/
var BucketCountByEncryptionType = /** @class */ (function (_super) {
    __extends(BucketCountByEncryptionType, _super);
    function BucketCountByEncryptionType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsManaged" }),
        __metadata("design:type", Number)
    ], BucketCountByEncryptionType.prototype, "kmsManaged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s3Managed" }),
        __metadata("design:type", Number)
    ], BucketCountByEncryptionType.prototype, "s3Managed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unencrypted" }),
        __metadata("design:type", Number)
    ], BucketCountByEncryptionType.prototype, "unencrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unknown" }),
        __metadata("design:type", Number)
    ], BucketCountByEncryptionType.prototype, "unknown", void 0);
    return BucketCountByEncryptionType;
}(SpeakeasyBase));
export { BucketCountByEncryptionType };
