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
var SearchTypePointGeomagIaga2002QueryParams = /** @class */ (function (_super) {
    __extends(SearchTypePointGeomagIaga2002QueryParams, _super);
    function SearchTypePointGeomagIaga2002QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.data_interval" }),
        __metadata("design:type", String)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "searchTypePointGeomagIaga2002DataInterval", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.data_type" }),
        __metadata("design:type", String)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "searchTypePointGeomagIaga2002DataType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.digital_sampling" }),
        __metadata("design:type", String)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "searchTypePointGeomagIaga2002DigitalSampling", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.iaga_code" }),
        __metadata("design:type", String)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "searchTypePointGeomagIaga2002IagaCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.source_of_data" }),
        __metadata("design:type", String)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "searchTypePointGeomagIaga2002SourceOfData", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.type_point_geomag_iaga2002.station_name" }),
        __metadata("design:type", String)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "searchTypePointGeomagIaga2002StationName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchTypePointGeomagIaga2002QueryParams.prototype, "todate", void 0);
    return SearchTypePointGeomagIaga2002QueryParams;
}(SpeakeasyBase));
export { SearchTypePointGeomagIaga2002QueryParams };
var SearchTypePointGeomagIaga2002Request = /** @class */ (function (_super) {
    __extends(SearchTypePointGeomagIaga2002Request, _super);
    function SearchTypePointGeomagIaga2002Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchTypePointGeomagIaga2002QueryParams)
    ], SearchTypePointGeomagIaga2002Request.prototype, "queryParams", void 0);
    return SearchTypePointGeomagIaga2002Request;
}(SpeakeasyBase));
export { SearchTypePointGeomagIaga2002Request };
var SearchTypePointGeomagIaga2002Response = /** @class */ (function (_super) {
    __extends(SearchTypePointGeomagIaga2002Response, _super);
    function SearchTypePointGeomagIaga2002Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchTypePointGeomagIaga2002Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchTypePointGeomagIaga2002Response.prototype, "statusCode", void 0);
    return SearchTypePointGeomagIaga2002Response;
}(SpeakeasyBase));
export { SearchTypePointGeomagIaga2002Response };
