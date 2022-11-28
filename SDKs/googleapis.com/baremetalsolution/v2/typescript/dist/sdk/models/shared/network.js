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
import { NetworkMountPoint } from "./networkmountpoint";
import { NetworkAddressReservation } from "./networkaddressreservation";
import { Vrf } from "./vrf";
export var NetworkStateEnum;
(function (NetworkStateEnum) {
    NetworkStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    NetworkStateEnum["Provisioning"] = "PROVISIONING";
    NetworkStateEnum["Provisioned"] = "PROVISIONED";
    NetworkStateEnum["Deprovisioning"] = "DEPROVISIONING";
    NetworkStateEnum["Updating"] = "UPDATING";
})(NetworkStateEnum || (NetworkStateEnum = {}));
export var NetworkTypeEnum;
(function (NetworkTypeEnum) {
    NetworkTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    NetworkTypeEnum["Client"] = "CLIENT";
    NetworkTypeEnum["Private"] = "PRIVATE";
})(NetworkTypeEnum || (NetworkTypeEnum = {}));
// Network
/**
 * A Network.
**/
var Network = /** @class */ (function (_super) {
    __extends(Network, _super);
    function Network() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cidr" }),
        __metadata("design:type", String)
    ], Network.prototype, "cidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gatewayIp" }),
        __metadata("design:type", String)
    ], Network.prototype, "gatewayIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Network.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddress" }),
        __metadata("design:type", String)
    ], Network.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jumboFramesEnabled" }),
        __metadata("design:type", Boolean)
    ], Network.prototype, "jumboFramesEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Network.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=macAddress" }),
        __metadata("design:type", Array)
    ], Network.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mountPoints", elemType: NetworkMountPoint }),
        __metadata("design:type", Array)
    ], Network.prototype, "mountPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Network.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pod" }),
        __metadata("design:type", String)
    ], Network.prototype, "pod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reservations", elemType: NetworkAddressReservation }),
        __metadata("design:type", Array)
    ], Network.prototype, "reservations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servicesCidr" }),
        __metadata("design:type", String)
    ], Network.prototype, "servicesCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Network.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Network.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlanId" }),
        __metadata("design:type", String)
    ], Network.prototype, "vlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vrf" }),
        __metadata("design:type", Vrf)
    ], Network.prototype, "vrf", void 0);
    return Network;
}(SpeakeasyBase));
export { Network };
