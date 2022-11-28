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
// DomainDeliverabilityCampaign
/**
 * An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
**/
var DomainDeliverabilityCampaign = /** @class */ (function (_super) {
    __extends(DomainDeliverabilityCampaign, _super);
    function DomainDeliverabilityCampaign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CampaignId" }),
        __metadata("design:type", String)
    ], DomainDeliverabilityCampaign.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DeleteRate" }),
        __metadata("design:type", Number)
    ], DomainDeliverabilityCampaign.prototype, "deleteRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Esps" }),
        __metadata("design:type", Array)
    ], DomainDeliverabilityCampaign.prototype, "esps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstSeenDateTime" }),
        __metadata("design:type", Date)
    ], DomainDeliverabilityCampaign.prototype, "firstSeenDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FromAddress" }),
        __metadata("design:type", String)
    ], DomainDeliverabilityCampaign.prototype, "fromAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ImageUrl" }),
        __metadata("design:type", String)
    ], DomainDeliverabilityCampaign.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InboxCount" }),
        __metadata("design:type", Number)
    ], DomainDeliverabilityCampaign.prototype, "inboxCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastSeenDateTime" }),
        __metadata("design:type", Date)
    ], DomainDeliverabilityCampaign.prototype, "lastSeenDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProjectedVolume" }),
        __metadata("design:type", Number)
    ], DomainDeliverabilityCampaign.prototype, "projectedVolume", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadDeleteRate" }),
        __metadata("design:type", Number)
    ], DomainDeliverabilityCampaign.prototype, "readDeleteRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadRate" }),
        __metadata("design:type", Number)
    ], DomainDeliverabilityCampaign.prototype, "readRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SendingIps" }),
        __metadata("design:type", Array)
    ], DomainDeliverabilityCampaign.prototype, "sendingIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SpamCount" }),
        __metadata("design:type", Number)
    ], DomainDeliverabilityCampaign.prototype, "spamCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Subject" }),
        __metadata("design:type", String)
    ], DomainDeliverabilityCampaign.prototype, "subject", void 0);
    return DomainDeliverabilityCampaign;
}(SpeakeasyBase));
export { DomainDeliverabilityCampaign };
