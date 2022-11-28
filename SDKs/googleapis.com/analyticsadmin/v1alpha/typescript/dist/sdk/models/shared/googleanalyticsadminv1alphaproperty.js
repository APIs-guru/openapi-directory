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
export var GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum;
(function (GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum) {
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["IndustryCategoryUnspecified"] = "INDUSTRY_CATEGORY_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["Automotive"] = "AUTOMOTIVE";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["BusinessAndIndustrialMarkets"] = "BUSINESS_AND_INDUSTRIAL_MARKETS";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["Finance"] = "FINANCE";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["Healthcare"] = "HEALTHCARE";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["Technology"] = "TECHNOLOGY";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["Travel"] = "TRAVEL";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["Other"] = "OTHER";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["ArtsAndEntertainment"] = "ARTS_AND_ENTERTAINMENT";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["BeautyAndFitness"] = "BEAUTY_AND_FITNESS";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["BooksAndLiterature"] = "BOOKS_AND_LITERATURE";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["FoodAndDrink"] = "FOOD_AND_DRINK";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["Games"] = "GAMES";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["HobbiesAndLeisure"] = "HOBBIES_AND_LEISURE";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["HomeAndGarden"] = "HOME_AND_GARDEN";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["InternetAndTelecom"] = "INTERNET_AND_TELECOM";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["LawAndGovernment"] = "LAW_AND_GOVERNMENT";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["News"] = "NEWS";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["OnlineCommunities"] = "ONLINE_COMMUNITIES";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["PeopleAndSociety"] = "PEOPLE_AND_SOCIETY";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["PetsAndAnimals"] = "PETS_AND_ANIMALS";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["RealEstate"] = "REAL_ESTATE";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["Reference"] = "REFERENCE";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["Science"] = "SCIENCE";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["Sports"] = "SPORTS";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["JobsAndEducation"] = "JOBS_AND_EDUCATION";
    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum["Shopping"] = "SHOPPING";
})(GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum || (GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = {}));
export var GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum;
(function (GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum) {
    GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum["PropertyTypeUnspecified"] = "PROPERTY_TYPE_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum["PropertyTypeOrdinary"] = "PROPERTY_TYPE_ORDINARY";
    GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum["PropertyTypeSubproperty"] = "PROPERTY_TYPE_SUBPROPERTY";
    GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum["PropertyTypeRollup"] = "PROPERTY_TYPE_ROLLUP";
})(GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum || (GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum = {}));
export var GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum;
(function (GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum) {
    GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum["ServiceLevelUnspecified"] = "SERVICE_LEVEL_UNSPECIFIED";
    GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum["GoogleAnalyticsStandard"] = "GOOGLE_ANALYTICS_STANDARD";
    GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum["GoogleAnalytics360"] = "GOOGLE_ANALYTICS_360";
})(GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum || (GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum = {}));
// GoogleAnalyticsAdminV1alphaProperty
/**
 * A resource message representing a Google Analytics GA4 property.
**/
var GoogleAnalyticsAdminV1alphaProperty = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaProperty, _super);
    function GoogleAnalyticsAdminV1alphaProperty() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaProperty.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaProperty.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaProperty.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaProperty.prototype, "deleteTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaProperty.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaProperty.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=industryCategory" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaProperty.prototype, "industryCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaProperty.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaProperty.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propertyType" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaProperty.prototype, "propertyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceLevel" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaProperty.prototype, "serviceLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaProperty.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaProperty.prototype, "updateTime", void 0);
    return GoogleAnalyticsAdminV1alphaProperty;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaProperty };
// GoogleAnalyticsAdminV1alphaPropertyInput
/**
 * A resource message representing a Google Analytics GA4 property.
**/
var GoogleAnalyticsAdminV1alphaPropertyInput = /** @class */ (function (_super) {
    __extends(GoogleAnalyticsAdminV1alphaPropertyInput, _super);
    function GoogleAnalyticsAdminV1alphaPropertyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaPropertyInput.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaPropertyInput.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaPropertyInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=industryCategory" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaPropertyInput.prototype, "industryCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaPropertyInput.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propertyType" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaPropertyInput.prototype, "propertyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], GoogleAnalyticsAdminV1alphaPropertyInput.prototype, "timeZone", void 0);
    return GoogleAnalyticsAdminV1alphaPropertyInput;
}(SpeakeasyBase));
export { GoogleAnalyticsAdminV1alphaPropertyInput };
