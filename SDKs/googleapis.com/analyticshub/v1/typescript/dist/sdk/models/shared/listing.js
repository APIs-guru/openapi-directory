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
import { BigQueryDatasetSource } from "./bigquerydatasetsource";
import { DataProvider } from "./dataprovider";
import { Publisher } from "./publisher";
export var ListingCategoriesEnum;
(function (ListingCategoriesEnum) {
    ListingCategoriesEnum["CategoryUnspecified"] = "CATEGORY_UNSPECIFIED";
    ListingCategoriesEnum["CategoryOthers"] = "CATEGORY_OTHERS";
    ListingCategoriesEnum["CategoryAdvertisingAndMarketing"] = "CATEGORY_ADVERTISING_AND_MARKETING";
    ListingCategoriesEnum["CategoryCommerce"] = "CATEGORY_COMMERCE";
    ListingCategoriesEnum["CategoryClimateAndEnvironment"] = "CATEGORY_CLIMATE_AND_ENVIRONMENT";
    ListingCategoriesEnum["CategoryDemographics"] = "CATEGORY_DEMOGRAPHICS";
    ListingCategoriesEnum["CategoryEconomics"] = "CATEGORY_ECONOMICS";
    ListingCategoriesEnum["CategoryEducation"] = "CATEGORY_EDUCATION";
    ListingCategoriesEnum["CategoryEnergy"] = "CATEGORY_ENERGY";
    ListingCategoriesEnum["CategoryFinancial"] = "CATEGORY_FINANCIAL";
    ListingCategoriesEnum["CategoryGaming"] = "CATEGORY_GAMING";
    ListingCategoriesEnum["CategoryGeospatial"] = "CATEGORY_GEOSPATIAL";
    ListingCategoriesEnum["CategoryHealthcareAndLifeScience"] = "CATEGORY_HEALTHCARE_AND_LIFE_SCIENCE";
    ListingCategoriesEnum["CategoryMedia"] = "CATEGORY_MEDIA";
    ListingCategoriesEnum["CategoryPublicSector"] = "CATEGORY_PUBLIC_SECTOR";
    ListingCategoriesEnum["CategoryRetail"] = "CATEGORY_RETAIL";
    ListingCategoriesEnum["CategorySports"] = "CATEGORY_SPORTS";
    ListingCategoriesEnum["CategoryScienceAndResearch"] = "CATEGORY_SCIENCE_AND_RESEARCH";
    ListingCategoriesEnum["CategoryTransportationAndLogistics"] = "CATEGORY_TRANSPORTATION_AND_LOGISTICS";
    ListingCategoriesEnum["CategoryTravelAndTourism"] = "CATEGORY_TRAVEL_AND_TOURISM";
})(ListingCategoriesEnum || (ListingCategoriesEnum = {}));
export var ListingStateEnum;
(function (ListingStateEnum) {
    ListingStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ListingStateEnum["Active"] = "ACTIVE";
})(ListingStateEnum || (ListingStateEnum = {}));
// ListingInput
/**
 * A listing is what gets published into a data exchange that a subscriber can subscribe to. It contains a reference to the data source along with descriptive information that will help subscribers find and subscribe the data.
**/
var ListingInput = /** @class */ (function (_super) {
    __extends(ListingInput, _super);
    function ListingInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigqueryDataset" }),
        __metadata("design:type", BigQueryDatasetSource)
    ], ListingInput.prototype, "bigqueryDataset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], ListingInput.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataProvider" }),
        __metadata("design:type", DataProvider)
    ], ListingInput.prototype, "dataProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ListingInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ListingInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation" }),
        __metadata("design:type", String)
    ], ListingInput.prototype, "documentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon" }),
        __metadata("design:type", String)
    ], ListingInput.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryContact" }),
        __metadata("design:type", String)
    ], ListingInput.prototype, "primaryContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", Publisher)
    ], ListingInput.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestAccess" }),
        __metadata("design:type", String)
    ], ListingInput.prototype, "requestAccess", void 0);
    return ListingInput;
}(SpeakeasyBase));
export { ListingInput };
// Listing
/**
 * A listing is what gets published into a data exchange that a subscriber can subscribe to. It contains a reference to the data source along with descriptive information that will help subscribers find and subscribe the data.
**/
var Listing = /** @class */ (function (_super) {
    __extends(Listing, _super);
    function Listing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigqueryDataset" }),
        __metadata("design:type", BigQueryDatasetSource)
    ], Listing.prototype, "bigqueryDataset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], Listing.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataProvider" }),
        __metadata("design:type", DataProvider)
    ], Listing.prototype, "dataProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Listing.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Listing.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation" }),
        __metadata("design:type", String)
    ], Listing.prototype, "documentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon" }),
        __metadata("design:type", String)
    ], Listing.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Listing.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryContact" }),
        __metadata("design:type", String)
    ], Listing.prototype, "primaryContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", Publisher)
    ], Listing.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestAccess" }),
        __metadata("design:type", String)
    ], Listing.prototype, "requestAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Listing.prototype, "state", void 0);
    return Listing;
}(SpeakeasyBase));
export { Listing };
