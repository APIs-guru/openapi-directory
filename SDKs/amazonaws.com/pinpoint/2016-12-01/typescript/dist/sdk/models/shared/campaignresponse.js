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
import { TreatmentResource } from "./treatmentresource";
import { CustomDeliveryConfiguration } from "./customdeliveryconfiguration";
import { CampaignState } from "./campaignstate";
import { CampaignHook } from "./campaignhook";
import { CampaignLimits } from "./campaignlimits";
import { MessageConfiguration } from "./messageconfiguration";
import { Schedule } from "./schedule";
import { TemplateConfiguration } from "./templateconfiguration";
// CampaignResponse
/**
 * Provides information about the status, configuration, and other settings for a campaign.
**/
var CampaignResponse = /** @class */ (function (_super) {
    __extends(CampaignResponse, _super);
    function CampaignResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AdditionalTreatments", elemType: TreatmentResource }),
        __metadata("design:type", Array)
    ], CampaignResponse.prototype, "additionalTreatments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationId" }),
        __metadata("design:type", String)
    ], CampaignResponse.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Arn" }),
        __metadata("design:type", String)
    ], CampaignResponse.prototype, "arn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", String)
    ], CampaignResponse.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomDeliveryConfiguration" }),
        __metadata("design:type", CustomDeliveryConfiguration)
    ], CampaignResponse.prototype, "customDeliveryConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultState" }),
        __metadata("design:type", CampaignState)
    ], CampaignResponse.prototype, "defaultState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], CampaignResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HoldoutPercent" }),
        __metadata("design:type", Number)
    ], CampaignResponse.prototype, "holdoutPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Hook" }),
        __metadata("design:type", CampaignHook)
    ], CampaignResponse.prototype, "hook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], CampaignResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPaused" }),
        __metadata("design:type", Boolean)
    ], CampaignResponse.prototype, "isPaused", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedDate" }),
        __metadata("design:type", String)
    ], CampaignResponse.prototype, "lastModifiedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Limits" }),
        __metadata("design:type", CampaignLimits)
    ], CampaignResponse.prototype, "limits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MessageConfiguration" }),
        __metadata("design:type", MessageConfiguration)
    ], CampaignResponse.prototype, "messageConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CampaignResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], CampaignResponse.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", Schedule)
    ], CampaignResponse.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentId" }),
        __metadata("design:type", String)
    ], CampaignResponse.prototype, "segmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SegmentVersion" }),
        __metadata("design:type", Number)
    ], CampaignResponse.prototype, "segmentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", CampaignState)
    ], CampaignResponse.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateConfiguration" }),
        __metadata("design:type", TemplateConfiguration)
    ], CampaignResponse.prototype, "templateConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TreatmentDescription" }),
        __metadata("design:type", String)
    ], CampaignResponse.prototype, "treatmentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TreatmentName" }),
        __metadata("design:type", String)
    ], CampaignResponse.prototype, "treatmentName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", Number)
    ], CampaignResponse.prototype, "version", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], CampaignResponse.prototype, "tags", void 0);
    return CampaignResponse;
}(SpeakeasyBase));
export { CampaignResponse };
