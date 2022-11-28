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
import { RuleTypeOptionEnum } from "./ruletypeoptionenum";
import { ShareStatusEnum } from "./sharestatusenum";
import { ResolverRuleStatusEnum } from "./resolverrulestatusenum";
import { TargetAddress } from "./targetaddress";
// ResolverRule
/**
 * For queries that originate in your VPC, detailed information about a Resolver rule, which specifies how to route DNS queries out of the VPC. The <code>ResolverRule</code> parameter appears in the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverRule.html">DeleteResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverRule.html">GetResolverRule</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRules.html">ListResolverRules</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverRule.html">UpdateResolverRule</a> request.
**/
var ResolverRule = /** @class */ (function (_super) {
    __extends(ResolverRule, _super);
    function ResolverRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], ResolverRule.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", String)
    ], ResolverRule.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatorRequestId" }),
        __metadata("design:type", String)
    ], ResolverRule.prototype, "creatorRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainName" }),
        __metadata("design:type", String)
    ], ResolverRule.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ResolverRule.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModificationTime" }),
        __metadata("design:type", String)
    ], ResolverRule.prototype, "modificationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ResolverRule.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwnerId" }),
        __metadata("design:type", String)
    ], ResolverRule.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResolverEndpointId" }),
        __metadata("design:type", String)
    ], ResolverRule.prototype, "resolverEndpointId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleType" }),
        __metadata("design:type", String)
    ], ResolverRule.prototype, "ruleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShareStatus" }),
        __metadata("design:type", String)
    ], ResolverRule.prototype, "shareStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ResolverRule.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusMessage" }),
        __metadata("design:type", String)
    ], ResolverRule.prototype, "statusMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TargetIps", elemType: TargetAddress }),
        __metadata("design:type", Array)
    ], ResolverRule.prototype, "targetIps", void 0);
    return ResolverRule;
}(SpeakeasyBase));
export { ResolverRule };
