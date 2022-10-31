package shared




type ListingCategoriesEnum string

const (
    ListingCategoriesEnumCategoryUnspecified ListingCategoriesEnum = "CATEGORY_UNSPECIFIED"
ListingCategoriesEnumCategoryOthers ListingCategoriesEnum = "CATEGORY_OTHERS"
ListingCategoriesEnumCategoryAdvertisingAndMarketing ListingCategoriesEnum = "CATEGORY_ADVERTISING_AND_MARKETING"
ListingCategoriesEnumCategoryCommerce ListingCategoriesEnum = "CATEGORY_COMMERCE"
ListingCategoriesEnumCategoryClimateAndEnvironment ListingCategoriesEnum = "CATEGORY_CLIMATE_AND_ENVIRONMENT"
ListingCategoriesEnumCategoryDemographics ListingCategoriesEnum = "CATEGORY_DEMOGRAPHICS"
ListingCategoriesEnumCategoryEconomics ListingCategoriesEnum = "CATEGORY_ECONOMICS"
ListingCategoriesEnumCategoryEducation ListingCategoriesEnum = "CATEGORY_EDUCATION"
ListingCategoriesEnumCategoryEnergy ListingCategoriesEnum = "CATEGORY_ENERGY"
ListingCategoriesEnumCategoryFinancial ListingCategoriesEnum = "CATEGORY_FINANCIAL"
ListingCategoriesEnumCategoryGaming ListingCategoriesEnum = "CATEGORY_GAMING"
ListingCategoriesEnumCategoryGeospatial ListingCategoriesEnum = "CATEGORY_GEOSPATIAL"
ListingCategoriesEnumCategoryHealthcareAndLifeScience ListingCategoriesEnum = "CATEGORY_HEALTHCARE_AND_LIFE_SCIENCE"
ListingCategoriesEnumCategoryMedia ListingCategoriesEnum = "CATEGORY_MEDIA"
ListingCategoriesEnumCategoryPublicSector ListingCategoriesEnum = "CATEGORY_PUBLIC_SECTOR"
ListingCategoriesEnumCategoryRetail ListingCategoriesEnum = "CATEGORY_RETAIL"
ListingCategoriesEnumCategorySports ListingCategoriesEnum = "CATEGORY_SPORTS"
ListingCategoriesEnumCategoryScienceAndResearch ListingCategoriesEnum = "CATEGORY_SCIENCE_AND_RESEARCH"
ListingCategoriesEnumCategoryTransportationAndLogistics ListingCategoriesEnum = "CATEGORY_TRANSPORTATION_AND_LOGISTICS"
ListingCategoriesEnumCategoryTravelAndTourism ListingCategoriesEnum = "CATEGORY_TRAVEL_AND_TOURISM"
)



type ListingStateEnum string

const (
    ListingStateEnumStateUnspecified ListingStateEnum = "STATE_UNSPECIFIED"
ListingStateEnumActive ListingStateEnum = "ACTIVE"
)


type Listing struct {
    BigqueryDataset *BigQueryDatasetSource `json:"bigqueryDataset,omitempty"`
    Categories []ListingCategoriesEnum `json:"categories,omitempty"`
    DataProvider *DataProvider `json:"dataProvider,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Documentation *string `json:"documentation,omitempty"`
    Icon *string `json:"icon,omitempty"`
    Name *string `json:"name,omitempty"`
    PrimaryContact *string `json:"primaryContact,omitempty"`
    Publisher *Publisher `json:"publisher,omitempty"`
    RequestAccess *string `json:"requestAccess,omitempty"`
    State *ListingStateEnum `json:"state,omitempty"`
    
}

