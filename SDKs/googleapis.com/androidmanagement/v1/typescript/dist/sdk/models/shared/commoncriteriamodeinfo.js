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
export var CommonCriteriaModeInfoCommonCriteriaModeStatusEnum;
(function (CommonCriteriaModeInfoCommonCriteriaModeStatusEnum) {
    CommonCriteriaModeInfoCommonCriteriaModeStatusEnum["CommonCriteriaModeStatusUnknown"] = "COMMON_CRITERIA_MODE_STATUS_UNKNOWN";
    CommonCriteriaModeInfoCommonCriteriaModeStatusEnum["CommonCriteriaModeDisabled"] = "COMMON_CRITERIA_MODE_DISABLED";
    CommonCriteriaModeInfoCommonCriteriaModeStatusEnum["CommonCriteriaModeEnabled"] = "COMMON_CRITERIA_MODE_ENABLED";
})(CommonCriteriaModeInfoCommonCriteriaModeStatusEnum || (CommonCriteriaModeInfoCommonCriteriaModeStatusEnum = {}));
// CommonCriteriaModeInfo
/**
 * Information about Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC).This information is only available if statusReportingSettings.commonCriteriaModeEnabled is true in the device's policy.
**/
var CommonCriteriaModeInfo = /** @class */ (function (_super) {
    __extends(CommonCriteriaModeInfo, _super);
    function CommonCriteriaModeInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commonCriteriaModeStatus" }),
        __metadata("design:type", String)
    ], CommonCriteriaModeInfo.prototype, "commonCriteriaModeStatus", void 0);
    return CommonCriteriaModeInfo;
}(SpeakeasyBase));
export { CommonCriteriaModeInfo };
