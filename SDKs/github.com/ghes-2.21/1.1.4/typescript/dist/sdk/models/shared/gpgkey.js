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
var GpgKeyEmails = /** @class */ (function (_super) {
    __extends(GpgKeyEmails, _super);
    function GpgKeyEmails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GpgKeyEmails.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verified" }),
        __metadata("design:type", Boolean)
    ], GpgKeyEmails.prototype, "verified", void 0);
    return GpgKeyEmails;
}(SpeakeasyBase));
export { GpgKeyEmails };
var GpgKeySubkeys = /** @class */ (function (_super) {
    __extends(GpgKeySubkeys, _super);
    function GpgKeySubkeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_certify" }),
        __metadata("design:type", Boolean)
    ], GpgKeySubkeys.prototype, "canCertify", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_encrypt_comms" }),
        __metadata("design:type", Boolean)
    ], GpgKeySubkeys.prototype, "canEncryptComms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_encrypt_storage" }),
        __metadata("design:type", Boolean)
    ], GpgKeySubkeys.prototype, "canEncryptStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_sign" }),
        __metadata("design:type", Boolean)
    ], GpgKeySubkeys.prototype, "canSign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], GpgKeySubkeys.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails" }),
        __metadata("design:type", Array)
    ], GpgKeySubkeys.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", String)
    ], GpgKeySubkeys.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GpgKeySubkeys.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key_id" }),
        __metadata("design:type", String)
    ], GpgKeySubkeys.prototype, "keyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_key_id" }),
        __metadata("design:type", Number)
    ], GpgKeySubkeys.prototype, "primaryKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_key" }),
        __metadata("design:type", String)
    ], GpgKeySubkeys.prototype, "publicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw_key" }),
        __metadata("design:type", String)
    ], GpgKeySubkeys.prototype, "rawKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subkeys" }),
        __metadata("design:type", Array)
    ], GpgKeySubkeys.prototype, "subkeys", void 0);
    return GpgKeySubkeys;
}(SpeakeasyBase));
export { GpgKeySubkeys };
// GpgKey
/**
 * A unique encryption key
**/
var GpgKey = /** @class */ (function (_super) {
    __extends(GpgKey, _super);
    function GpgKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_certify" }),
        __metadata("design:type", Boolean)
    ], GpgKey.prototype, "canCertify", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_encrypt_comms" }),
        __metadata("design:type", Boolean)
    ], GpgKey.prototype, "canEncryptComms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_encrypt_storage" }),
        __metadata("design:type", Boolean)
    ], GpgKey.prototype, "canEncryptStorage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=can_sign" }),
        __metadata("design:type", Boolean)
    ], GpgKey.prototype, "canSign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], GpgKey.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: GpgKeyEmails }),
        __metadata("design:type", Array)
    ], GpgKey.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", Date)
    ], GpgKey.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GpgKey.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key_id" }),
        __metadata("design:type", String)
    ], GpgKey.prototype, "keyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_key_id" }),
        __metadata("design:type", Number)
    ], GpgKey.prototype, "primaryKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_key" }),
        __metadata("design:type", String)
    ], GpgKey.prototype, "publicKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw_key" }),
        __metadata("design:type", String)
    ], GpgKey.prototype, "rawKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subkeys", elemType: GpgKeySubkeys }),
        __metadata("design:type", Array)
    ], GpgKey.prototype, "subkeys", void 0);
    return GpgKey;
}(SpeakeasyBase));
export { GpgKey };
