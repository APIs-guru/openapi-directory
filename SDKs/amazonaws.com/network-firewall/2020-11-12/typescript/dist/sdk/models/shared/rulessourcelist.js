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
import { GeneratedRulesTypeEnum } from "./generatedrulestypeenum";
// RulesSourceList
/**
 * <p>Stateful inspection criteria for a domain list rule group. </p> <p>For HTTPS traffic, domain filtering is SNI-based. It uses the server name indicator extension of the TLS handshake.</p> <p>By default, Network Firewall domain list inspection only includes traffic coming from the VPC where you deploy the firewall. To inspect traffic from IP addresses outside of the deployment VPC, you set the <code>HOME_NET</code> rule variable to include the CIDR range of the deployment VPC plus the other CIDR ranges. For more information, see <a>RuleVariables</a> in this guide and <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateful-rule-groups-domain-names.html">Stateful domain list rule groups in AWS Network Firewall</a> in the <i>Network Firewall Developer Guide</i> </p>
**/
var RulesSourceList = /** @class */ (function (_super) {
    __extends(RulesSourceList, _super);
    function RulesSourceList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GeneratedRulesType" }),
        __metadata("design:type", String)
    ], RulesSourceList.prototype, "generatedRulesType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetTypes" }),
        __metadata("design:type", Array)
    ], RulesSourceList.prototype, "targetTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Targets" }),
        __metadata("design:type", Array)
    ], RulesSourceList.prototype, "targets", void 0);
    return RulesSourceList;
}(SpeakeasyBase));
export { RulesSourceList };
