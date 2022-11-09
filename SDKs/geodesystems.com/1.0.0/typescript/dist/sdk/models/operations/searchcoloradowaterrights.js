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
var SearchColoradoWaterRightsQueryParams = /** @class */ (function (_super) {
    __extends(SearchColoradoWaterRightsQueryParams, _super);
    function SearchColoradoWaterRightsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchColoradoWaterRightsQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchColoradoWaterRightsQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchColoradoWaterRightsQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchColoradoWaterRightsQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchColoradoWaterRightsQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchColoradoWaterRightsQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchColoradoWaterRightsQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchColoradoWaterRightsQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchColoradoWaterRightsQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchColoradoWaterRightsQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.adjudication_date" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsAdjudicationDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.appropriation_date" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsAppropriationDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.comments" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsComments", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.county" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsCounty", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.decreed_units" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsDecreedUnits", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.decreed_uses" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsDecreedUses", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.location" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsLocation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.more_information" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsMoreInformation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.net_absolute" }),
        __metadata("design:type", Number)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsNetAbsolute", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.net_apex_absolute" }),
        __metadata("design:type", Number)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsNetApexAbsolute", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.net_apex_conditional" }),
        __metadata("design:type", Number)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsNetApexConditional", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.net_conditional" }),
        __metadata("design:type", Number)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsNetConditional", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.priority_no" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsPriorityNo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.seasonal_limits" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsSeasonalLimits", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.structure_name" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsStructureName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.structure_type" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsStructureType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_colorado_water_rights.water_source" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "searchDbColoradoWaterRightsWaterSource", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchColoradoWaterRightsQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchColoradoWaterRightsQueryParams.prototype, "todate", void 0);
    return SearchColoradoWaterRightsQueryParams;
}(SpeakeasyBase));
export { SearchColoradoWaterRightsQueryParams };
var SearchColoradoWaterRightsRequest = /** @class */ (function (_super) {
    __extends(SearchColoradoWaterRightsRequest, _super);
    function SearchColoradoWaterRightsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchColoradoWaterRightsQueryParams)
    ], SearchColoradoWaterRightsRequest.prototype, "queryParams", void 0);
    return SearchColoradoWaterRightsRequest;
}(SpeakeasyBase));
export { SearchColoradoWaterRightsRequest };
var SearchColoradoWaterRightsResponse = /** @class */ (function (_super) {
    __extends(SearchColoradoWaterRightsResponse, _super);
    function SearchColoradoWaterRightsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchColoradoWaterRightsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchColoradoWaterRightsResponse.prototype, "statusCode", void 0);
    return SearchColoradoWaterRightsResponse;
}(SpeakeasyBase));
export { SearchColoradoWaterRightsResponse };
