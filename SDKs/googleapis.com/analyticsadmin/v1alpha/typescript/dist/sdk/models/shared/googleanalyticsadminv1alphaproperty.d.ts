import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum {
    IndustryCategoryUnspecified = "INDUSTRY_CATEGORY_UNSPECIFIED",
    Automotive = "AUTOMOTIVE",
    BusinessAndIndustrialMarkets = "BUSINESS_AND_INDUSTRIAL_MARKETS",
    Finance = "FINANCE",
    Healthcare = "HEALTHCARE",
    Technology = "TECHNOLOGY",
    Travel = "TRAVEL",
    Other = "OTHER",
    ArtsAndEntertainment = "ARTS_AND_ENTERTAINMENT",
    BeautyAndFitness = "BEAUTY_AND_FITNESS",
    BooksAndLiterature = "BOOKS_AND_LITERATURE",
    FoodAndDrink = "FOOD_AND_DRINK",
    Games = "GAMES",
    HobbiesAndLeisure = "HOBBIES_AND_LEISURE",
    HomeAndGarden = "HOME_AND_GARDEN",
    InternetAndTelecom = "INTERNET_AND_TELECOM",
    LawAndGovernment = "LAW_AND_GOVERNMENT",
    News = "NEWS",
    OnlineCommunities = "ONLINE_COMMUNITIES",
    PeopleAndSociety = "PEOPLE_AND_SOCIETY",
    PetsAndAnimals = "PETS_AND_ANIMALS",
    RealEstate = "REAL_ESTATE",
    Reference = "REFERENCE",
    Science = "SCIENCE",
    Sports = "SPORTS",
    JobsAndEducation = "JOBS_AND_EDUCATION",
    Shopping = "SHOPPING"
}
export declare enum GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum {
    PropertyTypeUnspecified = "PROPERTY_TYPE_UNSPECIFIED",
    PropertyTypeOrdinary = "PROPERTY_TYPE_ORDINARY",
    PropertyTypeSubproperty = "PROPERTY_TYPE_SUBPROPERTY",
    PropertyTypeRollup = "PROPERTY_TYPE_ROLLUP"
}
export declare enum GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum {
    ServiceLevelUnspecified = "SERVICE_LEVEL_UNSPECIFIED",
    GoogleAnalyticsStandard = "GOOGLE_ANALYTICS_STANDARD",
    GoogleAnalytics360 = "GOOGLE_ANALYTICS_360"
}
/**
 * A resource message representing a Google Analytics GA4 property.
**/
export declare class GoogleAnalyticsAdminV1alphaProperty extends SpeakeasyBase {
    account?: string;
    createTime?: string;
    currencyCode?: string;
    deleteTime?: string;
    displayName?: string;
    expireTime?: string;
    industryCategory?: GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum;
    name?: string;
    parent?: string;
    propertyType?: GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum;
    serviceLevel?: GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum;
    timeZone?: string;
    updateTime?: string;
}
/**
 * A resource message representing a Google Analytics GA4 property.
**/
export declare class GoogleAnalyticsAdminV1alphaPropertyInput extends SpeakeasyBase {
    account?: string;
    currencyCode?: string;
    displayName?: string;
    industryCategory?: GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum;
    parent?: string;
    propertyType?: GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum;
    timeZone?: string;
}
