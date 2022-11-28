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
export var LunMultiprotocolTypeEnum;
(function (LunMultiprotocolTypeEnum) {
    LunMultiprotocolTypeEnum["MultiprotocolTypeUnspecified"] = "MULTIPROTOCOL_TYPE_UNSPECIFIED";
    LunMultiprotocolTypeEnum["Linux"] = "LINUX";
})(LunMultiprotocolTypeEnum || (LunMultiprotocolTypeEnum = {}));
export var LunStateEnum;
(function (LunStateEnum) {
    LunStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    LunStateEnum["Creating"] = "CREATING";
    LunStateEnum["Updating"] = "UPDATING";
    LunStateEnum["Ready"] = "READY";
    LunStateEnum["Deleting"] = "DELETING";
})(LunStateEnum || (LunStateEnum = {}));
export var LunStorageTypeEnum;
(function (LunStorageTypeEnum) {
    LunStorageTypeEnum["StorageTypeUnspecified"] = "STORAGE_TYPE_UNSPECIFIED";
    LunStorageTypeEnum["Ssd"] = "SSD";
    LunStorageTypeEnum["Hdd"] = "HDD";
})(LunStorageTypeEnum || (LunStorageTypeEnum = {}));
// LunInput
/**
 * A storage volume logical unit number (LUN).
**/
var LunInput = /** @class */ (function (_super) {
    __extends(LunInput, _super);
    function LunInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootLun" }),
        __metadata("design:type", Boolean)
    ], LunInput.prototype, "bootLun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], LunInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiprotocolType" }),
        __metadata("design:type", String)
    ], LunInput.prototype, "multiprotocolType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shareable" }),
        __metadata("design:type", Boolean)
    ], LunInput.prototype, "shareable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeGb" }),
        __metadata("design:type", String)
    ], LunInput.prototype, "sizeGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], LunInput.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageType" }),
        __metadata("design:type", String)
    ], LunInput.prototype, "storageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageVolume" }),
        __metadata("design:type", String)
    ], LunInput.prototype, "storageVolume", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wwid" }),
        __metadata("design:type", String)
    ], LunInput.prototype, "wwid", void 0);
    return LunInput;
}(SpeakeasyBase));
export { LunInput };
// Lun
/**
 * A storage volume logical unit number (LUN).
**/
var Lun = /** @class */ (function (_super) {
    __extends(Lun, _super);
    function Lun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootLun" }),
        __metadata("design:type", Boolean)
    ], Lun.prototype, "bootLun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Lun.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiprotocolType" }),
        __metadata("design:type", String)
    ], Lun.prototype, "multiprotocolType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Lun.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shareable" }),
        __metadata("design:type", Boolean)
    ], Lun.prototype, "shareable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeGb" }),
        __metadata("design:type", String)
    ], Lun.prototype, "sizeGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Lun.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageType" }),
        __metadata("design:type", String)
    ], Lun.prototype, "storageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageVolume" }),
        __metadata("design:type", String)
    ], Lun.prototype, "storageVolume", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wwid" }),
        __metadata("design:type", String)
    ], Lun.prototype, "wwid", void 0);
    return Lun;
}(SpeakeasyBase));
export { Lun };
