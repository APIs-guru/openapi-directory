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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var SearchBoulderCampaignContributionsQueryParams = /** @class */ (function (_super) {
    __extends(SearchBoulderCampaignContributionsQueryParams, _super);
    function SearchBoulderCampaignContributionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.amended_date" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsAmendedDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.anonymous" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsAnonymous", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.candidate" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsCandidate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.city" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsCity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.committee" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsCommittee", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.committee_num" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsCommitteeNum", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.contribution" }),
        __metadata("design:type", Number)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsContribution", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.contribution_type" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsContributionType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.filing_date" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsFilingDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.first_name" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsFirstName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.from_candidate" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsFromCandidate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.last_name" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsLastName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.match" }),
        __metadata("design:type", Number)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsMatch", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.official_filing" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsOfficialFiling", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.state" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsState", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.street" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsStreet", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.transaction_date" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsTransactionDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.type" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_campaign_contributions.zip" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "searchDbBoulderCampaignContributionsZip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchBoulderCampaignContributionsQueryParams.prototype, "todate", void 0);
    return SearchBoulderCampaignContributionsQueryParams;
}(SpeakeasyBase));
export { SearchBoulderCampaignContributionsQueryParams };
var SearchBoulderCampaignContributionsRequest = /** @class */ (function (_super) {
    __extends(SearchBoulderCampaignContributionsRequest, _super);
    function SearchBoulderCampaignContributionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchBoulderCampaignContributionsQueryParams)
    ], SearchBoulderCampaignContributionsRequest.prototype, "queryParams", void 0);
    return SearchBoulderCampaignContributionsRequest;
}(SpeakeasyBase));
export { SearchBoulderCampaignContributionsRequest };
var SearchBoulderCampaignContributionsResponse = /** @class */ (function (_super) {
    __extends(SearchBoulderCampaignContributionsResponse, _super);
    function SearchBoulderCampaignContributionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchBoulderCampaignContributionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchBoulderCampaignContributionsResponse.prototype, "statusCode", void 0);
    return SearchBoulderCampaignContributionsResponse;
}(SpeakeasyBase));
export { SearchBoulderCampaignContributionsResponse };
