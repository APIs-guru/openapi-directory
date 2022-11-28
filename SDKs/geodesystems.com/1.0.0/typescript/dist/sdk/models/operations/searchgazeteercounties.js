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
var SearchGazeteerCountiesQueryParams = /** @class */ (function (_super) {
    __extends(SearchGazeteerCountiesQueryParams, _super);
    function SearchGazeteerCountiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchGazeteerCountiesQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchGazeteerCountiesQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchGazeteerCountiesQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchGazeteerCountiesQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchGazeteerCountiesQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchGazeteerCountiesQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchGazeteerCountiesQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchGazeteerCountiesQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchGazeteerCountiesQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchGazeteerCountiesQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchGazeteerCountiesQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchGazeteerCountiesQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchGazeteerCountiesQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchGazeteerCountiesQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.area_land" }),
        __metadata("design:type", Number)
    ], SearchGazeteerCountiesQueryParams.prototype, "searchDbGazeteerCountiesAreaLand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.area_water" }),
        __metadata("design:type", Number)
    ], SearchGazeteerCountiesQueryParams.prototype, "searchDbGazeteerCountiesAreaWater", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.county_fips" }),
        __metadata("design:type", String)
    ], SearchGazeteerCountiesQueryParams.prototype, "searchDbGazeteerCountiesCountyFips", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.county_name" }),
        __metadata("design:type", String)
    ], SearchGazeteerCountiesQueryParams.prototype, "searchDbGazeteerCountiesCountyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.full_county_fips" }),
        __metadata("design:type", String)
    ], SearchGazeteerCountiesQueryParams.prototype, "searchDbGazeteerCountiesFullCountyFips", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.location" }),
        __metadata("design:type", String)
    ], SearchGazeteerCountiesQueryParams.prototype, "searchDbGazeteerCountiesLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.state_abbreviation" }),
        __metadata("design:type", String)
    ], SearchGazeteerCountiesQueryParams.prototype, "searchDbGazeteerCountiesStateAbbreviation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_gazeteer_counties.state_fips" }),
        __metadata("design:type", String)
    ], SearchGazeteerCountiesQueryParams.prototype, "searchDbGazeteerCountiesStateFips", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchGazeteerCountiesQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchGazeteerCountiesQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchGazeteerCountiesQueryParams.prototype, "todate", void 0);
    return SearchGazeteerCountiesQueryParams;
}(SpeakeasyBase));
export { SearchGazeteerCountiesQueryParams };
var SearchGazeteerCountiesRequest = /** @class */ (function (_super) {
    __extends(SearchGazeteerCountiesRequest, _super);
    function SearchGazeteerCountiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchGazeteerCountiesQueryParams)
    ], SearchGazeteerCountiesRequest.prototype, "queryParams", void 0);
    return SearchGazeteerCountiesRequest;
}(SpeakeasyBase));
export { SearchGazeteerCountiesRequest };
var SearchGazeteerCountiesResponse = /** @class */ (function (_super) {
    __extends(SearchGazeteerCountiesResponse, _super);
    function SearchGazeteerCountiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchGazeteerCountiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchGazeteerCountiesResponse.prototype, "statusCode", void 0);
    return SearchGazeteerCountiesResponse;
}(SpeakeasyBase));
export { SearchGazeteerCountiesResponse };
