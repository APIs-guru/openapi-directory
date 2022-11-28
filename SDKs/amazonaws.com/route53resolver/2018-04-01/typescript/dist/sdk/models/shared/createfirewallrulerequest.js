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
import { ActionEnum } from "./actionenum";
import { BlockOverrideDnsTypeEnum } from "./blockoverridednstypeenum";
import { BlockResponseEnum } from "./blockresponseenum";
var CreateFirewallRuleRequest = /** @class */ (function (_super) {
    __extends(CreateFirewallRuleRequest, _super);
    function CreateFirewallRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Action" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleRequest.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockOverrideDnsType" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleRequest.prototype, "blockOverrideDnsType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockOverrideDomain" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleRequest.prototype, "blockOverrideDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockOverrideTtl" }),
        __metadata("design:type", Number)
    ], CreateFirewallRuleRequest.prototype, "blockOverrideTtl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BlockResponse" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleRequest.prototype, "blockResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatorRequestId" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleRequest.prototype, "creatorRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirewallDomainListId" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleRequest.prototype, "firewallDomainListId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirewallRuleGroupId" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleRequest.prototype, "firewallRuleGroupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateFirewallRuleRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], CreateFirewallRuleRequest.prototype, "priority", void 0);
    return CreateFirewallRuleRequest;
}(SpeakeasyBase));
export { CreateFirewallRuleRequest };
