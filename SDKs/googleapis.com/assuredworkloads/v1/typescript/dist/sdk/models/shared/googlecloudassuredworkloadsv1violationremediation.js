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
import { GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions } from "./googlecloudassuredworkloadsv1violationremediationinstructions";
export var GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum;
(function (GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum) {
    GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum["RemediationTypeUnspecified"] = "REMEDIATION_TYPE_UNSPECIFIED";
    GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum["RemediationBooleanOrgPolicyViolation"] = "REMEDIATION_BOOLEAN_ORG_POLICY_VIOLATION";
    GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum["RemediationListAllowedValuesOrgPolicyViolation"] = "REMEDIATION_LIST_ALLOWED_VALUES_ORG_POLICY_VIOLATION";
    GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum["RemediationListDeniedValuesOrgPolicyViolation"] = "REMEDIATION_LIST_DENIED_VALUES_ORG_POLICY_VIOLATION";
    GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum["RemediationRestrictCmekCryptoKeyProjectsOrgPolicyViolation"] = "REMEDIATION_RESTRICT_CMEK_CRYPTO_KEY_PROJECTS_ORG_POLICY_VIOLATION";
})(GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum || (GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum = {}));
// GoogleCloudAssuredworkloadsV1ViolationRemediation
/**
 * Represents remediation guidance to resolve compliance violation for AssuredWorkload
**/
var GoogleCloudAssuredworkloadsV1ViolationRemediation = /** @class */ (function (_super) {
    __extends(GoogleCloudAssuredworkloadsV1ViolationRemediation, _super);
    function GoogleCloudAssuredworkloadsV1ViolationRemediation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compliantValues" }),
        __metadata("design:type", Array)
    ], GoogleCloudAssuredworkloadsV1ViolationRemediation.prototype, "compliantValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instructions" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions)
    ], GoogleCloudAssuredworkloadsV1ViolationRemediation.prototype, "instructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remediationType" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1ViolationRemediation.prototype, "remediationType", void 0);
    return GoogleCloudAssuredworkloadsV1ViolationRemediation;
}(SpeakeasyBase));
export { GoogleCloudAssuredworkloadsV1ViolationRemediation };
