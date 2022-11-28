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
import { IcmpTypeCode } from "./icmptypecode";
import { PortRangeFromTo } from "./portrangefromto";
// AwsEc2NetworkAclEntry
/**
 * A rule for the network ACL. Each rule allows or denies access based on the IP address, traffic direction, port, and protocol.
**/
var AwsEc2NetworkAclEntry = /** @class */ (function (_super) {
    __extends(AwsEc2NetworkAclEntry, _super);
    function AwsEc2NetworkAclEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CidrBlock" }),
        __metadata("design:type", String)
    ], AwsEc2NetworkAclEntry.prototype, "cidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Egress" }),
        __metadata("design:type", Boolean)
    ], AwsEc2NetworkAclEntry.prototype, "egress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IcmpTypeCode" }),
        __metadata("design:type", IcmpTypeCode)
    ], AwsEc2NetworkAclEntry.prototype, "icmpTypeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Ipv6CidrBlock" }),
        __metadata("design:type", String)
    ], AwsEc2NetworkAclEntry.prototype, "ipv6CidrBlock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PortRange" }),
        __metadata("design:type", PortRangeFromTo)
    ], AwsEc2NetworkAclEntry.prototype, "portRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Protocol" }),
        __metadata("design:type", String)
    ], AwsEc2NetworkAclEntry.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleAction" }),
        __metadata("design:type", String)
    ], AwsEc2NetworkAclEntry.prototype, "ruleAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleNumber" }),
        __metadata("design:type", Number)
    ], AwsEc2NetworkAclEntry.prototype, "ruleNumber", void 0);
    return AwsEc2NetworkAclEntry;
}(SpeakeasyBase));
export { AwsEc2NetworkAclEntry };
