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
var SearchPoliceStopDataQueryParams = /** @class */ (function (_super) {
    __extends(SearchPoliceStopDataQueryParams, _super);
    function SearchPoliceStopDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchPoliceStopDataQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchPoliceStopDataQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchPoliceStopDataQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchPoliceStopDataQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchPoliceStopDataQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchPoliceStopDataQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchPoliceStopDataQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchPoliceStopDataQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchPoliceStopDataQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchPoliceStopDataQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchPoliceStopDataQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchPoliceStopDataQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchPoliceStopDataQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchPoliceStopDataQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.address" }),
        __metadata("design:type", String)
    ], SearchPoliceStopDataQueryParams.prototype, "searchDbPoliceStopDataAddress", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.date" }),
        __metadata("design:type", String)
    ], SearchPoliceStopDataQueryParams.prototype, "searchDbPoliceStopDataDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.ethnicity" }),
        __metadata("design:type", String)
    ], SearchPoliceStopDataQueryParams.prototype, "searchDbPoliceStopDataEthnicity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.minutes" }),
        __metadata("design:type", Number)
    ], SearchPoliceStopDataQueryParams.prototype, "searchDbPoliceStopDataMinutes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.race" }),
        __metadata("design:type", String)
    ], SearchPoliceStopDataQueryParams.prototype, "searchDbPoliceStopDataRace", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.resident" }),
        __metadata("design:type", String)
    ], SearchPoliceStopDataQueryParams.prototype, "searchDbPoliceStopDataResident", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_police_stop_data.sex" }),
        __metadata("design:type", String)
    ], SearchPoliceStopDataQueryParams.prototype, "searchDbPoliceStopDataSex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchPoliceStopDataQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchPoliceStopDataQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchPoliceStopDataQueryParams.prototype, "todate", void 0);
    return SearchPoliceStopDataQueryParams;
}(SpeakeasyBase));
export { SearchPoliceStopDataQueryParams };
var SearchPoliceStopDataRequest = /** @class */ (function (_super) {
    __extends(SearchPoliceStopDataRequest, _super);
    function SearchPoliceStopDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchPoliceStopDataQueryParams)
    ], SearchPoliceStopDataRequest.prototype, "queryParams", void 0);
    return SearchPoliceStopDataRequest;
}(SpeakeasyBase));
export { SearchPoliceStopDataRequest };
var SearchPoliceStopDataResponse = /** @class */ (function (_super) {
    __extends(SearchPoliceStopDataResponse, _super);
    function SearchPoliceStopDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchPoliceStopDataResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchPoliceStopDataResponse.prototype, "statusCode", void 0);
    return SearchPoliceStopDataResponse;
}(SpeakeasyBase));
export { SearchPoliceStopDataResponse };
