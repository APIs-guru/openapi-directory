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
var SearchUfoSightingsQueryParams = /** @class */ (function (_super) {
    __extends(SearchUfoSightingsQueryParams, _super);
    function SearchUfoSightingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchUfoSightingsQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchUfoSightingsQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchUfoSightingsQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchUfoSightingsQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchUfoSightingsQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchUfoSightingsQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchUfoSightingsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchUfoSightingsQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchUfoSightingsQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchUfoSightingsQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchUfoSightingsQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchUfoSightingsQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchUfoSightingsQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchUfoSightingsQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.city" }),
        __metadata("design:type", String)
    ], SearchUfoSightingsQueryParams.prototype, "searchDbUfoSightingsCity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.comments" }),
        __metadata("design:type", String)
    ], SearchUfoSightingsQueryParams.prototype, "searchDbUfoSightingsComments", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.country" }),
        __metadata("design:type", String)
    ], SearchUfoSightingsQueryParams.prototype, "searchDbUfoSightingsCountry", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.date_posted" }),
        __metadata("design:type", String)
    ], SearchUfoSightingsQueryParams.prototype, "searchDbUfoSightingsDatePosted", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.datetime" }),
        __metadata("design:type", String)
    ], SearchUfoSightingsQueryParams.prototype, "searchDbUfoSightingsDatetime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.duration_hours_min" }),
        __metadata("design:type", String)
    ], SearchUfoSightingsQueryParams.prototype, "searchDbUfoSightingsDurationHoursMin", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.duration_seconds" }),
        __metadata("design:type", Number)
    ], SearchUfoSightingsQueryParams.prototype, "searchDbUfoSightingsDurationSeconds", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.latitude" }),
        __metadata("design:type", Number)
    ], SearchUfoSightingsQueryParams.prototype, "searchDbUfoSightingsLatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.longitude" }),
        __metadata("design:type", Number)
    ], SearchUfoSightingsQueryParams.prototype, "searchDbUfoSightingsLongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.shape" }),
        __metadata("design:type", String)
    ], SearchUfoSightingsQueryParams.prototype, "searchDbUfoSightingsShape", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_ufo_sightings.state" }),
        __metadata("design:type", String)
    ], SearchUfoSightingsQueryParams.prototype, "searchDbUfoSightingsState", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchUfoSightingsQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchUfoSightingsQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchUfoSightingsQueryParams.prototype, "todate", void 0);
    return SearchUfoSightingsQueryParams;
}(SpeakeasyBase));
export { SearchUfoSightingsQueryParams };
var SearchUfoSightingsRequest = /** @class */ (function (_super) {
    __extends(SearchUfoSightingsRequest, _super);
    function SearchUfoSightingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchUfoSightingsQueryParams)
    ], SearchUfoSightingsRequest.prototype, "queryParams", void 0);
    return SearchUfoSightingsRequest;
}(SpeakeasyBase));
export { SearchUfoSightingsRequest };
var SearchUfoSightingsResponse = /** @class */ (function (_super) {
    __extends(SearchUfoSightingsResponse, _super);
    function SearchUfoSightingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchUfoSightingsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchUfoSightingsResponse.prototype, "statusCode", void 0);
    return SearchUfoSightingsResponse;
}(SpeakeasyBase));
export { SearchUfoSightingsResponse };
