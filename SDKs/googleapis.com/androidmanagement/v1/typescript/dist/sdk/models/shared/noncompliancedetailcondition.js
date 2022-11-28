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
export var NonComplianceDetailConditionNonComplianceReasonEnum;
(function (NonComplianceDetailConditionNonComplianceReasonEnum) {
    NonComplianceDetailConditionNonComplianceReasonEnum["NonComplianceReasonUnspecified"] = "NON_COMPLIANCE_REASON_UNSPECIFIED";
    NonComplianceDetailConditionNonComplianceReasonEnum["ApiLevel"] = "API_LEVEL";
    NonComplianceDetailConditionNonComplianceReasonEnum["ManagementMode"] = "MANAGEMENT_MODE";
    NonComplianceDetailConditionNonComplianceReasonEnum["UserAction"] = "USER_ACTION";
    NonComplianceDetailConditionNonComplianceReasonEnum["InvalidValue"] = "INVALID_VALUE";
    NonComplianceDetailConditionNonComplianceReasonEnum["AppNotInstalled"] = "APP_NOT_INSTALLED";
    NonComplianceDetailConditionNonComplianceReasonEnum["Unsupported"] = "UNSUPPORTED";
    NonComplianceDetailConditionNonComplianceReasonEnum["AppInstalled"] = "APP_INSTALLED";
    NonComplianceDetailConditionNonComplianceReasonEnum["Pending"] = "PENDING";
    NonComplianceDetailConditionNonComplianceReasonEnum["AppIncompatible"] = "APP_INCOMPATIBLE";
    NonComplianceDetailConditionNonComplianceReasonEnum["AppNotUpdated"] = "APP_NOT_UPDATED";
})(NonComplianceDetailConditionNonComplianceReasonEnum || (NonComplianceDetailConditionNonComplianceReasonEnum = {}));
// NonComplianceDetailCondition
/**
 * A compliance rule condition which is satisfied if there exists any matching NonComplianceDetail for the device. A NonComplianceDetail matches a NonComplianceDetailCondition if all the fields which are set within the NonComplianceDetailCondition match the corresponding NonComplianceDetail fields.
**/
var NonComplianceDetailCondition = /** @class */ (function (_super) {
    __extends(NonComplianceDetailCondition, _super);
    function NonComplianceDetailCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonComplianceReason" }),
        __metadata("design:type", String)
    ], NonComplianceDetailCondition.prototype, "nonComplianceReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], NonComplianceDetailCondition.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settingName" }),
        __metadata("design:type", String)
    ], NonComplianceDetailCondition.prototype, "settingName", void 0);
    return NonComplianceDetailCondition;
}(SpeakeasyBase));
export { NonComplianceDetailCondition };
