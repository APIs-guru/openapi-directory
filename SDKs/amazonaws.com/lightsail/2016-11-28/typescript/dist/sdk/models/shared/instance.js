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
import { AddOn } from "./addon";
import { InstanceHardware } from "./instancehardware";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { ResourceLocation } from "./resourcelocation";
import { InstanceNetworking } from "./instancenetworking";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { InstanceState } from "./instancestate";
import { Tag } from "./tag";
// Instance
/**
 * Describes an instance (a virtual private server).
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addOns", elemType: AddOn }),
        __metadata("design:type", Array)
    ], Instance.prototype, "addOns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Instance.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blueprintId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "blueprintId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blueprintName" }),
        __metadata("design:type", String)
    ], Instance.prototype, "blueprintName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bundleId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "bundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Instance.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hardware" }),
        __metadata("design:type", InstanceHardware)
    ], Instance.prototype, "hardware", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddressType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "ipAddressType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6Addresses" }),
        __metadata("design:type", Array)
    ], Instance.prototype, "ipv6Addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isStaticIp" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "isStaticIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", ResourceLocation)
    ], Instance.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Instance.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networking" }),
        __metadata("design:type", InstanceNetworking)
    ], Instance.prototype, "networking", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateIpAddress" }),
        __metadata("design:type", String)
    ], Instance.prototype, "privateIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicIpAddress" }),
        __metadata("design:type", String)
    ], Instance.prototype, "publicIpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sshKeyName" }),
        __metadata("design:type", String)
    ], Instance.prototype, "sshKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", InstanceState)
    ], Instance.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportCode" }),
        __metadata("design:type", String)
    ], Instance.prototype, "supportCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Instance.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], Instance.prototype, "username", void 0);
    return Instance;
}(SpeakeasyBase));
export { Instance };
