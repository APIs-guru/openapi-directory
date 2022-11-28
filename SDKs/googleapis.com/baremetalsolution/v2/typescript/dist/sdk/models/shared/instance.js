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
import { GoogleCloudBaremetalsolutionV2LogicalInterface } from "./googlecloudbaremetalsolutionv2logicalinterface";
import { LunInput } from "./lun";
import { VolumeInput } from "./volume";
import { Lun } from "./lun";
import { Network } from "./network";
import { Volume } from "./volume";
export var InstanceStateEnum;
(function (InstanceStateEnum) {
    InstanceStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    InstanceStateEnum["Provisioning"] = "PROVISIONING";
    InstanceStateEnum["Running"] = "RUNNING";
    InstanceStateEnum["Deleted"] = "DELETED";
    InstanceStateEnum["Updating"] = "UPDATING";
    InstanceStateEnum["Starting"] = "STARTING";
    InstanceStateEnum["Stopping"] = "STOPPING";
    InstanceStateEnum["Shutdown"] = "SHUTDOWN";
})(InstanceStateEnum || (InstanceStateEnum = {}));
// InstanceInput
/**
 * A server.
**/
var InstanceInput = /** @class */ (function (_super) {
    __extends(InstanceInput, _super);
    function InstanceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hyperthreadingEnabled" }),
        __metadata("design:type", Boolean)
    ], InstanceInput.prototype, "hyperthreadingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], InstanceInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logicalInterfaces", elemType: GoogleCloudBaremetalsolutionV2LogicalInterface }),
        __metadata("design:type", Array)
    ], InstanceInput.prototype, "logicalInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=luns", elemType: LunInput }),
        __metadata("design:type", Array)
    ], InstanceInput.prototype, "luns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkTemplate" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "networkTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osImage" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "osImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pod" }),
        __metadata("design:type", String)
    ], InstanceInput.prototype, "pod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: VolumeInput }),
        __metadata("design:type", Array)
    ], InstanceInput.prototype, "volumes", void 0);
    return InstanceInput;
}(SpeakeasyBase));
export { InstanceInput };
// Instance
/**
 * A server.
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hyperthreadingEnabled" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "hyperthreadingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Instance.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactiveSerialConsoleEnabled" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "interactiveSerialConsoleEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Instance.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logicalInterfaces", elemType: GoogleCloudBaremetalsolutionV2LogicalInterface }),
        __metadata("design:type", Array)
    ], Instance.prototype, "logicalInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loginInfo" }),
        __metadata("design:type", String)
    ], Instance.prototype, "loginInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=luns", elemType: Lun }),
        __metadata("design:type", Array)
    ], Instance.prototype, "luns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], Instance.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Instance.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkTemplate" }),
        __metadata("design:type", String)
    ], Instance.prototype, "networkTemplate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networks", elemType: Network }),
        __metadata("design:type", Array)
    ], Instance.prototype, "networks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osImage" }),
        __metadata("design:type", String)
    ], Instance.prototype, "osImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pod" }),
        __metadata("design:type", String)
    ], Instance.prototype, "pod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Instance.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume }),
        __metadata("design:type", Array)
    ], Instance.prototype, "volumes", void 0);
    return Instance;
}(SpeakeasyBase));
export { Instance };
