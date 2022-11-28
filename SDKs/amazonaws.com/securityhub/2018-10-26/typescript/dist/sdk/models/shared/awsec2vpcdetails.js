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
import { CidrBlockAssociation } from "./cidrblockassociation";
import { Ipv6CidrBlockAssociation } from "./ipv6cidrblockassociation";
// AwsEc2VpcDetails
/**
 * Details about an EC2 VPC.
**/
var AwsEc2VpcDetails = /** @class */ (function (_super) {
    __extends(AwsEc2VpcDetails, _super);
    function AwsEc2VpcDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CidrBlockAssociationSet", elemType: CidrBlockAssociation }),
        __metadata("design:type", Array)
    ], AwsEc2VpcDetails.prototype, "cidrBlockAssociationSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DhcpOptionsId" }),
        __metadata("design:type", String)
    ], AwsEc2VpcDetails.prototype, "dhcpOptionsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ipv6CidrBlockAssociationSet", elemType: Ipv6CidrBlockAssociation }),
        __metadata("design:type", Array)
    ], AwsEc2VpcDetails.prototype, "ipv6CidrBlockAssociationSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], AwsEc2VpcDetails.prototype, "state", void 0);
    return AwsEc2VpcDetails;
}(SpeakeasyBase));
export { AwsEc2VpcDetails };
