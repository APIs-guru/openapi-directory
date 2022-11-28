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
var EnterpriseSettingsEnterpriseAvatar = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseAvatar, _super);
    function EnterpriseSettingsEnterpriseAvatar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseAvatar.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseAvatar.prototype, "uri", void 0);
    return EnterpriseSettingsEnterpriseAvatar;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseAvatar };
var EnterpriseSettingsEnterpriseCas = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseCas, _super);
    function EnterpriseSettingsEnterpriseCas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseCas.prototype, "url", void 0);
    return EnterpriseSettingsEnterpriseCas;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseCas };
var EnterpriseSettingsEnterpriseCollectd = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseCollectd, _super);
    function EnterpriseSettingsEnterpriseCollectd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseCollectd.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryption" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseCollectd.prototype, "encryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseCollectd.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], EnterpriseSettingsEnterpriseCollectd.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseCollectd.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseCollectd.prototype, "username", void 0);
    return EnterpriseSettingsEnterpriseCollectd;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseCollectd };
var EnterpriseSettingsEnterpriseCustomer = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseCustomer, _super);
    function EnterpriseSettingsEnterpriseCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseCustomer.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseCustomer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_key_data" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseCustomer.prototype, "publicKeyData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret_key_data" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseCustomer.prototype, "secretKeyData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseCustomer.prototype, "uuid", void 0);
    return EnterpriseSettingsEnterpriseCustomer;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseCustomer };
var EnterpriseSettingsEnterpriseGithubOauth = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseGithubOauth, _super);
    function EnterpriseSettingsEnterpriseGithubOauth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseGithubOauth.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_secret" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseGithubOauth.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_name" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseGithubOauth.prototype, "organizationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_team" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseGithubOauth.prototype, "organizationTeam", void 0);
    return EnterpriseSettingsEnterpriseGithubOauth;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseGithubOauth };
var EnterpriseSettingsEnterpriseGithubSsl = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseGithubSsl, _super);
    function EnterpriseSettingsEnterpriseGithubSsl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cert" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseGithubSsl.prototype, "cert", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseGithubSsl.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseGithubSsl.prototype, "key", void 0);
    return EnterpriseSettingsEnterpriseGithubSsl;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseGithubSsl };
var EnterpriseSettingsEnterpriseLdapProfile = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseLdapProfile, _super);
    function EnterpriseSettingsEnterpriseLdapProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLdapProfile.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mail" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLdapProfile.prototype, "mail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLdapProfile.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLdapProfile.prototype, "uid", void 0);
    return EnterpriseSettingsEnterpriseLdapProfile;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseLdapProfile };
var EnterpriseSettingsEnterpriseLdapReconciliation = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseLdapReconciliation, _super);
    function EnterpriseSettingsEnterpriseLdapReconciliation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=org" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLdapReconciliation.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLdapReconciliation.prototype, "user", void 0);
    return EnterpriseSettingsEnterpriseLdapReconciliation;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseLdapReconciliation };
var EnterpriseSettingsEnterpriseLdap = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseLdap, _super);
    function EnterpriseSettingsEnterpriseLdap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin_group" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "adminGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=base" }),
        __metadata("design:type", Array)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "base", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bind_dn" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "bindDn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "method", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posix_support" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "posixSupport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseLdapProfile)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reconciliation" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseLdapReconciliation)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "reconciliation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recursive_group_search" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "recursiveGroupSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=search_strategy" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "searchStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sync_enabled" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "syncEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team_sync_interval" }),
        __metadata("design:type", Number)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "teamSyncInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_groups" }),
        __metadata("design:type", Array)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "userGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_sync_emails" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "userSyncEmails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_sync_interval" }),
        __metadata("design:type", Number)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "userSyncInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_sync_keys" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "userSyncKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtual_attribute_enabled" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseLdap.prototype, "virtualAttributeEnabled", void 0);
    return EnterpriseSettingsEnterpriseLdap;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseLdap };
var EnterpriseSettingsEnterpriseLicense = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseLicense, _super);
    function EnterpriseSettingsEnterpriseLicense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cluster_support" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseLicense.prototype, "clusterSupport", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluation" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseLicense.prototype, "evaluation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_at" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLicense.prototype, "expireAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perpetual" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseLicense.prototype, "perpetual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seats" }),
        __metadata("design:type", Number)
    ], EnterpriseSettingsEnterpriseLicense.prototype, "seats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssh_allowed" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseLicense.prototype, "sshAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=support_key" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseLicense.prototype, "supportKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unlimited_seating" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseLicense.prototype, "unlimitedSeating", void 0);
    return EnterpriseSettingsEnterpriseLicense;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseLicense };
var EnterpriseSettingsEnterpriseMapping = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseMapping, _super);
    function EnterpriseSettingsEnterpriseMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basemap" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseMapping.prototype, "basemap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseMapping.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tileserver" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseMapping.prototype, "tileserver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseMapping.prototype, "token", void 0);
    return EnterpriseSettingsEnterpriseMapping;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseMapping };
var EnterpriseSettingsEnterpriseNtp = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseNtp, _super);
    function EnterpriseSettingsEnterpriseNtp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_server" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseNtp.prototype, "primaryServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondary_server" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseNtp.prototype, "secondaryServer", void 0);
    return EnterpriseSettingsEnterpriseNtp;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseNtp };
