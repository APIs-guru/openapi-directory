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
var SearchTypePointNoaaFlaskMonthQueryParams = /** @class */ (function (_super) {
    __extends(SearchTypePointNoaaFlaskMonthQueryParams, _super);
    function SearchTypePointNoaaFlaskMonthQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_month.lab_id_number" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "searchTypePointNoaaFlaskMonthLabIdNumber", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_month.measurement_group" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "searchTypePointNoaaFlaskMonthMeasurementGroup", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_month.parameter" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "searchTypePointNoaaFlaskMonthParameter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_month.project" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "searchTypePointNoaaFlaskMonthProject", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_noaa_flask_month.site_id" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "searchTypePointNoaaFlaskMonthSiteId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchTypePointNoaaFlaskMonthQueryParams.prototype, "todate", void 0);
    return SearchTypePointNoaaFlaskMonthQueryParams;
}(SpeakeasyBase));
export { SearchTypePointNoaaFlaskMonthQueryParams };
var SearchTypePointNoaaFlaskMonthRequest = /** @class */ (function (_super) {
    __extends(SearchTypePointNoaaFlaskMonthRequest, _super);
    function SearchTypePointNoaaFlaskMonthRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchTypePointNoaaFlaskMonthQueryParams)
    ], SearchTypePointNoaaFlaskMonthRequest.prototype, "queryParams", void 0);
    return SearchTypePointNoaaFlaskMonthRequest;
}(SpeakeasyBase));
export { SearchTypePointNoaaFlaskMonthRequest };
var SearchTypePointNoaaFlaskMonthResponse = /** @class */ (function (_super) {
    __extends(SearchTypePointNoaaFlaskMonthResponse, _super);
    function SearchTypePointNoaaFlaskMonthResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchTypePointNoaaFlaskMonthResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchTypePointNoaaFlaskMonthResponse.prototype, "statusCode", void 0);
    return SearchTypePointNoaaFlaskMonthResponse;
}(SpeakeasyBase));
export { SearchTypePointNoaaFlaskMonthResponse };
