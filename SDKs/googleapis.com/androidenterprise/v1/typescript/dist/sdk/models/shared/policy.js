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
import { MaintenanceWindow } from "./maintenancewindow";
import { ProductPolicy } from "./productpolicy";
export var PolicyAutoUpdatePolicyEnum;
(function (PolicyAutoUpdatePolicyEnum) {
    PolicyAutoUpdatePolicyEnum["AutoUpdatePolicyUnspecified"] = "autoUpdatePolicyUnspecified";
    PolicyAutoUpdatePolicyEnum["ChoiceToTheUser"] = "choiceToTheUser";
    PolicyAutoUpdatePolicyEnum["Never"] = "never";
    PolicyAutoUpdatePolicyEnum["WifiOnly"] = "wifiOnly";
    PolicyAutoUpdatePolicyEnum["Always"] = "always";
})(PolicyAutoUpdatePolicyEnum || (PolicyAutoUpdatePolicyEnum = {}));
export var PolicyDeviceReportPolicyEnum;
(function (PolicyDeviceReportPolicyEnum) {
    PolicyDeviceReportPolicyEnum["DeviceReportPolicyUnspecified"] = "deviceReportPolicyUnspecified";
    PolicyDeviceReportPolicyEnum["DeviceReportDisabled"] = "deviceReportDisabled";
    PolicyDeviceReportPolicyEnum["DeviceReportEnabled"] = "deviceReportEnabled";
})(PolicyDeviceReportPolicyEnum || (PolicyDeviceReportPolicyEnum = {}));
export var PolicyProductAvailabilityPolicyEnum;
(function (PolicyProductAvailabilityPolicyEnum) {
    PolicyProductAvailabilityPolicyEnum["ProductAvailabilityPolicyUnspecified"] = "productAvailabilityPolicyUnspecified";
    PolicyProductAvailabilityPolicyEnum["Whitelist"] = "whitelist";
    PolicyProductAvailabilityPolicyEnum["All"] = "all";
})(PolicyProductAvailabilityPolicyEnum || (PolicyProductAvailabilityPolicyEnum = {}));
// Policy
/**
 * The device policy for a given managed device.
**/
var Policy = /** @class */ (function (_super) {
    __extends(Policy, _super);
    function Policy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoUpdatePolicy" }),
        __metadata("design:type", String)
    ], Policy.prototype, "autoUpdatePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceReportPolicy" }),
        __metadata("design:type", String)
    ], Policy.prototype, "deviceReportPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenanceWindow" }),
        __metadata("design:type", MaintenanceWindow)
    ], Policy.prototype, "maintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productAvailabilityPolicy" }),
        __metadata("design:type", String)
    ], Policy.prototype, "productAvailabilityPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productPolicy", elemType: ProductPolicy }),
        __metadata("design:type", Array)
    ], Policy.prototype, "productPolicy", void 0);
    return Policy;
}(SpeakeasyBase));
export { Policy };
