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
var SearchTypePointNoaaCarbonQueryParams = /** @class */ (function (_super) {
    __extends(SearchTypePointNoaaCarbonQueryParams, _super);
    function SearchTypePointNoaaCarbonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_carbon.lab_id_number" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "searchTypePointNoaaCarbonLabIdNumber", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_carbon.measurement_group" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "searchTypePointNoaaCarbonMeasurementGroup", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_carbon.parameter" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "searchTypePointNoaaCarbonParameter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_carbon.project" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "searchTypePointNoaaCarbonProject", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_carbon.site_id" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "searchTypePointNoaaCarbonSiteId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchTypePointNoaaCarbonQueryParams.prototype, "todate", void 0);
    return SearchTypePointNoaaCarbonQueryParams;
}(SpeakeasyBase));
export { SearchTypePointNoaaCarbonQueryParams };
var SearchTypePointNoaaCarbonRequest = /** @class */ (function (_super) {
    __extends(SearchTypePointNoaaCarbonRequest, _super);
    function SearchTypePointNoaaCarbonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchTypePointNoaaCarbonQueryParams)
    ], SearchTypePointNoaaCarbonRequest.prototype, "queryParams", void 0);
    return SearchTypePointNoaaCarbonRequest;
}(SpeakeasyBase));
export { SearchTypePointNoaaCarbonRequest };
var SearchTypePointNoaaCarbonResponse = /** @class */ (function (_super) {
    __extends(SearchTypePointNoaaCarbonResponse, _super);
    function SearchTypePointNoaaCarbonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchTypePointNoaaCarbonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchTypePointNoaaCarbonResponse.prototype, "statusCode", void 0);
    return SearchTypePointNoaaCarbonResponse;
}(SpeakeasyBase));
export { SearchTypePointNoaaCarbonResponse };
