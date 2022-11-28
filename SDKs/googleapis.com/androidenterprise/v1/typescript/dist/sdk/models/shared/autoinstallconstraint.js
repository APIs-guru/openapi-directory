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
export var AutoInstallConstraintChargingStateConstraintEnum;
(function (AutoInstallConstraintChargingStateConstraintEnum) {
    AutoInstallConstraintChargingStateConstraintEnum["ChargingStateConstraintUnspecified"] = "chargingStateConstraintUnspecified";
    AutoInstallConstraintChargingStateConstraintEnum["ChargingNotRequired"] = "chargingNotRequired";
    AutoInstallConstraintChargingStateConstraintEnum["ChargingRequired"] = "chargingRequired";
})(AutoInstallConstraintChargingStateConstraintEnum || (AutoInstallConstraintChargingStateConstraintEnum = {}));
export var AutoInstallConstraintDeviceIdleStateConstraintEnum;
(function (AutoInstallConstraintDeviceIdleStateConstraintEnum) {
    AutoInstallConstraintDeviceIdleStateConstraintEnum["DeviceIdleStateConstraintUnspecified"] = "deviceIdleStateConstraintUnspecified";
    AutoInstallConstraintDeviceIdleStateConstraintEnum["DeviceIdleNotRequired"] = "deviceIdleNotRequired";
    AutoInstallConstraintDeviceIdleStateConstraintEnum["DeviceIdleRequired"] = "deviceIdleRequired";
})(AutoInstallConstraintDeviceIdleStateConstraintEnum || (AutoInstallConstraintDeviceIdleStateConstraintEnum = {}));
export var AutoInstallConstraintNetworkTypeConstraintEnum;
(function (AutoInstallConstraintNetworkTypeConstraintEnum) {
    AutoInstallConstraintNetworkTypeConstraintEnum["NetworkTypeConstraintUnspecified"] = "networkTypeConstraintUnspecified";
    AutoInstallConstraintNetworkTypeConstraintEnum["AnyNetwork"] = "anyNetwork";
    AutoInstallConstraintNetworkTypeConstraintEnum["UnmeteredNetwork"] = "unmeteredNetwork";
})(AutoInstallConstraintNetworkTypeConstraintEnum || (AutoInstallConstraintNetworkTypeConstraintEnum = {}));
// AutoInstallConstraint
/**
 * The auto-install constraint. Defines a set of restrictions for installation. At least one of the fields must be set.
**/
var AutoInstallConstraint = /** @class */ (function (_super) {
    __extends(AutoInstallConstraint, _super);
    function AutoInstallConstraint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chargingStateConstraint" }),
        __metadata("design:type", String)
    ], AutoInstallConstraint.prototype, "chargingStateConstraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceIdleStateConstraint" }),
        __metadata("design:type", String)
    ], AutoInstallConstraint.prototype, "deviceIdleStateConstraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkTypeConstraint" }),
        __metadata("design:type", String)
    ], AutoInstallConstraint.prototype, "networkTypeConstraint", void 0);
    return AutoInstallConstraint;
}(SpeakeasyBase));
export { AutoInstallConstraint };
