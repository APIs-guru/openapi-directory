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
var SearchPropertySalesQueryParams = /** @class */ (function (_super) {
    __extends(SearchPropertySalesQueryParams, _super);
    function SearchPropertySalesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchPropertySalesQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchPropertySalesQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchPropertySalesQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchPropertySalesQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchPropertySalesQueryParams.prototype, "fromdate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "group", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchPropertySalesQueryParams.prototype, "max", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchPropertySalesQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchPropertySalesQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchPropertySalesQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchPropertySalesQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.building_description" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "searchDbPropertySalesBuildingDescription", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.building_design" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "searchDbPropertySalesBuildingDesign", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.buyer" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "searchDbPropertySalesBuyer", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.city" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "searchDbPropertySalesCity", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.location" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "searchDbPropertySalesLocation", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.property_address" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "searchDbPropertySalesPropertyAddress", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.sale_date" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "searchDbPropertySalesSaleDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.sale_price" }),
        __metadata("design:type", Number)
    ], SearchPropertySalesQueryParams.prototype, "searchDbPropertySalesSalePrice", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.seller" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "searchDbPropertySalesSeller", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.subdivision" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "searchDbPropertySalesSubdivision", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.type" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "searchDbPropertySalesType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search.db_property_sales.zipcode" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "searchDbPropertySalesZipcode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchPropertySalesQueryParams.prototype, "skip", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchPropertySalesQueryParams.prototype, "text", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchPropertySalesQueryParams.prototype, "todate", void 0);
    return SearchPropertySalesQueryParams;
}(SpeakeasyBase));
export { SearchPropertySalesQueryParams };
var SearchPropertySalesRequest = /** @class */ (function (_super) {
    __extends(SearchPropertySalesRequest, _super);
    function SearchPropertySalesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SearchPropertySalesQueryParams)
    ], SearchPropertySalesRequest.prototype, "queryParams", void 0);
    return SearchPropertySalesRequest;
}(SpeakeasyBase));
export { SearchPropertySalesRequest };
var SearchPropertySalesResponse = /** @class */ (function (_super) {
    __extends(SearchPropertySalesResponse, _super);
    function SearchPropertySalesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SearchPropertySalesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SearchPropertySalesResponse.prototype, "statusCode", void 0);
    return SearchPropertySalesResponse;
}(SpeakeasyBase));
export { SearchPropertySalesResponse };
