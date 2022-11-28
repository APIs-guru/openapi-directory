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
// ActivityResponse
/**
 * Provides information about an activity that was performed by a campaign.
**/
var ActivityResponse = /** @class */ (function (_super) {
    __extends(ActivityResponse, _super);
    function ActivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ApplicationId" }),
        __metadata("design:type", String)
    ], ActivityResponse.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CampaignId" }),
        __metadata("design:type", String)
    ], ActivityResponse.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=End" }),
        __metadata("design:type", String)
    ], ActivityResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], ActivityResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Result" }),
        __metadata("design:type", String)
    ], ActivityResponse.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ScheduledStart" }),
        __metadata("design:type", String)
    ], ActivityResponse.prototype, "scheduledStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Start" }),
        __metadata("design:type", String)
    ], ActivityResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], ActivityResponse.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SuccessfulEndpointCount" }),
        __metadata("design:type", Number)
    ], ActivityResponse.prototype, "successfulEndpointCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimezonesCompletedCount" }),
        __metadata("design:type", Number)
    ], ActivityResponse.prototype, "timezonesCompletedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TimezonesTotalCount" }),
        __metadata("design:type", Number)
    ], ActivityResponse.prototype, "timezonesTotalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalEndpointCount" }),
        __metadata("design:type", Number)
    ], ActivityResponse.prototype, "totalEndpointCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TreatmentId" }),
        __metadata("design:type", String)
    ], ActivityResponse.prototype, "treatmentId", void 0);
    return ActivityResponse;
}(SpeakeasyBase));
export { ActivityResponse };
