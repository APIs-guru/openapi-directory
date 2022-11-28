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
import { ContactDetail } from "./contactdetail";
import { Nameserver } from "./nameserver";
// GetDomainDetailResponse
/**
 * The GetDomainDetail response includes the following elements.
**/
var GetDomainDetailResponse = /** @class */ (function (_super) {
    __extends(GetDomainDetailResponse, _super);
    function GetDomainDetailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AbuseContactEmail" }),
        __metadata("design:type", String)
    ], GetDomainDetailResponse.prototype, "abuseContactEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AbuseContactPhone" }),
        __metadata("design:type", String)
    ], GetDomainDetailResponse.prototype, "abuseContactPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdminContact" }),
        __metadata("design:type", ContactDetail)
    ], GetDomainDetailResponse.prototype, "adminContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdminPrivacy" }),
        __metadata("design:type", Boolean)
    ], GetDomainDetailResponse.prototype, "adminPrivacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoRenew" }),
        __metadata("design:type", Boolean)
    ], GetDomainDetailResponse.prototype, "autoRenew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], GetDomainDetailResponse.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DnsSec" }),
        __metadata("design:type", String)
    ], GetDomainDetailResponse.prototype, "dnsSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomainName" }),
        __metadata("design:type", String)
    ], GetDomainDetailResponse.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDate" }),
        __metadata("design:type", Date)
    ], GetDomainDetailResponse.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Nameservers", elemType: Nameserver }),
        __metadata("design:type", Array)
    ], GetDomainDetailResponse.prototype, "nameservers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegistrantContact" }),
        __metadata("design:type", ContactDetail)
    ], GetDomainDetailResponse.prototype, "registrantContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegistrantPrivacy" }),
        __metadata("design:type", Boolean)
    ], GetDomainDetailResponse.prototype, "registrantPrivacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegistrarName" }),
        __metadata("design:type", String)
    ], GetDomainDetailResponse.prototype, "registrarName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegistrarUrl" }),
        __metadata("design:type", String)
    ], GetDomainDetailResponse.prototype, "registrarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RegistryDomainId" }),
        __metadata("design:type", String)
    ], GetDomainDetailResponse.prototype, "registryDomainId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reseller" }),
        __metadata("design:type", String)
    ], GetDomainDetailResponse.prototype, "reseller", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusList" }),
        __metadata("design:type", Array)
    ], GetDomainDetailResponse.prototype, "statusList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TechContact" }),
        __metadata("design:type", ContactDetail)
    ], GetDomainDetailResponse.prototype, "techContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TechPrivacy" }),
        __metadata("design:type", Boolean)
    ], GetDomainDetailResponse.prototype, "techPrivacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedDate" }),
        __metadata("design:type", Date)
    ], GetDomainDetailResponse.prototype, "updatedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WhoIsServer" }),
        __metadata("design:type", String)
    ], GetDomainDetailResponse.prototype, "whoIsServer", void 0);
    return GetDomainDetailResponse;
}(SpeakeasyBase));
export { GetDomainDetailResponse };
