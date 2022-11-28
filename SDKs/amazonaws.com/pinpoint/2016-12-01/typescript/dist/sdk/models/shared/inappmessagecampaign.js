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
import { InAppMessage } from "./inappmessage";
import { InAppCampaignSchedule } from "./inappcampaignschedule";
// InAppMessageCampaign
/**
 * Targeted in-app message campaign.
**/
var InAppMessageCampaign = /** @class */ (function (_super) {
    __extends(InAppMessageCampaign, _super);
    function InAppMessageCampaign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CampaignId" }),
        __metadata("design:type", String)
    ], InAppMessageCampaign.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DailyCap" }),
        __metadata("design:type", Number)
    ], InAppMessageCampaign.prototype, "dailyCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InAppMessage" }),
        __metadata("design:type", InAppMessage)
    ], InAppMessageCampaign.prototype, "inAppMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Priority" }),
        __metadata("design:type", Number)
    ], InAppMessageCampaign.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Schedule" }),
        __metadata("design:type", InAppCampaignSchedule)
    ], InAppMessageCampaign.prototype, "schedule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SessionCap" }),
        __metadata("design:type", Number)
    ], InAppMessageCampaign.prototype, "sessionCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalCap" }),
        __metadata("design:type", Number)
    ], InAppMessageCampaign.prototype, "totalCap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TreatmentId" }),
        __metadata("design:type", String)
    ], InAppMessageCampaign.prototype, "treatmentId", void 0);
    return InAppMessageCampaign;
}(SpeakeasyBase));
export { InAppMessageCampaign };
