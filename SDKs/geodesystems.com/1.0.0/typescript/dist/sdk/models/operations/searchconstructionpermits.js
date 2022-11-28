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
var SearchConstructionPermitsQueryParams = /** @class */ (function (_super) {
    __extends(SearchConstructionPermitsQueryParams, _super);
    function SearchConstructionPermitsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchConstructionPermitsQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchConstructionPermitsQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchConstructionPermitsQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchConstructionPermitsQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchConstructionPermitsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchConstructionPermitsQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchConstructionPermitsQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchConstructionPermitsQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchConstructionPermitsQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchConstructionPermitsQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.address" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.affordable_hsg_unit" }),
        __metadata("design:type", Number)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsAffordableHsgUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.applied" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsApplied", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.approved" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsApproved", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.building_uses_and_work_scopes" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsBuildingUsesAndWorkScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.case_status" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsCaseStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.category" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.co_date" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsCoDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.completion_date" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsCompletionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.contractor_company" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsContractorCompany", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.contractor_first_name" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsContractorFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.contractor_last_name" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsContractorLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.existing_res_unit" }),
        __metadata("design:type", Number)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsExistingResUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.issued" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsIssued", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.narrative_description" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsNarrativeDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.new_res_unit" }),
        __metadata("design:type", Number)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsNewResUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.new_sf" }),
        __metadata("design:type", Number)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsNewSf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner1_company" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsOwner1Company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner1_first_name" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsOwner1FirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner1_last_name" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsOwner1LastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner2_company" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsOwner2Company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner2_first_name" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsOwner2FirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.owner2_last_name" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsOwner2LastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.permit_types" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsPermitTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.primary_company" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsPrimaryCompany", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.primary_first_name" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsPrimaryFirstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.primary_last_name" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsPrimaryLastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.remodel_sf" }),
        __metadata("design:type", Number)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsRemodelSf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.total_project_value" }),
        __metadata("design:type", Number)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsTotalProjectValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_construction_permits.total_subpermit_value" }),
        __metadata("design:type", Number)
    ], SearchConstructionPermitsQueryParams.prototype, "searchDbConstructionPermitsTotalSubpermitValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchConstructionPermitsQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchConstructionPermitsQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchConstructionPermitsQueryParams.prototype, "todate", void 0);
    return SearchConstructionPermitsQueryParams;
}(SpeakeasyBase));
export { SearchConstructionPermitsQueryParams };
var SearchConstructionPermitsRequest = /** @class */ (function (_super) {
    __extends(SearchConstructionPermitsRequest, _super);
    function SearchConstructionPermitsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchConstructionPermitsQueryParams)
    ], SearchConstructionPermitsRequest.prototype, "queryParams", void 0);
    return SearchConstructionPermitsRequest;
}(SpeakeasyBase));
export { SearchConstructionPermitsRequest };
var SearchConstructionPermitsResponse = /** @class */ (function (_super) {
    __extends(SearchConstructionPermitsResponse, _super);
    function SearchConstructionPermitsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchConstructionPermitsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchConstructionPermitsResponse.prototype, "statusCode", void 0);
    return SearchConstructionPermitsResponse;
}(SpeakeasyBase));
export { SearchConstructionPermitsResponse };
