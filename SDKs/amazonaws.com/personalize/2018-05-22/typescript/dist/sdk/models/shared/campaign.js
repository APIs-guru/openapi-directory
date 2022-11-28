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
import { CampaignConfig } from "./campaignconfig";
import { CampaignUpdateSummary } from "./campaignupdatesummary";
// Campaign
/**
 * Describes a deployed solution version, otherwise known as a campaign. For more information on campaigns, see <a>CreateCampaign</a>.
**/
var Campaign = /** @class */ (function (_super) {
    __extends(Campaign, _super);
    function Campaign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignArn" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "campaignArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignConfig" }),
        __metadata("design:type", CampaignConfig)
    ], Campaign.prototype, "campaignConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creationDateTime" }),
        __metadata("design:type", Date)
    ], Campaign.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" }),
        __metadata("design:type", Date)
    ], Campaign.prototype, "lastUpdatedDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestCampaignUpdate" }),
        __metadata("design:type", CampaignUpdateSummary)
    ], Campaign.prototype, "latestCampaignUpdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minProvisionedTPS" }),
        __metadata("design:type", Number)
    ], Campaign.prototype, "minProvisionedTps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=solutionVersionArn" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "solutionVersionArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "status", void 0);
    return Campaign;
}(SpeakeasyBase));
export { Campaign };
