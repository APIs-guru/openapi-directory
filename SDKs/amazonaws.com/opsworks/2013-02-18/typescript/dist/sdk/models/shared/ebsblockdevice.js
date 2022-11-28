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
import { VolumeTypeEnum } from "./volumetypeenum";
// EbsBlockDevice
/**
 * Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type.
**/
var EbsBlockDevice = /** @class */ (function (_super) {
    __extends(EbsBlockDevice, _super);
    function EbsBlockDevice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeleteOnTermination" }),
        __metadata("design:type", Boolean)
    ], EbsBlockDevice.prototype, "deleteOnTermination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Iops" }),
        __metadata("design:type", Number)
    ], EbsBlockDevice.prototype, "iops", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SnapshotId" }),
        __metadata("design:type", String)
    ], EbsBlockDevice.prototype, "snapshotId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeSize" }),
        __metadata("design:type", Number)
    ], EbsBlockDevice.prototype, "volumeSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeType" }),
        __metadata("design:type", String)
    ], EbsBlockDevice.prototype, "volumeType", void 0);
    return EbsBlockDevice;
}(SpeakeasyBase));
export { EbsBlockDevice };
