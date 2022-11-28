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
// RaidArray
/**
 * Describes an instance's RAID array.
**/
var RaidArray = /** @class */ (function (_super) {
    __extends(RaidArray, _super);
    function RaidArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], RaidArray.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", String)
    ], RaidArray.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Device" }),
        __metadata("design:type", String)
    ], RaidArray.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], RaidArray.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Iops" }),
        __metadata("design:type", Number)
    ], RaidArray.prototype, "iops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MountPoint" }),
        __metadata("design:type", String)
    ], RaidArray.prototype, "mountPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], RaidArray.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfDisks" }),
        __metadata("design:type", Number)
    ], RaidArray.prototype, "numberOfDisks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RaidArrayId" }),
        __metadata("design:type", String)
    ], RaidArray.prototype, "raidArrayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RaidLevel" }),
        __metadata("design:type", Number)
    ], RaidArray.prototype, "raidLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Size" }),
        __metadata("design:type", Number)
    ], RaidArray.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StackId" }),
        __metadata("design:type", String)
    ], RaidArray.prototype, "stackId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeType" }),
        __metadata("design:type", String)
    ], RaidArray.prototype, "volumeType", void 0);
    return RaidArray;
}(SpeakeasyBase));
export { RaidArray };
