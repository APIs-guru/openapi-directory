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
var SearchBoulderCountyVoterDetailsQueryParams = /** @class */ (function (_super) {
    __extends(SearchBoulderCountyVoterDetailsQueryParams, _super);
    function SearchBoulderCountyVoterDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.birth_year" }),
        __metadata("design:type", Number)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsBirthYear", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.city_ward_district" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsCityWardDistrict", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.congressional" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsCongressional", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.first_name" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsFirstName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.gender" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsGender", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.last_name" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsLastName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.last_updated_date" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsLastUpdatedDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.location" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsLocation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.mailing_zip_code" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsMailingZipCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.municipality" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsMunicipality", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.party" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsParty", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.precinct_code" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsPrecinctCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.registration_date" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsRegistrationDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.residential_address" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsResidentialAddress", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.residential_city" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsResidentialCity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.school_district" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsSchoolDistrict", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.state_house" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsStateHouse", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.state_senate" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsStateSenate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_boulder_county_voter_details.voter_status" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "searchDbBoulderCountyVoterDetailsVoterStatus", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchBoulderCountyVoterDetailsQueryParams.prototype, "todate", void 0);
    return SearchBoulderCountyVoterDetailsQueryParams;
}(SpeakeasyBase));
export { SearchBoulderCountyVoterDetailsQueryParams };
var SearchBoulderCountyVoterDetailsRequest = /** @class */ (function (_super) {
    __extends(SearchBoulderCountyVoterDetailsRequest, _super);
    function SearchBoulderCountyVoterDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchBoulderCountyVoterDetailsQueryParams)
    ], SearchBoulderCountyVoterDetailsRequest.prototype, "queryParams", void 0);
    return SearchBoulderCountyVoterDetailsRequest;
}(SpeakeasyBase));
export { SearchBoulderCountyVoterDetailsRequest };
var SearchBoulderCountyVoterDetailsResponse = /** @class */ (function (_super) {
    __extends(SearchBoulderCountyVoterDetailsResponse, _super);
    function SearchBoulderCountyVoterDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchBoulderCountyVoterDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchBoulderCountyVoterDetailsResponse.prototype, "statusCode", void 0);
    return SearchBoulderCountyVoterDetailsResponse;
}(SpeakeasyBase));
export { SearchBoulderCountyVoterDetailsResponse };
