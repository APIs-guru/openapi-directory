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
var CommitteeDetail = /** @class */ (function (_super) {
    __extends(CommitteeDetail, _super);
    function CommitteeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=affiliated_committee_name" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "affiliatedCommitteeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candidate_ids" }),
        __metadata("design:type", Array)
    ], CommitteeDetail.prototype, "candidateIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "committeeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_type" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "committeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=committee_type_full" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "committeeTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custodian_city" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "custodianCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custodian_name_1" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "custodianName1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custodian_name_2" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "custodianName2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custodian_name_full" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "custodianNameFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custodian_name_middle" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "custodianNameMiddle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custodian_name_prefix" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "custodianNamePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custodian_name_suffix" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "custodianNameSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custodian_name_title" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "custodianNameTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custodian_phone" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "custodianPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custodian_state" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "custodianState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custodian_street_1" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "custodianStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custodian_street_2" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "custodianStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custodian_zip" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "custodianZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cycles" }),
        __metadata("design:type", Array)
    ], CommitteeDetail.prototype, "cycles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=designation" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "designation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=designation_full" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "designationFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fax" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "fax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filing_frequency" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "filingFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_file_date" }),
        __metadata("design:type", Date)
    ], CommitteeDetail.prototype, "firstFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form_type" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "formType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_file_date" }),
        __metadata("design:type", Date)
    ], CommitteeDetail.prototype, "lastFileDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leadership_pac" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "leadershipPac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lobbyist_registrant_pac" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "lobbyistRegistrantPac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_type" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "organizationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization_type_full" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "organizationTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party_full" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "partyFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party_type" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "partyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party_type_full" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "partyTypeFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sponsor_candidate_ids" }),
        __metadata("design:type", Array)
    ], CommitteeDetail.prototype, "sponsorCandidateIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state_full" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "stateFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_1" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "street1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=street_2" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "street2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_city" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "treasurerCity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_name" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "treasurerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_name_1" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "treasurerName1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_name_2" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "treasurerName2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_name_middle" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "treasurerNameMiddle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_name_prefix" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "treasurerNamePrefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_name_suffix" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "treasurerNameSuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_name_title" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "treasurerNameTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_phone" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "treasurerPhone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_state" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "treasurerState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_street_1" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "treasurerStreet1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_street_2" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "treasurerStreet2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=treasurer_zip" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "treasurerZip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "website", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], CommitteeDetail.prototype, "zip", void 0);
    return CommitteeDetail;
}(SpeakeasyBase));
export { CommitteeDetail };
