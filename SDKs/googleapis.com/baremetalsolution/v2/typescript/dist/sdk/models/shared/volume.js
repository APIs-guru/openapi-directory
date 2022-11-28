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
import { SnapshotReservationDetail } from "./snapshotreservationdetail";
export var VolumeProtocolEnum;
(function (VolumeProtocolEnum) {
    VolumeProtocolEnum["ProtocolUnspecified"] = "PROTOCOL_UNSPECIFIED";
    VolumeProtocolEnum["FibreChannel"] = "FIBRE_CHANNEL";
    VolumeProtocolEnum["Nfs"] = "NFS";
})(VolumeProtocolEnum || (VolumeProtocolEnum = {}));
export var VolumePerformanceTierEnum;
(function (VolumePerformanceTierEnum) {
    VolumePerformanceTierEnum["VolumePerformanceTierUnspecified"] = "VOLUME_PERFORMANCE_TIER_UNSPECIFIED";
    VolumePerformanceTierEnum["VolumePerformanceTierShared"] = "VOLUME_PERFORMANCE_TIER_SHARED";
    VolumePerformanceTierEnum["VolumePerformanceTierAssigned"] = "VOLUME_PERFORMANCE_TIER_ASSIGNED";
    VolumePerformanceTierEnum["VolumePerformanceTierHt"] = "VOLUME_PERFORMANCE_TIER_HT";
})(VolumePerformanceTierEnum || (VolumePerformanceTierEnum = {}));
export var VolumeSnapshotAutoDeleteBehaviorEnum;
(function (VolumeSnapshotAutoDeleteBehaviorEnum) {
    VolumeSnapshotAutoDeleteBehaviorEnum["SnapshotAutoDeleteBehaviorUnspecified"] = "SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED";
    VolumeSnapshotAutoDeleteBehaviorEnum["Disabled"] = "DISABLED";
    VolumeSnapshotAutoDeleteBehaviorEnum["OldestFirst"] = "OLDEST_FIRST";
    VolumeSnapshotAutoDeleteBehaviorEnum["NewestFirst"] = "NEWEST_FIRST";
})(VolumeSnapshotAutoDeleteBehaviorEnum || (VolumeSnapshotAutoDeleteBehaviorEnum = {}));
export var VolumeStateEnum;
(function (VolumeStateEnum) {
    VolumeStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    VolumeStateEnum["Creating"] = "CREATING";
    VolumeStateEnum["Ready"] = "READY";
    VolumeStateEnum["Deleting"] = "DELETING";
    VolumeStateEnum["Updating"] = "UPDATING";
})(VolumeStateEnum || (VolumeStateEnum = {}));
export var VolumeStorageTypeEnum;
(function (VolumeStorageTypeEnum) {
    VolumeStorageTypeEnum["StorageTypeUnspecified"] = "STORAGE_TYPE_UNSPECIFIED";
    VolumeStorageTypeEnum["Ssd"] = "SSD";
    VolumeStorageTypeEnum["Hdd"] = "HDD";
})(VolumeStorageTypeEnum || (VolumeStorageTypeEnum = {}));
// Volume
/**
 * A storage volume.
**/
var Volume = /** @class */ (function (_super) {
    __extends(Volume, _super);
    function Volume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoGrownSizeGib" }),
        __metadata("design:type", String)
    ], Volume.prototype, "autoGrownSizeGib", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bootVolume" }),
        __metadata("design:type", Boolean)
    ], Volume.prototype, "bootVolume", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentSizeGib" }),
        __metadata("design:type", String)
    ], Volume.prototype, "currentSizeGib", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emergencySizeGib" }),
        __metadata("design:type", String)
    ], Volume.prototype, "emergencySizeGib", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Volume.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Volume.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSizeGib" }),
        __metadata("design:type", String)
    ], Volume.prototype, "maxSizeGib", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Volume.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], Volume.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originallyRequestedSizeGib" }),
        __metadata("design:type", String)
    ], Volume.prototype, "originallyRequestedSizeGib", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performanceTier" }),
        __metadata("design:type", String)
    ], Volume.prototype, "performanceTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pod" }),
        __metadata("design:type", String)
    ], Volume.prototype, "pod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], Volume.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remainingSpaceGib" }),
        __metadata("design:type", String)
    ], Volume.prototype, "remainingSpaceGib", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestedSizeGib" }),
        __metadata("design:type", String)
    ], Volume.prototype, "requestedSizeGib", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotAutoDeleteBehavior" }),
        __metadata("design:type", String)
    ], Volume.prototype, "snapshotAutoDeleteBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotEnabled" }),
        __metadata("design:type", Boolean)
    ], Volume.prototype, "snapshotEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotReservationDetail" }),
        __metadata("design:type", SnapshotReservationDetail)
    ], Volume.prototype, "snapshotReservationDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotSchedulePolicy" }),
        __metadata("design:type", String)
    ], Volume.prototype, "snapshotSchedulePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Volume.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageType" }),
        __metadata("design:type", String)
    ], Volume.prototype, "storageType", void 0);
    return Volume;
}(SpeakeasyBase));
export { Volume };
// VolumeInput
/**
 * A storage volume.
**/
var VolumeInput = /** @class */ (function (_super) {
    __extends(VolumeInput, _super);
    function VolumeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoGrownSizeGib" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "autoGrownSizeGib", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentSizeGib" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "currentSizeGib", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emergencySizeGib" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "emergencySizeGib", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], VolumeInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxSizeGib" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "maxSizeGib", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originallyRequestedSizeGib" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "originallyRequestedSizeGib", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=performanceTier" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "performanceTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pod" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "pod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remainingSpaceGib" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "remainingSpaceGib", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestedSizeGib" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "requestedSizeGib", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotAutoDeleteBehavior" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "snapshotAutoDeleteBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotEnabled" }),
        __metadata("design:type", Boolean)
    ], VolumeInput.prototype, "snapshotEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotReservationDetail" }),
        __metadata("design:type", SnapshotReservationDetail)
    ], VolumeInput.prototype, "snapshotReservationDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snapshotSchedulePolicy" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "snapshotSchedulePolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageType" }),
        __metadata("design:type", String)
    ], VolumeInput.prototype, "storageType", void 0);
    return VolumeInput;
}(SpeakeasyBase));
export { VolumeInput };
