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
import { GoogleCloudAssuredworkloadsV1beta1ViolationRemediation } from "./googlecloudassuredworkloadsv1beta1violationremediation";
export var GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum;
(function (GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum) {
    GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum["Resolved"] = "RESOLVED";
    GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum["Unresolved"] = "UNRESOLVED";
    GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum["Exception"] = "EXCEPTION";
})(GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum || (GoogleCloudAssuredworkloadsV1beta1ViolationStateEnum = {}));
// GoogleCloudAssuredworkloadsV1beta1Violation
/**
 * Workload monitoring Violation.
**/
var GoogleCloudAssuredworkloadsV1beta1Violation = /** @class */ (function (_super) {
    __extends(GoogleCloudAssuredworkloadsV1beta1Violation, _super);
    function GoogleCloudAssuredworkloadsV1beta1Violation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acknowledged" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudAssuredworkloadsV1beta1Violation.prototype, "acknowledged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acknowledgementTime" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Violation.prototype, "acknowledgementTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auditLogLink" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Violation.prototype, "auditLogLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=beginTime" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Violation.prototype, "beginTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Violation.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Violation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exceptionAuditLogLink" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Violation.prototype, "exceptionAuditLogLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Violation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonCompliantOrgPolicy" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Violation.prototype, "nonCompliantOrgPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orgPolicyConstraint" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Violation.prototype, "orgPolicyConstraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remediation" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1ViolationRemediation)
    ], GoogleCloudAssuredworkloadsV1beta1Violation.prototype, "remediation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolveTime" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Violation.prototype, "resolveTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Violation.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Violation.prototype, "updateTime", void 0);
    return GoogleCloudAssuredworkloadsV1beta1Violation;
}(SpeakeasyBase));
export { GoogleCloudAssuredworkloadsV1beta1Violation };
