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
// Volume
/**
 * Describes an instance's Amazon EBS volume.
**/
var Volume = /** @class */ (function (_super) {
    __extends(Volume, _super);
    function Volume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], Volume.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Device" }),
        __metadata("design:type", String)
    ], Volume.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ec2VolumeId" }),
        __metadata("design:type", String)
    ], Volume.prototype, "ec2VolumeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Encrypted" }),
        __metadata("design:type", Boolean)
    ], Volume.prototype, "encrypted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], Volume.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Iops" }),
        __metadata("design:type", Number)
    ], Volume.prototype, "iops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MountPoint" }),
        __metadata("design:type", String)
    ], Volume.prototype, "mountPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Volume.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RaidArrayId" }),
        __metadata("design:type", String)
    ], Volume.prototype, "raidArrayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Region" }),
        __metadata("design:type", String)
    ], Volume.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Size" }),
        __metadata("design:type", Number)
    ], Volume.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Volume.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeId" }),
        __metadata("design:type", String)
    ], Volume.prototype, "volumeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeType" }),
        __metadata("design:type", String)
    ], Volume.prototype, "volumeType", void 0);
    return Volume;
}(SpeakeasyBase));
export { Volume };
