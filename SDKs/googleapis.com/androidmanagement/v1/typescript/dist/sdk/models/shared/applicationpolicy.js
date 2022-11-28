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
import { ExtensionConfig } from "./extensionconfig";
import { ManagedConfigurationTemplate } from "./managedconfigurationtemplate";
import { PermissionGrant } from "./permissiongrant";
export var ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum;
(function (ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum) {
    ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum["AlwaysOnVpnLockdownExemptionUnspecified"] = "ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED";
    ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum["VpnLockdownEnforced"] = "VPN_LOCKDOWN_ENFORCED";
    ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum["VpnLockdownExemption"] = "VPN_LOCKDOWN_EXEMPTION";
})(ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum || (ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum = {}));
export var ApplicationPolicyAutoUpdateModeEnum;
(function (ApplicationPolicyAutoUpdateModeEnum) {
    ApplicationPolicyAutoUpdateModeEnum["AutoUpdateModeUnspecified"] = "AUTO_UPDATE_MODE_UNSPECIFIED";
    ApplicationPolicyAutoUpdateModeEnum["AutoUpdateDefault"] = "AUTO_UPDATE_DEFAULT";
    ApplicationPolicyAutoUpdateModeEnum["AutoUpdatePostponed"] = "AUTO_UPDATE_POSTPONED";
    ApplicationPolicyAutoUpdateModeEnum["AutoUpdateHighPriority"] = "AUTO_UPDATE_HIGH_PRIORITY";
})(ApplicationPolicyAutoUpdateModeEnum || (ApplicationPolicyAutoUpdateModeEnum = {}));
export var ApplicationPolicyConnectedWorkAndPersonalAppEnum;
(function (ApplicationPolicyConnectedWorkAndPersonalAppEnum) {
    ApplicationPolicyConnectedWorkAndPersonalAppEnum["ConnectedWorkAndPersonalAppUnspecified"] = "CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED";
    ApplicationPolicyConnectedWorkAndPersonalAppEnum["ConnectedWorkAndPersonalAppDisallowed"] = "CONNECTED_WORK_AND_PERSONAL_APP_DISALLOWED";
    ApplicationPolicyConnectedWorkAndPersonalAppEnum["ConnectedWorkAndPersonalAppAllowed"] = "CONNECTED_WORK_AND_PERSONAL_APP_ALLOWED";
})(ApplicationPolicyConnectedWorkAndPersonalAppEnum || (ApplicationPolicyConnectedWorkAndPersonalAppEnum = {}));
export var ApplicationPolicyDefaultPermissionPolicyEnum;
(function (ApplicationPolicyDefaultPermissionPolicyEnum) {
    ApplicationPolicyDefaultPermissionPolicyEnum["PermissionPolicyUnspecified"] = "PERMISSION_POLICY_UNSPECIFIED";
    ApplicationPolicyDefaultPermissionPolicyEnum["Prompt"] = "PROMPT";
    ApplicationPolicyDefaultPermissionPolicyEnum["Grant"] = "GRANT";
    ApplicationPolicyDefaultPermissionPolicyEnum["Deny"] = "DENY";
})(ApplicationPolicyDefaultPermissionPolicyEnum || (ApplicationPolicyDefaultPermissionPolicyEnum = {}));
export var ApplicationPolicyDelegatedScopesEnum;
(function (ApplicationPolicyDelegatedScopesEnum) {
    ApplicationPolicyDelegatedScopesEnum["DelegatedScopeUnspecified"] = "DELEGATED_SCOPE_UNSPECIFIED";
    ApplicationPolicyDelegatedScopesEnum["CertInstall"] = "CERT_INSTALL";
    ApplicationPolicyDelegatedScopesEnum["ManagedConfigurations"] = "MANAGED_CONFIGURATIONS";
    ApplicationPolicyDelegatedScopesEnum["BlockUninstall"] = "BLOCK_UNINSTALL";
    ApplicationPolicyDelegatedScopesEnum["PermissionGrant"] = "PERMISSION_GRANT";
    ApplicationPolicyDelegatedScopesEnum["PackageAccess"] = "PACKAGE_ACCESS";
    ApplicationPolicyDelegatedScopesEnum["EnableSystemApp"] = "ENABLE_SYSTEM_APP";
    ApplicationPolicyDelegatedScopesEnum["NetworkActivityLogs"] = "NETWORK_ACTIVITY_LOGS";
    ApplicationPolicyDelegatedScopesEnum["SecurityLogs"] = "SECURITY_LOGS";
})(ApplicationPolicyDelegatedScopesEnum || (ApplicationPolicyDelegatedScopesEnum = {}));
export var ApplicationPolicyInstallTypeEnum;
(function (ApplicationPolicyInstallTypeEnum) {
    ApplicationPolicyInstallTypeEnum["InstallTypeUnspecified"] = "INSTALL_TYPE_UNSPECIFIED";
    ApplicationPolicyInstallTypeEnum["Preinstalled"] = "PREINSTALLED";
    ApplicationPolicyInstallTypeEnum["ForceInstalled"] = "FORCE_INSTALLED";
    ApplicationPolicyInstallTypeEnum["Blocked"] = "BLOCKED";
    ApplicationPolicyInstallTypeEnum["Available"] = "AVAILABLE";
    ApplicationPolicyInstallTypeEnum["RequiredForSetup"] = "REQUIRED_FOR_SETUP";
    ApplicationPolicyInstallTypeEnum["Kiosk"] = "KIOSK";
})(ApplicationPolicyInstallTypeEnum || (ApplicationPolicyInstallTypeEnum = {}));
// ApplicationPolicy
/**
 * Policy for an individual app.
**/
var ApplicationPolicy = /** @class */ (function (_super) {
    __extends(ApplicationPolicy, _super);
    function ApplicationPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessibleTrackIds" }),
        __metadata("design:type", Array)
    ], ApplicationPolicy.prototype, "accessibleTrackIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alwaysOnVpnLockdownExemption" }),
        __metadata("design:type", String)
    ], ApplicationPolicy.prototype, "alwaysOnVpnLockdownExemption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoUpdateMode" }),
        __metadata("design:type", String)
    ], ApplicationPolicy.prototype, "autoUpdateMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectedWorkAndPersonalApp" }),
        __metadata("design:type", String)
    ], ApplicationPolicy.prototype, "connectedWorkAndPersonalApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultPermissionPolicy" }),
        __metadata("design:type", String)
    ], ApplicationPolicy.prototype, "defaultPermissionPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delegatedScopes" }),
        __metadata("design:type", Array)
    ], ApplicationPolicy.prototype, "delegatedScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], ApplicationPolicy.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extensionConfig" }),
        __metadata("design:type", ExtensionConfig)
    ], ApplicationPolicy.prototype, "extensionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installType" }),
        __metadata("design:type", String)
    ], ApplicationPolicy.prototype, "installType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockTaskAllowed" }),
        __metadata("design:type", Boolean)
    ], ApplicationPolicy.prototype, "lockTaskAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedConfiguration" }),
        __metadata("design:type", Map)
    ], ApplicationPolicy.prototype, "managedConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managedConfigurationTemplate" }),
        __metadata("design:type", ManagedConfigurationTemplate)
    ], ApplicationPolicy.prototype, "managedConfigurationTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumVersionCode" }),
        __metadata("design:type", Number)
    ], ApplicationPolicy.prototype, "minimumVersionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], ApplicationPolicy.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissionGrants", elemType: PermissionGrant }),
        __metadata("design:type", Array)
    ], ApplicationPolicy.prototype, "permissionGrants", void 0);
    return ApplicationPolicy;
}(SpeakeasyBase));
export { ApplicationPolicy };