var EnterpriseSettingsEnterprisePages = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterprisePages, _super);
    function EnterpriseSettingsEnterprisePages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterprisePages.prototype, "enabled", void 0);
    return EnterpriseSettingsEnterprisePages;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterprisePages };
var EnterpriseSettingsEnterpriseSaml = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseSaml, _super);
    function EnterpriseSettingsEnterpriseSaml() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificate" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSaml.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificate_path" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSaml.prototype, "certificatePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disable_admin_demote" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseSaml.prototype, "disableAdminDemote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idp_initiated_sso" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseSaml.prototype, "idpInitiatedSso", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuer" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSaml.prototype, "issuer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sso_url" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSaml.prototype, "ssoUrl", void 0);
    return EnterpriseSettingsEnterpriseSaml;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseSaml };
var EnterpriseSettingsEnterpriseSmtp = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseSmtp, _super);
    function EnterpriseSettingsEnterpriseSmtp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSmtp.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authentication" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSmtp.prototype, "authentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discard-to-noreply-address" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseSmtp.prototype, "discardToNoreplyAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSmtp.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enable_starttls_auto" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseSmtp.prototype, "enableStarttlsAuto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseSmtp.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noreply_address" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSmtp.prototype, "noreplyAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSmtp.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSmtp.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=support_address" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSmtp.prototype, "supportAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=support_address_type" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSmtp.prototype, "supportAddressType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSmtp.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSmtp.prototype, "username", void 0);
    return EnterpriseSettingsEnterpriseSmtp;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseSmtp };
var EnterpriseSettingsEnterpriseSnmp = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseSnmp, _super);
    function EnterpriseSettingsEnterpriseSnmp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=community" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSnmp.prototype, "community", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseSnmp.prototype, "enabled", void 0);
    return EnterpriseSettingsEnterpriseSnmp;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseSnmp };
var EnterpriseSettingsEnterpriseSyslog = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterpriseSyslog, _super);
    function EnterpriseSettingsEnterpriseSyslog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterpriseSyslog.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol_name" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSyslog.prototype, "protocolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterpriseSyslog.prototype, "server", void 0);
    return EnterpriseSettingsEnterpriseSyslog;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterpriseSyslog };
var EnterpriseSettingsEnterprise = /** @class */ (function (_super) {
    __extends(EnterpriseSettingsEnterprise, _super);
    function EnterpriseSettingsEnterprise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin_password" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterprise.prototype, "adminPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assets" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterprise.prototype, "assets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_mode" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterprise.prototype, "authMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseAvatar)
    ], EnterpriseSettingsEnterprise.prototype, "avatar", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cas" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseCas)
    ], EnterpriseSettingsEnterprise.prototype, "cas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collectd" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseCollectd)
    ], EnterpriseSettingsEnterprise.prototype, "collectd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configuration_id" }),
        __metadata("design:type", Number)
    ], EnterpriseSettingsEnterprise.prototype, "configurationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configuration_run_count" }),
        __metadata("design:type", Number)
    ], EnterpriseSettingsEnterprise.prototype, "configurationRunCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseCustomer)
    ], EnterpriseSettingsEnterprise.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expire_sessions" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterprise.prototype, "expireSessions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=github_hostname" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterprise.prototype, "githubHostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=github_oauth" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseGithubOauth)
    ], EnterpriseSettingsEnterprise.prototype, "githubOauth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=github_ssl" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseGithubSsl)
    ], EnterpriseSettingsEnterprise.prototype, "githubSsl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http_proxy" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterprise.prototype, "httpProxy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identicons_host" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterprise.prototype, "identiconsHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseLdap)
    ], EnterpriseSettingsEnterprise.prototype, "ldap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseLicense)
    ], EnterpriseSettingsEnterprise.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancer" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterprise.prototype, "loadBalancer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapping" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseMapping)
    ], EnterpriseSettingsEnterprise.prototype, "mapping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ntp" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseNtp)
    ], EnterpriseSettingsEnterprise.prototype, "ntp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", EnterpriseSettingsEnterprisePages)
    ], EnterpriseSettingsEnterprise.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_mode" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterprise.prototype, "privateMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_pages" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterprise.prototype, "publicPages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saml" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseSaml)
    ], EnterpriseSettingsEnterprise.prototype, "saml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signup_enabled" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterprise.prototype, "signupEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smtp" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseSmtp)
    ], EnterpriseSettingsEnterprise.prototype, "smtp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snmp" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseSnmp)
    ], EnterpriseSettingsEnterprise.prototype, "snmp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subdomain_isolation" }),
        __metadata("design:type", Boolean)
    ], EnterpriseSettingsEnterprise.prototype, "subdomainIsolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syslog" }),
        __metadata("design:type", EnterpriseSettingsEnterpriseSyslog)
    ], EnterpriseSettingsEnterprise.prototype, "syslog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], EnterpriseSettingsEnterprise.prototype, "timezone", void 0);
    return EnterpriseSettingsEnterprise;
}(SpeakeasyBase));
export { EnterpriseSettingsEnterprise };
var EnterpriseSettings = /** @class */ (function (_super) {
    __extends(EnterpriseSettings, _super);
    function EnterpriseSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enterprise" }),
        __metadata("design:type", EnterpriseSettingsEnterprise)
    ], EnterpriseSettings.prototype, "enterprise", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=run_list" }),
        __metadata("design:type", Array)
    ], EnterpriseSettings.prototype, "runList", void 0);
    return EnterpriseSettings;
}(SpeakeasyBase));
export { EnterpriseSettings };
