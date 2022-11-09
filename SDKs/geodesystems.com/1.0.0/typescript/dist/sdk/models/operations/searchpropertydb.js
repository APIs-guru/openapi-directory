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
var SearchPropertydbQueryParams = /** @class */ (function (_super) {
    __extends(SearchPropertydbQueryParams, _super);
    function SearchPropertydbQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchPropertydbQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchPropertydbQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchPropertydbQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchPropertydbQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchPropertydbQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchPropertydbQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchPropertydbQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchPropertydbQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchPropertydbQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchPropertydbQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchPropertydbQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchPropertydbQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchPropertydbQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchPropertydbQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.address" }),
        __metadata("design:type", String)
    ], SearchPropertydbQueryParams.prototype, "searchDbPropertydbAddress", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.building_type" }),
        __metadata("design:type", String)
    ], SearchPropertydbQueryParams.prototype, "searchDbPropertydbBuildingType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.city" }),
        __metadata("design:type", String)
    ], SearchPropertydbQueryParams.prototype, "searchDbPropertydbCity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.house_size" }),
        __metadata("design:type", Number)
    ], SearchPropertydbQueryParams.prototype, "searchDbPropertydbHouseSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.location" }),
        __metadata("design:type", String)
    ], SearchPropertydbQueryParams.prototype, "searchDbPropertydbLocation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.lot_acres" }),
        __metadata("design:type", Number)
    ], SearchPropertydbQueryParams.prototype, "searchDbPropertydbLotAcres", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.lot_sqft" }),
        __metadata("design:type", Number)
    ], SearchPropertydbQueryParams.prototype, "searchDbPropertydbLotSqft", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.owner" }),
        __metadata("design:type", String)
    ], SearchPropertydbQueryParams.prototype, "searchDbPropertydbOwner", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.price_sqft" }),
        __metadata("design:type", Number)
    ], SearchPropertydbQueryParams.prototype, "searchDbPropertydbPriceSqft", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.property_id" }),
        __metadata("design:type", String)
    ], SearchPropertydbQueryParams.prototype, "searchDbPropertydbPropertyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.state" }),
        __metadata("design:type", String)
    ], SearchPropertydbQueryParams.prototype, "searchDbPropertydbState", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_propertydb.value" }),
        __metadata("design:type", Number)
    ], SearchPropertydbQueryParams.prototype, "searchDbPropertydbValue", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchPropertydbQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchPropertydbQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchPropertydbQueryParams.prototype, "todate", void 0);
    return SearchPropertydbQueryParams;
}(SpeakeasyBase));
export { SearchPropertydbQueryParams };
var SearchPropertydbRequest = /** @class */ (function (_super) {
    __extends(SearchPropertydbRequest, _super);
    function SearchPropertydbRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchPropertydbQueryParams)
    ], SearchPropertydbRequest.prototype, "queryParams", void 0);
    return SearchPropertydbRequest;
}(SpeakeasyBase));
export { SearchPropertydbRequest };
var SearchPropertydbResponse = /** @class */ (function (_super) {
    __extends(SearchPropertydbResponse, _super);
    function SearchPropertydbResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchPropertydbResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchPropertydbResponse.prototype, "statusCode", void 0);
    return SearchPropertydbResponse;
}(SpeakeasyBase));
export { SearchPropertydbResponse };
