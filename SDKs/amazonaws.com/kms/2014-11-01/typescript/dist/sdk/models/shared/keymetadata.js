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
import { CustomerMasterKeySpecEnum } from "./customermasterkeyspecenum";
import { ExpirationModelTypeEnum } from "./expirationmodeltypeenum";
import { KeyManagerTypeEnum } from "./keymanagertypeenum";
import { KeySpecEnum } from "./keyspecenum";
import { KeyStateEnum } from "./keystateenum";
import { KeyUsageTypeEnum } from "./keyusagetypeenum";
import { MultiRegionConfiguration } from "./multiregionconfiguration";
import { OriginTypeEnum } from "./origintypeenum";
// KeyMetadata
/**
 * <p>Contains metadata about a KMS key.</p> <p>This data type is used as a response element for the <a>CreateKey</a> and <a>DescribeKey</a> operations.</p>
**/
var KeyMetadata = /** @class */ (function (_super) {
    __extends(KeyMetadata, _super);
    function KeyMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AWSAccountId" }),
        __metadata("design:type", String)
    ], KeyMetadata.prototype, "awsAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], KeyMetadata.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CloudHsmClusterId" }),
        __metadata("design:type", String)
    ], KeyMetadata.prototype, "cloudHsmClusterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], KeyMetadata.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomKeyStoreId" }),
        __metadata("design:type", String)
    ], KeyMetadata.prototype, "customKeyStoreId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerMasterKeySpec" }),
        __metadata("design:type", String)
    ], KeyMetadata.prototype, "customerMasterKeySpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeletionDate" }),
        __metadata("design:type", Date)
    ], KeyMetadata.prototype, "deletionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], KeyMetadata.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], KeyMetadata.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EncryptionAlgorithms" }),
        __metadata("design:type", Array)
    ], KeyMetadata.prototype, "encryptionAlgorithms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationModel" }),
        __metadata("design:type", String)
    ], KeyMetadata.prototype, "expirationModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyId" }),
        __metadata("design:type", String)
    ], KeyMetadata.prototype, "keyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyManager" }),
        __metadata("design:type", String)
    ], KeyMetadata.prototype, "keyManager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeySpec" }),
        __metadata("design:type", String)
    ], KeyMetadata.prototype, "keySpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyState" }),
        __metadata("design:type", String)
    ], KeyMetadata.prototype, "keyState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyUsage" }),
        __metadata("design:type", String)
    ], KeyMetadata.prototype, "keyUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiRegion" }),
        __metadata("design:type", Boolean)
    ], KeyMetadata.prototype, "multiRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiRegionConfiguration" }),
        __metadata("design:type", MultiRegionConfiguration)
    ], KeyMetadata.prototype, "multiRegionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Origin" }),
        __metadata("design:type", String)
    ], KeyMetadata.prototype, "origin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PendingDeletionWindowInDays" }),
        __metadata("design:type", Number)
    ], KeyMetadata.prototype, "pendingDeletionWindowInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SigningAlgorithms" }),
        __metadata("design:type", Array)
    ], KeyMetadata.prototype, "signingAlgorithms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ValidTo" }),
        __metadata("design:type", Date)
    ], KeyMetadata.prototype, "validTo", void 0);
    return KeyMetadata;
}(SpeakeasyBase));
export { KeyMetadata };
