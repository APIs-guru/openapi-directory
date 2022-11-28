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
var CommunicationCost = /** @class */ (function (_super) {
    __extends(CommunicationCost, _super);
    function CommunicationCost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action_code" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "actionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action_code_full" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "actionCodeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_first_name" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "candidateFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "candidateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_last_name" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "candidateLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_middle_name" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "candidateMiddleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_name" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "candidateName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "candidateOffice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_district" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_full" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "candidateOfficeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_office_state" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "candidateOfficeState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_name" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "committeeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=communication_class" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "communicationClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=communication_type" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "communicationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=communication_type_full" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "communicationTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycle" }),
        __metadata("design:type", Number)
    ], CommunicationCost.prototype, "cycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], CommunicationCost.prototype, "fileNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form_type_code" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "formTypeCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_number" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "imageNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=original_sub_id" }),
        __metadata("design:type", Number)
    ], CommunicationCost.prototype, "originalSubId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "pdfUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_general_indicator" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "primaryGeneralIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary_general_indicator_description" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "primaryGeneralIndicatorDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purpose" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], CommunicationCost.prototype, "reportYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "scheduleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schedule_type_full" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "scheduleTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state_full" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "stateFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_id" }),
        __metadata("design:type", Number)
    ], CommunicationCost.prototype, "subId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=support_oppose_indicator" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "supportOpposeIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tran_id" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "tranId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_amount" }),
        __metadata("design:type", Number)
    ], CommunicationCost.prototype, "transactionAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_date" }),
        __metadata("design:type", Date)
    ], CommunicationCost.prototype, "transactionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_type" }),
        __metadata("design:type", String)
    ], CommunicationCost.prototype, "transactionType", void 0);
    return CommunicationCost;
}(SpeakeasyBase));
export { CommunicationCost };
