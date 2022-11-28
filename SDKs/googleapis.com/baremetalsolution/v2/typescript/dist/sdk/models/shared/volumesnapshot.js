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
export var VolumeSnapshotTypeEnum;
(function (VolumeSnapshotTypeEnum) {
    VolumeSnapshotTypeEnum["SnapshotTypeUnspecified"] = "SNAPSHOT_TYPE_UNSPECIFIED";
    VolumeSnapshotTypeEnum["AdHoc"] = "AD_HOC";
    VolumeSnapshotTypeEnum["Scheduled"] = "SCHEDULED";
})(VolumeSnapshotTypeEnum || (VolumeSnapshotTypeEnum = {}));
// VolumeSnapshot
/**
 * A snapshot of a volume. Only boot volumes can have snapshots.
**/
var VolumeSnapshot = /** @class */ (function (_super) {
    __extends(VolumeSnapshot, _super);
    function VolumeSnapshot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], VolumeSnapshot.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], VolumeSnapshot.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], VolumeSnapshot.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VolumeSnapshot.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageVolume" }),
        __metadata("design:type", String)
    ], VolumeSnapshot.prototype, "storageVolume", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], VolumeSnapshot.prototype, "type", void 0);
    return VolumeSnapshot;
}(SpeakeasyBase));
export { VolumeSnapshot };
// VolumeSnapshotInput
/**
 * A snapshot of a volume. Only boot volumes can have snapshots.
**/
var VolumeSnapshotInput = /** @class */ (function (_super) {
    __extends(VolumeSnapshotInput, _super);
    function VolumeSnapshotInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], VolumeSnapshotInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VolumeSnapshotInput.prototype, "name", void 0);
    return VolumeSnapshotInput;
}(SpeakeasyBase));
export { VolumeSnapshotInput };
