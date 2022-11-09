import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BigQueryDatasetSource } from "./bigquerydatasetsource";
import { DataProvider } from "./dataprovider";
import { Publisher } from "./publisher";
export declare enum ListingCategoriesEnum {
    CategoryUnspecified = "CATEGORY_UNSPECIFIED",
    CategoryOthers = "CATEGORY_OTHERS",
    CategoryAdvertisingAndMarketing = "CATEGORY_ADVERTISING_AND_MARKETING",
    CategoryCommerce = "CATEGORY_COMMERCE",
    CategoryClimateAndEnvironment = "CATEGORY_CLIMATE_AND_ENVIRONMENT",
    CategoryDemographics = "CATEGORY_DEMOGRAPHICS",
    CategoryEconomics = "CATEGORY_ECONOMICS",
    CategoryEducation = "CATEGORY_EDUCATION",
    CategoryEnergy = "CATEGORY_ENERGY",
    CategoryFinancial = "CATEGORY_FINANCIAL",
    CategoryGaming = "CATEGORY_GAMING",
    CategoryGeospatial = "CATEGORY_GEOSPATIAL",
    CategoryHealthcareAndLifeScience = "CATEGORY_HEALTHCARE_AND_LIFE_SCIENCE",
    CategoryMedia = "CATEGORY_MEDIA",
    CategoryPublicSector = "CATEGORY_PUBLIC_SECTOR",
    CategoryRetail = "CATEGORY_RETAIL",
    CategorySports = "CATEGORY_SPORTS",
    CategoryScienceAndResearch = "CATEGORY_SCIENCE_AND_RESEARCH",
    CategoryTransportationAndLogistics = "CATEGORY_TRANSPORTATION_AND_LOGISTICS",
    CategoryTravelAndTourism = "CATEGORY_TRAVEL_AND_TOURISM"
}
export declare enum ListingStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE"
}
/**
 * A listing is what gets published into a data exchange that a subscriber can subscribe to. It contains a reference to the data source along with descriptive information that will help subscribers find and subscribe the data.
**/
export declare class Listing extends SpeakeasyBase {
    bigqueryDataset?: BigQueryDatasetSource;
    categories?: ListingCategoriesEnum[];
    dataProvider?: DataProvider;
    description?: string;
    displayName?: string;
    documentation?: string;
    icon?: string;
    name?: string;
    primaryContact?: string;
    publisher?: Publisher;
    requestAccess?: string;
    state?: ListingStateEnum;
}
