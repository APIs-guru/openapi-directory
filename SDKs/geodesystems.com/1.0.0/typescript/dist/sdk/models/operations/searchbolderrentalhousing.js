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
var SearchBolderRentalHousingQueryParams = /** @class */ (function (_super) {
    __extends(SearchBolderRentalHousingQueryParams, _super);
    function SearchBolderRentalHousingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.from" }),
        __metadata("design:type", Date)
    ], SearchBolderRentalHousingQueryParams.prototype, "changedateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changedate.to" }),
        __metadata("design:type", Date)
    ], SearchBolderRentalHousingQueryParams.prototype, "changedateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.from" }),
        __metadata("design:type", Date)
    ], SearchBolderRentalHousingQueryParams.prototype, "createdateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdate.to" }),
        __metadata("design:type", Date)
    ], SearchBolderRentalHousingQueryParams.prototype, "createdateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filesuffix" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "filesuffix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromdate" }),
        __metadata("design:type", Date)
    ], SearchBolderRentalHousingQueryParams.prototype, "fromdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" }),
        __metadata("design:type", Number)
    ], SearchBolderRentalHousingQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlatitude" }),
        __metadata("design:type", Number)
    ], SearchBolderRentalHousingQueryParams.prototype, "maxlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxlongitude" }),
        __metadata("design:type", Number)
    ], SearchBolderRentalHousingQueryParams.prototype, "maxlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlatitude" }),
        __metadata("design:type", Number)
    ], SearchBolderRentalHousingQueryParams.prototype, "minlatitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minlongitude" }),
        __metadata("design:type", Number)
    ], SearchBolderRentalHousingQueryParams.prototype, "minlongitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.bldgtype" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingBldgtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.company" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingCompany", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.complexnm" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingComplexnm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.dwellunits" }),
        __metadata("design:type", Number)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingDwellunits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.engcompl" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingEngcompl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.licenseexp" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingLicenseexp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.licensenum" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingLicensenum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.location" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.name" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.neighbrhd" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingNeighbrhd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.person_1" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingPerson1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.person_2" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingPerson2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.persontype" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingPersontype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.ppl1_coname" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingPpl1Coname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.ppl1_role" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingPpl1Role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.ppl2_coname" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingPpl2Coname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.ppl2_role" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingPpl2Role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.propaddr1" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingPropaddr1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.rentaltype" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingRentaltype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search.db_bolder_rental_housing.roomunits" }),
        __metadata("design:type", Number)
    ], SearchBolderRentalHousingQueryParams.prototype, "searchDbBolderRentalHousingRoomunits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" }),
        __metadata("design:type", Number)
    ], SearchBolderRentalHousingQueryParams.prototype, "skip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" }),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingQueryParams.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=todate" }),
        __metadata("design:type", Date)
    ], SearchBolderRentalHousingQueryParams.prototype, "todate", void 0);
    return SearchBolderRentalHousingQueryParams;
}(SpeakeasyBase));
export { SearchBolderRentalHousingQueryParams };
var SearchBolderRentalHousingRequest = /** @class */ (function (_super) {
    __extends(SearchBolderRentalHousingRequest, _super);
    function SearchBolderRentalHousingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchBolderRentalHousingQueryParams)
    ], SearchBolderRentalHousingRequest.prototype, "queryParams", void 0);
    return SearchBolderRentalHousingRequest;
}(SpeakeasyBase));
export { SearchBolderRentalHousingRequest };
var SearchBolderRentalHousingResponse = /** @class */ (function (_super) {
    __extends(SearchBolderRentalHousingResponse, _super);
    function SearchBolderRentalHousingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchBolderRentalHousingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchBolderRentalHousingResponse.prototype, "statusCode", void 0);
    return SearchBolderRentalHousingResponse;
}(SpeakeasyBase));
export { SearchBolderRentalHousingResponse };
