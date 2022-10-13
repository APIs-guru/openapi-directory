package shared

type ListingCategoriesEnum string

const (
	ListingCategoriesEnumCategoryUnspecified                ListingCategoriesEnum = "CATEGORY_UNSPECIFIED"
	ListingCategoriesEnumCategoryOthers                     ListingCategoriesEnum = "CATEGORY_OTHERS"
	ListingCategoriesEnumCategoryAdvertisingAndMarketing    ListingCategoriesEnum = "CATEGORY_ADVERTISING_AND_MARKETING"
	ListingCategoriesEnumCategoryCommerce                   ListingCategoriesEnum = "CATEGORY_COMMERCE"
	ListingCategoriesEnumCategoryClimateAndEnvironment      ListingCategoriesEnum = "CATEGORY_CLIMATE_AND_ENVIRONMENT"
	ListingCategoriesEnumCategoryDemographics               ListingCategoriesEnum = "CATEGORY_DEMOGRAPHICS"
	ListingCategoriesEnumCategoryEconomics                  ListingCategoriesEnum = "CATEGORY_ECONOMICS"
	ListingCategoriesEnumCategoryEducation                  ListingCategoriesEnum = "CATEGORY_EDUCATION"
	ListingCategoriesEnumCategoryEnergy                     ListingCategoriesEnum = "CATEGORY_ENERGY"
	ListingCategoriesEnumCategoryFinancial                  ListingCategoriesEnum = "CATEGORY_FINANCIAL"
	ListingCategoriesEnumCategoryGaming                     ListingCategoriesEnum = "CATEGORY_GAMING"
	ListingCategoriesEnumCategoryGeospatial                 ListingCategoriesEnum = "CATEGORY_GEOSPATIAL"
	ListingCategoriesEnumCategoryHealthcareAndLifeScience   ListingCategoriesEnum = "CATEGORY_HEALTHCARE_AND_LIFE_SCIENCE"
	ListingCategoriesEnumCategoryMedia                      ListingCategoriesEnum = "CATEGORY_MEDIA"
	ListingCategoriesEnumCategoryPublicSector               ListingCategoriesEnum = "CATEGORY_PUBLIC_SECTOR"
	ListingCategoriesEnumCategoryRetail                     ListingCategoriesEnum = "CATEGORY_RETAIL"
	ListingCategoriesEnumCategorySports                     ListingCategoriesEnum = "CATEGORY_SPORTS"
	ListingCategoriesEnumCategoryScienceAndResearch         ListingCategoriesEnum = "CATEGORY_SCIENCE_AND_RESEARCH"
	ListingCategoriesEnumCategoryTransportationAndLogistics ListingCategoriesEnum = "CATEGORY_TRANSPORTATION_AND_LOGISTICS"
	ListingCategoriesEnumCategoryTravelAndTourism           ListingCategoriesEnum = "CATEGORY_TRAVEL_AND_TOURISM"
)

type ListingStateEnum string

const (
	ListingStateEnumStateUnspecified ListingStateEnum = "STATE_UNSPECIFIED"
	ListingStateEnumActive           ListingStateEnum = "ACTIVE"
)

type Listing struct {
	BigqueryDataset *BigQueryDatasetSource  `json:"bigqueryDataset"`
	Categories      []ListingCategoriesEnum `json:"categories"`
	DataProvider    *DataProvider           `json:"dataProvider"`
	Description     *string                 `json:"description"`
	DisplayName     *string                 `json:"displayName"`
	Documentation   *string                 `json:"documentation"`
	Icon            *string                 `json:"icon"`
	Name            *string                 `json:"name"`
	PrimaryContact  *string                 `json:"primaryContact"`
	Publisher       *Publisher              `json:"publisher"`
	RequestAccess   *string                 `json:"requestAccess"`
	State           *ListingStateEnum       `json:"state"`
}
