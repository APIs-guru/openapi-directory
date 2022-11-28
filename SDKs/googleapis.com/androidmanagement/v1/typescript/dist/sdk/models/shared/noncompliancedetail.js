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
import { SpecificNonComplianceContext } from "./specificnoncompliancecontext";
export var NonComplianceDetailInstallationFailureReasonEnum;
(function (NonComplianceDetailInstallationFailureReasonEnum) {
    NonComplianceDetailInstallationFailureReasonEnum["InstallationFailureReasonUnspecified"] = "INSTALLATION_FAILURE_REASON_UNSPECIFIED";
    NonComplianceDetailInstallationFailureReasonEnum["InstallationFailureReasonUnknown"] = "INSTALLATION_FAILURE_REASON_UNKNOWN";
    NonComplianceDetailInstallationFailureReasonEnum["InProgress"] = "IN_PROGRESS";
    NonComplianceDetailInstallationFailureReasonEnum["NotFound"] = "NOT_FOUND";
    NonComplianceDetailInstallationFailureReasonEnum["NotCompatibleWithDevice"] = "NOT_COMPATIBLE_WITH_DEVICE";
    NonComplianceDetailInstallationFailureReasonEnum["NotApproved"] = "NOT_APPROVED";
    NonComplianceDetailInstallationFailureReasonEnum["PermissionsNotAccepted"] = "PERMISSIONS_NOT_ACCEPTED";
    NonComplianceDetailInstallationFailureReasonEnum["NotAvailableInCountry"] = "NOT_AVAILABLE_IN_COUNTRY";
    NonComplianceDetailInstallationFailureReasonEnum["NoLicensesRemaining"] = "NO_LICENSES_REMAINING";
    NonComplianceDetailInstallationFailureReasonEnum["NotEnrolled"] = "NOT_ENROLLED";
    NonComplianceDetailInstallationFailureReasonEnum["UserInvalid"] = "USER_INVALID";
})(NonComplianceDetailInstallationFailureReasonEnum || (NonComplianceDetailInstallationFailureReasonEnum = {}));
export var NonComplianceDetailNonComplianceReasonEnum;
(function (NonComplianceDetailNonComplianceReasonEnum) {
    NonComplianceDetailNonComplianceReasonEnum["NonComplianceReasonUnspecified"] = "NON_COMPLIANCE_REASON_UNSPECIFIED";
    NonComplianceDetailNonComplianceReasonEnum["ApiLevel"] = "API_LEVEL";
    NonComplianceDetailNonComplianceReasonEnum["ManagementMode"] = "MANAGEMENT_MODE";
    NonComplianceDetailNonComplianceReasonEnum["UserAction"] = "USER_ACTION";
    NonComplianceDetailNonComplianceReasonEnum["InvalidValue"] = "INVALID_VALUE";
    NonComplianceDetailNonComplianceReasonEnum["AppNotInstalled"] = "APP_NOT_INSTALLED";
    NonComplianceDetailNonComplianceReasonEnum["Unsupported"] = "UNSUPPORTED";
    NonComplianceDetailNonComplianceReasonEnum["AppInstalled"] = "APP_INSTALLED";
    NonComplianceDetailNonComplianceReasonEnum["Pending"] = "PENDING";
    NonComplianceDetailNonComplianceReasonEnum["AppIncompatible"] = "APP_INCOMPATIBLE";
    NonComplianceDetailNonComplianceReasonEnum["AppNotUpdated"] = "APP_NOT_UPDATED";
})(NonComplianceDetailNonComplianceReasonEnum || (NonComplianceDetailNonComplianceReasonEnum = {}));
export var NonComplianceDetailSpecificNonComplianceReasonEnum;
(function (NonComplianceDetailSpecificNonComplianceReasonEnum) {
    NonComplianceDetailSpecificNonComplianceReasonEnum["SpecificNonComplianceReasonUnspecified"] = "SPECIFIC_NON_COMPLIANCE_REASON_UNSPECIFIED";
    NonComplianceDetailSpecificNonComplianceReasonEnum["PasswordPoliciesUserCredentialsConfirmationRequired"] = "PASSWORD_POLICIES_USER_CREDENTIALS_CONFIRMATION_REQUIRED";
    NonComplianceDetailSpecificNonComplianceReasonEnum["PasswordPoliciesPasswordExpired"] = "PASSWORD_POLICIES_PASSWORD_EXPIRED";
    NonComplianceDetailSpecificNonComplianceReasonEnum["PasswordPoliciesPasswordNotSufficient"] = "PASSWORD_POLICIES_PASSWORD_NOT_SUFFICIENT";
    NonComplianceDetailSpecificNonComplianceReasonEnum["OncWifiInvalidValue"] = "ONC_WIFI_INVALID_VALUE";
    NonComplianceDetailSpecificNonComplianceReasonEnum["OncWifiApiLevel"] = "ONC_WIFI_API_LEVEL";
})(NonComplianceDetailSpecificNonComplianceReasonEnum || (NonComplianceDetailSpecificNonComplianceReasonEnum = {}));
// NonComplianceDetail
/**
 * Provides detail about non-compliance with a policy setting.
**/
var NonComplianceDetail = /** @class */ (function (_super) {
    __extends(NonComplianceDetail, _super);
    function NonComplianceDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentValue" }),
        __metadata("design:type", Object)
    ], NonComplianceDetail.prototype, "currentValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldPath" }),
        __metadata("design:type", String)
    ], NonComplianceDetail.prototype, "fieldPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installationFailureReason" }),
        __metadata("design:type", String)
    ], NonComplianceDetail.prototype, "installationFailureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonComplianceReason" }),
        __metadata("design:type", String)
    ], NonComplianceDetail.prototype, "nonComplianceReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], NonComplianceDetail.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settingName" }),
        __metadata("design:type", String)
    ], NonComplianceDetail.prototype, "settingName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specificNonComplianceContext" }),
        __metadata("design:type", SpecificNonComplianceContext)
    ], NonComplianceDetail.prototype, "specificNonComplianceContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=specificNonComplianceReason" }),
        __metadata("design:type", String)
    ], NonComplianceDetail.prototype, "specificNonComplianceReason", void 0);
    return NonComplianceDetail;
}(SpeakeasyBase));
export { NonComplianceDetail };
