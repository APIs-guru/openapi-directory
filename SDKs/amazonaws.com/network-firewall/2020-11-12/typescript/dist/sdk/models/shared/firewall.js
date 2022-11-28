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
import { SubnetMapping } from "./subnetmapping";
import { Tag } from "./tag";
// Firewall
/**
 * <p>The firewall defines the configuration settings for an AWS Network Firewall firewall. These settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource. </p> <p>The status of the firewall, for example whether it's ready to filter network traffic, is provided in the corresponding <a>FirewallStatus</a>. You can retrieve both objects by calling <a>DescribeFirewall</a>.</p>
**/
var Firewall = /** @class */ (function (_super) {
    __extends(Firewall, _super);
    function Firewall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeleteProtection" }),
        __metadata("design:type", Boolean)
    ], Firewall.prototype, "deleteProtection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Firewall.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirewallArn" }),
        __metadata("design:type", String)
    ], Firewall.prototype, "firewallArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirewallId" }),
        __metadata("design:type", String)
    ], Firewall.prototype, "firewallId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirewallName" }),
        __metadata("design:type", String)
    ], Firewall.prototype, "firewallName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirewallPolicyArn" }),
        __metadata("design:type", String)
    ], Firewall.prototype, "firewallPolicyArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirewallPolicyChangeProtection" }),
        __metadata("design:type", Boolean)
    ], Firewall.prototype, "firewallPolicyChangeProtection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetChangeProtection" }),
        __metadata("design:type", Boolean)
    ], Firewall.prototype, "subnetChangeProtection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubnetMappings", elemType: SubnetMapping }),
        __metadata("design:type", Array)
    ], Firewall.prototype, "subnetMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], Firewall.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcId" }),
        __metadata("design:type", String)
    ], Firewall.prototype, "vpcId", void 0);
    return Firewall;
}(SpeakeasyBase));
export { Firewall };
