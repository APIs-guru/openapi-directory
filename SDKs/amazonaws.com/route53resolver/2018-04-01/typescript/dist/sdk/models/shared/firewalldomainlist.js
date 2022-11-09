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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallDomainListStatusEnum } from "./firewalldomainliststatusenum";
// FirewallDomainList
/**
 * <p>High-level information about a list of firewall domains for use in a <a>FirewallRule</a>. This is returned by <a>GetFirewallDomainList</a>.</p> <p>To retrieve the domains that are defined for this domain list, call <a>ListFirewallDomains</a>.</p>
**/
var FirewallDomainList = /** @class */ (function (_super) {
    __extends(FirewallDomainList, _super);
    function FirewallDomainList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], FirewallDomainList.prototype, "arn", void 0);
    __decorate([
        Metadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", String)
    ], FirewallDomainList.prototype, "creationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=CreatorRequestId" }),
        __metadata("design:type", String)
    ], FirewallDomainList.prototype, "creatorRequestId", void 0);
    __decorate([
        Metadata({ data: "json, name=DomainCount" }),
        __metadata("design:type", Number)
    ], FirewallDomainList.prototype, "domainCount", void 0);
    __decorate([
        Metadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], FirewallDomainList.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=ManagedOwnerName" }),
        __metadata("design:type", String)
    ], FirewallDomainList.prototype, "managedOwnerName", void 0);
    __decorate([
        Metadata({ data: "json, name=ModificationTime" }),
        __metadata("design:type", String)
    ], FirewallDomainList.prototype, "modificationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], FirewallDomainList.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], FirewallDomainList.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=StatusMessage" }),
        __metadata("design:type", String)
    ], FirewallDomainList.prototype, "statusMessage", void 0);
    return FirewallDomainList;
}(SpeakeasyBase));
export { FirewallDomainList };
