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
import { CurrencyEnum } from "./currencyenum";
import { CustomField } from "./customfield";
var OpportunityInput = /** @class */ (function (_super) {
    __extends(OpportunityInput, _super);
    function OpportunityInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=close_date" }),
        __metadata("design:type", Date)
    ], OpportunityInput.prototype, "closeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_id" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact_id" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "contactId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField }),
        __metadata("design:type", Array)
    ], OpportunityInput.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_id" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "leadId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_source" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "leadSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loss_reason" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "lossReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loss_reason_id" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "lossReasonId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monetary_amount" }),
        __metadata("design:type", Number)
    ], OpportunityInput.prototype, "monetaryAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner_id" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pipeline_id" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "pipelineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pipeline_stage_id" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "pipelineStageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_contact_id" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "primaryContactId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_id" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "sourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stage_last_changed_at" }),
        __metadata("design:type", Date)
    ], OpportunityInput.prototype, "stageLastChangedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_id" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "statusId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], OpportunityInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=win_probability" }),
        __metadata("design:type", Number)
    ], OpportunityInput.prototype, "winProbability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=won_reason" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "wonReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=won_reason_id" }),
        __metadata("design:type", String)
    ], OpportunityInput.prototype, "wonReasonId", void 0);
    return OpportunityInput;
}(SpeakeasyBase));
export { OpportunityInput };
var Opportunity = /** @class */ (function (_super) {
    __extends(Opportunity, _super);
    function Opportunity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=close_date" }),
        __metadata("design:type", Date)
    ], Opportunity.prototype, "closeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_id" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "companyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact_id" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "contactId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Opportunity.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField }),
        __metadata("design:type", Array)
    ], Opportunity.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_last_contacted" }),
        __metadata("design:type", Date)
    ], Opportunity.prototype, "dateLastContacted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_lead_created" }),
        __metadata("design:type", Date)
    ], Opportunity.prototype, "dateLeadCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_stage_changed" }),
        __metadata("design:type", Date)
    ], Opportunity.prototype, "dateStageChanged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", Boolean)
    ], Opportunity.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expected_revenue" }),
        __metadata("design:type", Number)
    ], Opportunity.prototype, "expectedRevenue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interaction_count" }),
        __metadata("design:type", Number)
    ], Opportunity.prototype, "interactionCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_activity_at" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "lastActivityAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_id" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "leadId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lead_source" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "leadSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loss_reason" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "lossReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loss_reason_id" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "lossReasonId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monetary_amount" }),
        __metadata("design:type", Number)
    ], Opportunity.prototype, "monetaryAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner_id" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pipeline_id" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "pipelineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pipeline_stage_id" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "pipelineStageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_contact_id" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "primaryContactId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_id" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "sourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stage_last_changed_at" }),
        __metadata("design:type", Date)
    ], Opportunity.prototype, "stageLastChangedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_id" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "statusId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Opportunity.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Opportunity.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "updatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=win_probability" }),
        __metadata("design:type", Number)
    ], Opportunity.prototype, "winProbability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=won_reason" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "wonReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=won_reason_id" }),
        __metadata("design:type", String)
    ], Opportunity.prototype, "wonReasonId", void 0);
    return Opportunity;
}(SpeakeasyBase));
export { Opportunity };
