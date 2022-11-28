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
import { AwsEc2SecurityGroupIpRange } from "./awsec2securitygroupiprange";
import { AwsEc2SecurityGroupIpv6Range } from "./awsec2securitygroupipv6range";
import { AwsEc2SecurityGroupPrefixListId } from "./awsec2securitygroupprefixlistid";
import { AwsEc2SecurityGroupUserIdGroupPair } from "./awsec2securitygroupuseridgrouppair";
// AwsEc2SecurityGroupIpPermission
/**
 * An IP permission for an EC2 security group.
**/
var AwsEc2SecurityGroupIpPermission = /** @class */ (function (_super) {
    __extends(AwsEc2SecurityGroupIpPermission, _super);
    function AwsEc2SecurityGroupIpPermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FromPort" }),
        __metadata("design:type", Number)
    ], AwsEc2SecurityGroupIpPermission.prototype, "fromPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpProtocol" }),
        __metadata("design:type", String)
    ], AwsEc2SecurityGroupIpPermission.prototype, "ipProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IpRanges", elemType: AwsEc2SecurityGroupIpRange }),
        __metadata("design:type", Array)
    ], AwsEc2SecurityGroupIpPermission.prototype, "ipRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ipv6Ranges", elemType: AwsEc2SecurityGroupIpv6Range }),
        __metadata("design:type", Array)
    ], AwsEc2SecurityGroupIpPermission.prototype, "ipv6Ranges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PrefixListIds", elemType: AwsEc2SecurityGroupPrefixListId }),
        __metadata("design:type", Array)
    ], AwsEc2SecurityGroupIpPermission.prototype, "prefixListIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ToPort" }),
        __metadata("design:type", Number)
    ], AwsEc2SecurityGroupIpPermission.prototype, "toPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserIdGroupPairs", elemType: AwsEc2SecurityGroupUserIdGroupPair }),
        __metadata("design:type", Array)
    ], AwsEc2SecurityGroupIpPermission.prototype, "userIdGroupPairs", void 0);
    return AwsEc2SecurityGroupIpPermission;
}(SpeakeasyBase));
export { AwsEc2SecurityGroupIpPermission };
