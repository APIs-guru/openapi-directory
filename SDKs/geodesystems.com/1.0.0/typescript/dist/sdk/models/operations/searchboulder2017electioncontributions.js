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
var SearchBoulder2017ElectionContributionsQueryParams = /** @class */ (function (_super) {
    __extends(SearchBoulder2017ElectionContributionsQueryParams, _super);
    function SearchBoulder2017ElectionContributionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.amount" }),
        __metadata("design:type", Number)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "searchDbBoulder2017ElectionContributionsAmount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.city" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "searchDbBoulder2017ElectionContributionsCity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.committee" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "searchDbBoulder2017ElectionContributionsCommittee", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.contribution_type" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "searchDbBoulder2017ElectionContributionsContributionType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.date" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "searchDbBoulder2017ElectionContributionsDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.first_name" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "searchDbBoulder2017ElectionContributionsFirstName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.from_candidate" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "searchDbBoulder2017ElectionContributionsFromCandidate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.last_name" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "searchDbBoulder2017ElectionContributionsLastName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.location" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "searchDbBoulder2017ElectionContributionsLocation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.match_amount" }),
        __metadata("design:type", Number)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "searchDbBoulder2017ElectionContributionsMatchAmount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.state" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "searchDbBoulder2017ElectionContributionsState", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.street" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "searchDbBoulder2017ElectionContributionsStreet", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.ytd_amount" }),
        __metadata("design:type", Number)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "searchDbBoulder2017ElectionContributionsYtdAmount", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_2017_election_contributions.zip" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "searchDbBoulder2017ElectionContributionsZip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchBoulder2017ElectionContributionsQueryParams.prototype, "todate", void 0);
    return SearchBoulder2017ElectionContributionsQueryParams;
}(SpeakeasyBase));
export { SearchBoulder2017ElectionContributionsQueryParams };
var SearchBoulder2017ElectionContributionsRequest = /** @class */ (function (_super) {
    __extends(SearchBoulder2017ElectionContributionsRequest, _super);
    function SearchBoulder2017ElectionContributionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchBoulder2017ElectionContributionsQueryParams)
    ], SearchBoulder2017ElectionContributionsRequest.prototype, "queryParams", void 0);
    return SearchBoulder2017ElectionContributionsRequest;
}(SpeakeasyBase));
export { SearchBoulder2017ElectionContributionsRequest };
var SearchBoulder2017ElectionContributionsResponse = /** @class */ (function (_super) {
    __extends(SearchBoulder2017ElectionContributionsResponse, _super);
    function SearchBoulder2017ElectionContributionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchBoulder2017ElectionContributionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchBoulder2017ElectionContributionsResponse.prototype, "statusCode", void 0);
    return SearchBoulder2017ElectionContributionsResponse;
}(SpeakeasyBase));
export { SearchBoulder2017ElectionContributionsResponse };
