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
// CredentialAuthorization
/**
 * Credential Authorization
**/
var CredentialAuthorization = /** @class */ (function (_super) {
    __extends(CredentialAuthorization, _super);
    function CredentialAuthorization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorized_credential_id" }),
        __metadata("design:type", Number)
    ], CredentialAuthorization.prototype, "authorizedCredentialId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorized_credential_note" }),
        __metadata("design:type", String)
    ], CredentialAuthorization.prototype, "authorizedCredentialNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorized_credential_title" }),
        __metadata("design:type", String)
    ], CredentialAuthorization.prototype, "authorizedCredentialTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credential_accessed_at" }),
        __metadata("design:type", Date)
    ], CredentialAuthorization.prototype, "credentialAccessedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credential_authorized_at" }),
        __metadata("design:type", Date)
    ], CredentialAuthorization.prototype, "credentialAuthorizedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credential_id" }),
        __metadata("design:type", Number)
    ], CredentialAuthorization.prototype, "credentialId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credential_type" }),
        __metadata("design:type", String)
    ], CredentialAuthorization.prototype, "credentialType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], CredentialAuthorization.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login" }),
        __metadata("design:type", String)
    ], CredentialAuthorization.prototype, "login", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], CredentialAuthorization.prototype, "scopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token_last_eight" }),
        __metadata("design:type", String)
    ], CredentialAuthorization.prototype, "tokenLastEight", void 0);
    return CredentialAuthorization;
}(SpeakeasyBase));
export { CredentialAuthorization };
