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
import { CustomDeliveryConfiguration } from "./customdeliveryconfiguration";
import { MessageConfiguration } from "./messageconfiguration";
import { Schedule } from "./schedule";
import { CampaignState } from "./campaignstate";
import { TemplateConfiguration } from "./templateconfiguration";
// TreatmentResource
/**
 * Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.
**/
var TreatmentResource = /** @class */ (function (_super) {
    __extends(TreatmentResource, _super);
    function TreatmentResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomDeliveryConfiguration" }),
        __metadata("design:type", CustomDeliveryConfiguration)
    ], TreatmentResource.prototype, "customDeliveryConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], TreatmentResource.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MessageConfiguration" }),
        __metadata("design:type", MessageConfiguration)
    ], TreatmentResource.prototype, "messageConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", Schedule)
    ], TreatmentResource.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SizePercent" }),
        __metadata("design:type", Number)
    ], TreatmentResource.prototype, "sizePercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", CampaignState)
    ], TreatmentResource.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TemplateConfiguration" }),
        __metadata("design:type", TemplateConfiguration)
    ], TreatmentResource.prototype, "templateConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TreatmentDescription" }),
        __metadata("design:type", String)
    ], TreatmentResource.prototype, "treatmentDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TreatmentName" }),
        __metadata("design:type", String)
    ], TreatmentResource.prototype, "treatmentName", void 0);
    return TreatmentResource;
}(SpeakeasyBase));
export { TreatmentResource };
