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
// SessionEntity
/**
 * Create user session (log in)
**/
var SessionEntity = /** @class */ (function (_super) {
    __extends(SessionEntity, _super);
    function SessionEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_sms" }),
        __metadata("design:type", Boolean)
    ], SessionEntity.prototype, "allowed2faMethodSms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_totp" }),
        __metadata("design:type", Boolean)
    ], SessionEntity.prototype, "allowed2faMethodTotp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_u2f" }),
        __metadata("design:type", Boolean)
    ], SessionEntity.prototype, "allowed2faMethodU2f", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_yubi" }),
        __metadata("design:type", Boolean)
    ], SessionEntity.prototype, "allowed2faMethodYubi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SessionEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], SessionEntity.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login_token" }),
        __metadata("design:type", String)
    ], SessionEntity.prototype, "loginToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login_token_domain" }),
        __metadata("design:type", String)
    ], SessionEntity.prototype, "loginTokenDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_dir_listing_size" }),
        __metadata("design:type", Number)
    ], SessionEntity.prototype, "maxDirListingSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiple_regions" }),
        __metadata("design:type", Boolean)
    ], SessionEntity.prototype, "multipleRegions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=read_only" }),
        __metadata("design:type", Boolean)
    ], SessionEntity.prototype, "readOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=root_path" }),
        __metadata("design:type", String)
    ], SessionEntity.prototype, "rootPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_id" }),
        __metadata("design:type", Number)
    ], SessionEntity.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssl_required" }),
        __metadata("design:type", Boolean)
    ], SessionEntity.prototype, "sslRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tls_disabled" }),
        __metadata("design:type", Boolean)
    ], SessionEntity.prototype, "tlsDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=two_factor_setup_needed" }),
        __metadata("design:type", Boolean)
    ], SessionEntity.prototype, "twoFactorSetupNeeded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_provided_modified_at" }),
        __metadata("design:type", Boolean)
    ], SessionEntity.prototype, "useProvidedModifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=windows_mode_ftp" }),
        __metadata("design:type", Boolean)
    ], SessionEntity.prototype, "windowsModeFtp", void 0);
    return SessionEntity;
}(SpeakeasyBase));
export { SessionEntity };
