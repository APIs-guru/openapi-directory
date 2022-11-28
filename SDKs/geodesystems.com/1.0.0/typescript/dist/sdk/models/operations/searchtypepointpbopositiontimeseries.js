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
var SearchTypePointPboPositionTimeSeriesQueryParams = /** @class */ (function (_super) {
    __extends(SearchTypePointPboPositionTimeSeriesQueryParams, _super);
    function SearchTypePointPboPositionTimeSeriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.format_version" }),
        __metadata("design:type", String)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "searchTypePointPboPositionTimeSeriesFormatVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.four_char_id" }),
        __metadata("design:type", String)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "searchTypePointPboPositionTimeSeriesFourCharId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.processing_center" }),
        __metadata("design:type", String)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "searchTypePointPboPositionTimeSeriesProcessingCenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.reference_frame" }),
        __metadata("design:type", String)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "searchTypePointPboPositionTimeSeriesReferenceFrame", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.type_point_pbo_position_time_series.station_name" }),
        __metadata("design:type", String)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "searchTypePointPboPositionTimeSeriesStationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchTypePointPboPositionTimeSeriesQueryParams.prototype, "todate", void 0);
    return SearchTypePointPboPositionTimeSeriesQueryParams;
}(SpeakeasyBase));
export { SearchTypePointPboPositionTimeSeriesQueryParams };
var SearchTypePointPboPositionTimeSeriesRequest = /** @class */ (function (_super) {
    __extends(SearchTypePointPboPositionTimeSeriesRequest, _super);
    function SearchTypePointPboPositionTimeSeriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchTypePointPboPositionTimeSeriesQueryParams)
    ], SearchTypePointPboPositionTimeSeriesRequest.prototype, "queryParams", void 0);
    return SearchTypePointPboPositionTimeSeriesRequest;
}(SpeakeasyBase));
export { SearchTypePointPboPositionTimeSeriesRequest };
var SearchTypePointPboPositionTimeSeriesResponse = /** @class */ (function (_super) {
    __extends(SearchTypePointPboPositionTimeSeriesResponse, _super);
    function SearchTypePointPboPositionTimeSeriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchTypePointPboPositionTimeSeriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchTypePointPboPositionTimeSeriesResponse.prototype, "statusCode", void 0);
    return SearchTypePointPboPositionTimeSeriesResponse;
}(SpeakeasyBase));
export { SearchTypePointPboPositionTimeSeriesResponse };
