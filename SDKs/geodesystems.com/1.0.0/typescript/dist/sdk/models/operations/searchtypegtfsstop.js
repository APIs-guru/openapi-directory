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
var SearchTypeGtfsStopQueryParams = /** @class */ (function (_super) {
    __extends(SearchTypeGtfsStopQueryParams, _super);
    function SearchTypeGtfsStopQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchTypeGtfsStopQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchTypeGtfsStopQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchTypeGtfsStopQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchTypeGtfsStopQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchTypeGtfsStopQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchTypeGtfsStopQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchTypeGtfsStopQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchTypeGtfsStopQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchTypeGtfsStopQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchTypeGtfsStopQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchTypeGtfsStopQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchTypeGtfsStopQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchTypeGtfsStopQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchTypeGtfsStopQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_gtfs_stop.location_type" }),
        __metadata("design:type", String)
    ], SearchTypeGtfsStopQueryParams.prototype, "searchTypeGtfsStopLocationType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_gtfs_stop.stop_code" }),
        __metadata("design:type", String)
    ], SearchTypeGtfsStopQueryParams.prototype, "searchTypeGtfsStopStopCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_gtfs_stop.stop_id" }),
        __metadata("design:type", String)
    ], SearchTypeGtfsStopQueryParams.prototype, "searchTypeGtfsStopStopId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_gtfs_stop.wheelchair_boarding" }),
        __metadata("design:type", String)
    ], SearchTypeGtfsStopQueryParams.prototype, "searchTypeGtfsStopWheelchairBoarding", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_gtfs_stop.zone_id" }),
        __metadata("design:type", String)
    ], SearchTypeGtfsStopQueryParams.prototype, "searchTypeGtfsStopZoneId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchTypeGtfsStopQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchTypeGtfsStopQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchTypeGtfsStopQueryParams.prototype, "todate", void 0);
    return SearchTypeGtfsStopQueryParams;
}(SpeakeasyBase));
export { SearchTypeGtfsStopQueryParams };
var SearchTypeGtfsStopRequest = /** @class */ (function (_super) {
    __extends(SearchTypeGtfsStopRequest, _super);
    function SearchTypeGtfsStopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchTypeGtfsStopQueryParams)
    ], SearchTypeGtfsStopRequest.prototype, "queryParams", void 0);
    return SearchTypeGtfsStopRequest;
}(SpeakeasyBase));
export { SearchTypeGtfsStopRequest };
var SearchTypeGtfsStopResponse = /** @class */ (function (_super) {
    __extends(SearchTypeGtfsStopResponse, _super);
    function SearchTypeGtfsStopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchTypeGtfsStopResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchTypeGtfsStopResponse.prototype, "statusCode", void 0);
    return SearchTypeGtfsStopResponse;
}(SpeakeasyBase));
export { SearchTypeGtfsStopResponse };
