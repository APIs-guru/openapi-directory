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
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { DiskStateEnum } from "./diskstateenum";
import { Tag } from "./tag";
// Disk
/**
 * Describes a block storage disk.
**/
var Disk = /** @class */ (function (_super) {
    __extends(Disk, _super);
    function Disk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addOns", elemType: AddOn }),
        __metadata("design:type", Array)
    ], Disk.prototype, "addOns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Disk.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachedTo" }),
        __metadata("design:type", String)
    ], Disk.prototype, "attachedTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachmentState" }),
        __metadata("design:type", String)
    ], Disk.prototype, "attachmentState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Disk.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gbInUse" }),
        __metadata("design:type", Number)
    ], Disk.prototype, "gbInUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iops" }),
        __metadata("design:type", Number)
    ], Disk.prototype, "iops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAttached" }),
        __metadata("design:type", Boolean)
    ], Disk.prototype, "isAttached", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSystemDisk" }),
        __metadata("design:type", Boolean)
    ], Disk.prototype, "isSystemDisk", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", ResourceLocation)
    ], Disk.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Disk.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], Disk.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], Disk.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeInGb" }),
        __metadata("design:type", Number)
    ], Disk.prototype, "sizeInGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Disk.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportCode" }),
        __metadata("design:type", String)
    ], Disk.prototype, "supportCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Disk.prototype, "tags", void 0);
    return Disk;
}(SpeakeasyBase));
export { Disk };
