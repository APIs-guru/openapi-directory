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
import { AccessKeyLastUsed } from "./accesskeylastused";
import { StatusTypeEnum } from "./statustypeenum";
// AccessKey
/**
 * <p>Describes an access key for an Amazon Lightsail bucket.</p> <p>Access keys grant full programmatic access to the specified bucket and its objects. You can have a maximum of two access keys per bucket. Use the <a>CreateBucketAccessKey</a> action to create an access key for a specific bucket. For more information about access keys, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-creating-bucket-access-keys">Creating access keys for a bucket in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer Guide</i>.</p> <important> <p>The <code>secretAccessKey</code> value is returned only in response to the <code>CreateBucketAccessKey</code> action. You can get a secret access key only when you first create an access key; you cannot get the secret access key later. If you lose the secret access key, you must create a new access key.</p> </important>
**/
var AccessKey = /** @class */ (function (_super) {
    __extends(AccessKey, _super);
    function AccessKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessKeyId" }),
        __metadata("design:type", String)
    ], AccessKey.prototype, "accessKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], AccessKey.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUsed" }),
        __metadata("design:type", AccessKeyLastUsed)
    ], AccessKey.prototype, "lastUsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secretAccessKey" }),
        __metadata("design:type", String)
    ], AccessKey.prototype, "secretAccessKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AccessKey.prototype, "status", void 0);
    return AccessKey;
}(SpeakeasyBase));
export { AccessKey };
