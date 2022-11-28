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
// AwsEc2NetworkInterfaceAttachment
/**
 * Information about the network interface attachment.
**/
var AwsEc2NetworkInterfaceAttachment = /** @class */ (function (_super) {
    __extends(AwsEc2NetworkInterfaceAttachment, _super);
    function AwsEc2NetworkInterfaceAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttachTime" }),
        __metadata("design:type", String)
    ], AwsEc2NetworkInterfaceAttachment.prototype, "attachTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AttachmentId" }),
        __metadata("design:type", String)
    ], AwsEc2NetworkInterfaceAttachment.prototype, "attachmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeleteOnTermination" }),
        __metadata("design:type", Boolean)
    ], AwsEc2NetworkInterfaceAttachment.prototype, "deleteOnTermination", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeviceIndex" }),
        __metadata("design:type", Number)
    ], AwsEc2NetworkInterfaceAttachment.prototype, "deviceIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], AwsEc2NetworkInterfaceAttachment.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceOwnerId" }),
        __metadata("design:type", String)
    ], AwsEc2NetworkInterfaceAttachment.prototype, "instanceOwnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], AwsEc2NetworkInterfaceAttachment.prototype, "status", void 0);
    return AwsEc2NetworkInterfaceAttachment;
}(SpeakeasyBase));
export { AwsEc2NetworkInterfaceAttachment };
