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
var SearchBostonCrimeQueryParams = /** @class */ (function (_super) {
    __extends(SearchBostonCrimeQueryParams, _super);
    function SearchBostonCrimeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchBostonCrimeQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchBostonCrimeQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchBostonCrimeQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchBostonCrimeQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchBostonCrimeQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchBostonCrimeQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchBostonCrimeQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchBostonCrimeQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchBostonCrimeQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchBostonCrimeQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchBostonCrimeQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchBostonCrimeQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchBostonCrimeQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchBostonCrimeQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.day_of_week" }),
        __metadata("design:type", String)
    ], SearchBostonCrimeQueryParams.prototype, "searchDbBostonCrimeDayOfWeek", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.district" }),
        __metadata("design:type", String)
    ], SearchBostonCrimeQueryParams.prototype, "searchDbBostonCrimeDistrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.hour" }),
        __metadata("design:type", Number)
    ], SearchBostonCrimeQueryParams.prototype, "searchDbBostonCrimeHour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.location" }),
        __metadata("design:type", String)
    ], SearchBostonCrimeQueryParams.prototype, "searchDbBostonCrimeLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.month" }),
        __metadata("design:type", Number)
    ], SearchBostonCrimeQueryParams.prototype, "searchDbBostonCrimeMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.offense" }),
        __metadata("design:type", String)
    ], SearchBostonCrimeQueryParams.prototype, "searchDbBostonCrimeOffense", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.offense_code_group" }),
        __metadata("design:type", String)
    ], SearchBostonCrimeQueryParams.prototype, "searchDbBostonCrimeOffenseCodeGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.offense_description" }),
        __metadata("design:type", String)
    ], SearchBostonCrimeQueryParams.prototype, "searchDbBostonCrimeOffenseDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.reporting_area" }),
        __metadata("design:type", String)
    ], SearchBostonCrimeQueryParams.prototype, "searchDbBostonCrimeReportingArea", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.shooting" }),
        __metadata("design:type", String)
    ], SearchBostonCrimeQueryParams.prototype, "searchDbBostonCrimeShooting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.street" }),
        __metadata("design:type", String)
    ], SearchBostonCrimeQueryParams.prototype, "searchDbBostonCrimeStreet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_boston_crime.year" }),
        __metadata("design:type", Number)
    ], SearchBostonCrimeQueryParams.prototype, "searchDbBostonCrimeYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchBostonCrimeQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchBostonCrimeQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchBostonCrimeQueryParams.prototype, "todate", void 0);
    return SearchBostonCrimeQueryParams;
}(SpeakeasyBase));
export { SearchBostonCrimeQueryParams };
var SearchBostonCrimeRequest = /** @class */ (function (_super) {
    __extends(SearchBostonCrimeRequest, _super);
    function SearchBostonCrimeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchBostonCrimeQueryParams)
    ], SearchBostonCrimeRequest.prototype, "queryParams", void 0);
    return SearchBostonCrimeRequest;
}(SpeakeasyBase));
export { SearchBostonCrimeRequest };
var SearchBostonCrimeResponse = /** @class */ (function (_super) {
    __extends(SearchBostonCrimeResponse, _super);
    function SearchBostonCrimeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchBostonCrimeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchBostonCrimeResponse.prototype, "statusCode", void 0);
    return SearchBostonCrimeResponse;
}(SpeakeasyBase));
export { SearchBostonCrimeResponse };
