package shared

type GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum string

const (
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumIndustryCategoryUnspecified  GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "INDUSTRY_CATEGORY_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumAutomotive                   GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "AUTOMOTIVE"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumBusinessAndIndustrialMarkets GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "BUSINESS_AND_INDUSTRIAL_MARKETS"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumFinance                      GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "FINANCE"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumHealthcare                   GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "HEALTHCARE"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumTechnology                   GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "TECHNOLOGY"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumTravel                       GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "TRAVEL"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumOther                        GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "OTHER"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumArtsAndEntertainment         GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "ARTS_AND_ENTERTAINMENT"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumBeautyAndFitness             GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "BEAUTY_AND_FITNESS"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumBooksAndLiterature           GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "BOOKS_AND_LITERATURE"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumFoodAndDrink                 GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "FOOD_AND_DRINK"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumGames                        GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "GAMES"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumHobbiesAndLeisure            GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "HOBBIES_AND_LEISURE"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumHomeAndGarden                GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "HOME_AND_GARDEN"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumInternetAndTelecom           GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "INTERNET_AND_TELECOM"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumLawAndGovernment             GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "LAW_AND_GOVERNMENT"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumNews                         GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "NEWS"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumOnlineCommunities            GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "ONLINE_COMMUNITIES"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumPeopleAndSociety             GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "PEOPLE_AND_SOCIETY"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumPetsAndAnimals               GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "PETS_AND_ANIMALS"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumRealEstate                   GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "REAL_ESTATE"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumReference                    GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "REFERENCE"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumScience                      GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "SCIENCE"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumSports                       GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "SPORTS"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumJobsAndEducation             GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "JOBS_AND_EDUCATION"
	GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnumShopping                     GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum = "SHOPPING"
)

type GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum string

const (
	GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnumPropertyTypeUnspecified GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum = "PROPERTY_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnumPropertyTypeOrdinary    GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum = "PROPERTY_TYPE_ORDINARY"
	GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnumPropertyTypeSubproperty GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum = "PROPERTY_TYPE_SUBPROPERTY"
	GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnumPropertyTypeRollup      GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum = "PROPERTY_TYPE_ROLLUP"
)

type GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum string

const (
	GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnumServiceLevelUnspecified GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum = "SERVICE_LEVEL_UNSPECIFIED"
	GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnumGoogleAnalyticsStandard GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum = "GOOGLE_ANALYTICS_STANDARD"
	GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnumGoogleAnalytics360      GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum = "GOOGLE_ANALYTICS_360"
)

type GoogleAnalyticsAdminV1alphaProperty struct {
	Account          *string                                                  `json:"account"`
	CreateTime       *string                                                  `json:"createTime"`
	CurrencyCode     *string                                                  `json:"currencyCode"`
	DeleteTime       *string                                                  `json:"deleteTime"`
	DisplayName      *string                                                  `json:"displayName"`
	ExpireTime       *string                                                  `json:"expireTime"`
	IndustryCategory *GoogleAnalyticsAdminV1alphaPropertyIndustryCategoryEnum `json:"industryCategory"`
	Name             *string                                                  `json:"name"`
	Parent           *string                                                  `json:"parent"`
	PropertyType     *GoogleAnalyticsAdminV1alphaPropertyPropertyTypeEnum     `json:"propertyType"`
	ServiceLevel     *GoogleAnalyticsAdminV1alphaPropertyServiceLevelEnum     `json:"serviceLevel"`
	TimeZone         *string                                                  `json:"timeZone"`
	UpdateTime       *string                                                  `json:"updateTime"`
}
