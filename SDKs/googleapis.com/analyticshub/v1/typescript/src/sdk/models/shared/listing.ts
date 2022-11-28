import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigQueryDatasetSource } from "./bigquerydatasetsource";
import { DataProvider } from "./dataprovider";
import { Publisher } from "./publisher";


export enum ListingCategoriesEnum {
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

export enum ListingStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE"
}


// ListingInput
/** 
 * A listing is what gets published into a data exchange that a subscriber can subscribe to. It contains a reference to the data source along with descriptive information that will help subscribers find and subscribe the data.
**/
export class ListingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryDataset" })
  bigqueryDataset?: BigQueryDatasetSource;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: ListingCategoriesEnum[];

  @SpeakeasyMetadata({ data: "json, name=dataProvider" })
  dataProvider?: DataProvider;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation?: string;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryContact" })
  primaryContact?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: Publisher;

  @SpeakeasyMetadata({ data: "json, name=requestAccess" })
  requestAccess?: string;
}


// Listing
/** 
 * A listing is what gets published into a data exchange that a subscriber can subscribe to. It contains a reference to the data source along with descriptive information that will help subscribers find and subscribe the data.
**/
export class Listing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryDataset" })
  bigqueryDataset?: BigQueryDatasetSource;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: ListingCategoriesEnum[];

  @SpeakeasyMetadata({ data: "json, name=dataProvider" })
  dataProvider?: DataProvider;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation?: string;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryContact" })
  primaryContact?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: Publisher;

  @SpeakeasyMetadata({ data: "json, name=requestAccess" })
  requestAccess?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ListingStateEnum;
}
