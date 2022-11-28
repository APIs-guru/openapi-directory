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
import { Ipv6CidrBlockAssociation } from "./ipv6cidrblockassociation";
// AwsEc2SubnetDetails
/**
 * Contains information about a subnet in Amazon EC2.
**/
var AwsEc2SubnetDetails = /** @class */ (function (_super) {
    __extends(AwsEc2SubnetDetails, _super);
    function AwsEc2SubnetDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AssignIpv6AddressOnCreation" }),
        __metadata("design:type", Boolean)
    ], AwsEc2SubnetDetails.prototype, "assignIpv6AddressOnCreation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], AwsEc2SubnetDetails.prototype, "availabilityZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZoneId" }),
        __metadata("design:type", String)
    ], AwsEc2SubnetDetails.prototype, "availabilityZoneId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailableIpAddressCount" }),
        __metadata("design:type", Number)
    ], AwsEc2SubnetDetails.prototype, "availableIpAddressCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CidrBlock" }),
        __metadata("design:type", String)
    ], AwsEc2SubnetDetails.prototype, "cidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultForAz" }),
        __metadata("design:type", Boolean)
    ], AwsEc2SubnetDetails.prototype, "defaultForAz", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ipv6CidrBlockAssociationSet", elemType: Ipv6CidrBlockAssociation }),
        __metadata("design:type", Array)
    ], AwsEc2SubnetDetails.prototype, "ipv6CidrBlockAssociationSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MapPublicIpOnLaunch" }),
        __metadata("design:type", Boolean)
    ], AwsEc2SubnetDetails.prototype, "mapPublicIpOnLaunch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwnerId" }),
        __metadata("design:type", String)
    ], AwsEc2SubnetDetails.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], AwsEc2SubnetDetails.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetArn" }),
        __metadata("design:type", String)
    ], AwsEc2SubnetDetails.prototype, "subnetArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetId" }),
        __metadata("design:type", String)
    ], AwsEc2SubnetDetails.prototype, "subnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], AwsEc2SubnetDetails.prototype, "vpcId", void 0);
    return AwsEc2SubnetDetails;
}(SpeakeasyBase));
export { AwsEc2SubnetDetails };
