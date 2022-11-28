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
import { LunRange } from "./lunrange";
import { NfsExport } from "./nfsexport";
export var VolumeConfigProtocolEnum;
(function (VolumeConfigProtocolEnum) {
    VolumeConfigProtocolEnum["ProtocolUnspecified"] = "PROTOCOL_UNSPECIFIED";
    VolumeConfigProtocolEnum["ProtocolFc"] = "PROTOCOL_FC";
    VolumeConfigProtocolEnum["ProtocolNfs"] = "PROTOCOL_NFS";
})(VolumeConfigProtocolEnum || (VolumeConfigProtocolEnum = {}));
export var VolumeConfigTypeEnum;
(function (VolumeConfigTypeEnum) {
    VolumeConfigTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    VolumeConfigTypeEnum["Flash"] = "FLASH";
    VolumeConfigTypeEnum["Disk"] = "DISK";
})(VolumeConfigTypeEnum || (VolumeConfigTypeEnum = {}));
// VolumeConfig
/**
 * Configuration parameters for a new volume.
**/
var VolumeConfig = /** @class */ (function (_super) {
    __extends(VolumeConfig, _super);
    function VolumeConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], VolumeConfig.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], VolumeConfig.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lunRanges", elemType: LunRange }),
        __metadata("design:type", Array)
    ], VolumeConfig.prototype, "lunRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineIds" }),
        __metadata("design:type", Array)
    ], VolumeConfig.prototype, "machineIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nfsExports", elemType: NfsExport }),
        __metadata("design:type", Array)
    ], VolumeConfig.prototype, "nfsExports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], VolumeConfig.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeGb" }),
        __metadata("design:type", Number)
    ], VolumeConfig.prototype, "sizeGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotsEnabled" }),
        __metadata("design:type", Boolean)
    ], VolumeConfig.prototype, "snapshotsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], VolumeConfig.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userNote" }),
        __metadata("design:type", String)
    ], VolumeConfig.prototype, "userNote", void 0);
    return VolumeConfig;
}(SpeakeasyBase));
export { VolumeConfig };
