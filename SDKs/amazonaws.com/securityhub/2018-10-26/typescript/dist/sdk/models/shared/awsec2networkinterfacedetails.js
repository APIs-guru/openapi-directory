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
import { AwsEc2NetworkInterfaceAttachment } from "./awsec2networkinterfaceattachment";
import { AwsEc2NetworkInterfaceIpV6AddressDetail } from "./awsec2networkinterfaceipv6addressdetail";
import { AwsEc2NetworkInterfacePrivateIpAddressDetail } from "./awsec2networkinterfaceprivateipaddressdetail";
import { AwsEc2NetworkInterfaceSecurityGroup } from "./awsec2networkinterfacesecuritygroup";
// AwsEc2NetworkInterfaceDetails
/**
 * Details about the network interface
**/
var AwsEc2NetworkInterfaceDetails = /** @class */ (function (_super) {
    __extends(AwsEc2NetworkInterfaceDetails, _super);
    function AwsEc2NetworkInterfaceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attachment" }),
        __metadata("design:type", AwsEc2NetworkInterfaceAttachment)
    ], AwsEc2NetworkInterfaceDetails.prototype, "attachment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpV6Addresses", elemType: AwsEc2NetworkInterfaceIpV6AddressDetail }),
        __metadata("design:type", Array)
    ], AwsEc2NetworkInterfaceDetails.prototype, "ipV6Addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkInterfaceId" }),
        __metadata("design:type", String)
    ], AwsEc2NetworkInterfaceDetails.prototype, "networkInterfaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrivateIpAddresses", elemType: AwsEc2NetworkInterfacePrivateIpAddressDetail }),
        __metadata("design:type", Array)
    ], AwsEc2NetworkInterfaceDetails.prototype, "privateIpAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublicDnsName" }),
        __metadata("design:type", String)
    ], AwsEc2NetworkInterfaceDetails.prototype, "publicDnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublicIp" }),
        __metadata("design:type", String)
    ], AwsEc2NetworkInterfaceDetails.prototype, "publicIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityGroups", elemType: AwsEc2NetworkInterfaceSecurityGroup }),
        __metadata("design:type", Array)
    ], AwsEc2NetworkInterfaceDetails.prototype, "securityGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceDestCheck" }),
        __metadata("design:type", Boolean)
    ], AwsEc2NetworkInterfaceDetails.prototype, "sourceDestCheck", void 0);
    return AwsEc2NetworkInterfaceDetails;
}(SpeakeasyBase));
export { AwsEc2NetworkInterfaceDetails };
