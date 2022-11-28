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
import { ContactInfo } from "./contactinfo";
import { ExternalData } from "./externaldata";
import { SigninDetail } from "./signindetail";
import { TermsAndConditions } from "./termsandconditions";
export var EnterpriseEnabledNotificationTypesEnum;
(function (EnterpriseEnabledNotificationTypesEnum) {
    EnterpriseEnabledNotificationTypesEnum["NotificationTypeUnspecified"] = "NOTIFICATION_TYPE_UNSPECIFIED";
    EnterpriseEnabledNotificationTypesEnum["Enrollment"] = "ENROLLMENT";
    EnterpriseEnabledNotificationTypesEnum["ComplianceReport"] = "COMPLIANCE_REPORT";
    EnterpriseEnabledNotificationTypesEnum["StatusReport"] = "STATUS_REPORT";
    EnterpriseEnabledNotificationTypesEnum["Command"] = "COMMAND";
    EnterpriseEnabledNotificationTypesEnum["UsageLogs"] = "USAGE_LOGS";
})(EnterpriseEnabledNotificationTypesEnum || (EnterpriseEnabledNotificationTypesEnum = {}));
// Enterprise
/**
 * The configuration applied to an enterprise.
**/
var Enterprise = /** @class */ (function (_super) {
    __extends(Enterprise, _super);
    function Enterprise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appAutoApprovalEnabled" }),
        __metadata("design:type", Boolean)
    ], Enterprise.prototype, "appAutoApprovalEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactInfo" }),
        __metadata("design:type", ContactInfo)
    ], Enterprise.prototype, "contactInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabledNotificationTypes" }),
        __metadata("design:type", Array)
    ], Enterprise.prototype, "enabledNotificationTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enterpriseDisplayName" }),
        __metadata("design:type", String)
    ], Enterprise.prototype, "enterpriseDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", ExternalData)
    ], Enterprise.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Enterprise.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryColor" }),
        __metadata("design:type", Number)
    ], Enterprise.prototype, "primaryColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pubsubTopic" }),
        __metadata("design:type", String)
    ], Enterprise.prototype, "pubsubTopic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signinDetails", elemType: SigninDetail }),
        __metadata("design:type", Array)
    ], Enterprise.prototype, "signinDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termsAndConditions", elemType: TermsAndConditions }),
        __metadata("design:type", Array)
    ], Enterprise.prototype, "termsAndConditions", void 0);
    return Enterprise;
}(SpeakeasyBase));
export { Enterprise };
