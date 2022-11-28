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
var SearchEarthSatelliteLandsatQueryParams = /** @class */ (function (_super) {
    __extends(SearchEarthSatelliteLandsatQueryParams, _super);
    function SearchEarthSatelliteLandsatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.archive_version_number" }),
        __metadata("design:type", Number)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "searchEarthSatelliteLandsatArchiveVersionNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.ground_station" }),
        __metadata("design:type", String)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "searchEarthSatelliteLandsatGroundStation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.satellite" }),
        __metadata("design:type", String)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "searchEarthSatelliteLandsatSatellite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.sensor" }),
        __metadata("design:type", String)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "searchEarthSatelliteLandsatSensor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.wrs_path_number" }),
        __metadata("design:type", Number)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "searchEarthSatelliteLandsatWrsPathNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.earth_satellite_landsat.wrs_row_number" }),
        __metadata("design:type", Number)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "searchEarthSatelliteLandsatWrsRowNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchEarthSatelliteLandsatQueryParams.prototype, "todate", void 0);
    return SearchEarthSatelliteLandsatQueryParams;
}(SpeakeasyBase));
export { SearchEarthSatelliteLandsatQueryParams };
var SearchEarthSatelliteLandsatRequest = /** @class */ (function (_super) {
    __extends(SearchEarthSatelliteLandsatRequest, _super);
    function SearchEarthSatelliteLandsatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchEarthSatelliteLandsatQueryParams)
    ], SearchEarthSatelliteLandsatRequest.prototype, "queryParams", void 0);
    return SearchEarthSatelliteLandsatRequest;
}(SpeakeasyBase));
export { SearchEarthSatelliteLandsatRequest };
var SearchEarthSatelliteLandsatResponse = /** @class */ (function (_super) {
    __extends(SearchEarthSatelliteLandsatResponse, _super);
    function SearchEarthSatelliteLandsatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchEarthSatelliteLandsatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchEarthSatelliteLandsatResponse.prototype, "statusCode", void 0);
    return SearchEarthSatelliteLandsatResponse;
}(SpeakeasyBase));
export { SearchEarthSatelliteLandsatResponse };
