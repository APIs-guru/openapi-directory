package shared

type FilterSetBreakdownDimensionsEnum string

const (
	FilterSetBreakdownDimensionsEnumBreakdownDimensionUnspecified FilterSetBreakdownDimensionsEnum = "BREAKDOWN_DIMENSION_UNSPECIFIED"
	FilterSetBreakdownDimensionsEnumPublisherIdentifier           FilterSetBreakdownDimensionsEnum = "PUBLISHER_IDENTIFIER"
)

type FilterSetEnvironmentEnum string

const (
	FilterSetEnvironmentEnumEnvironmentUnspecified FilterSetEnvironmentEnum = "ENVIRONMENT_UNSPECIFIED"
	FilterSetEnvironmentEnumWeb                    FilterSetEnvironmentEnum = "WEB"
	FilterSetEnvironmentEnumApp                    FilterSetEnvironmentEnum = "APP"
)

type FilterSetFormatEnum string

const (
	FilterSetFormatEnumFormatUnspecified FilterSetFormatEnum = "FORMAT_UNSPECIFIED"
	FilterSetFormatEnumNativeDisplay     FilterSetFormatEnum = "NATIVE_DISPLAY"
	FilterSetFormatEnumNativeVideo       FilterSetFormatEnum = "NATIVE_VIDEO"
	FilterSetFormatEnumNonNativeDisplay  FilterSetFormatEnum = "NON_NATIVE_DISPLAY"
	FilterSetFormatEnumNonNativeVideo    FilterSetFormatEnum = "NON_NATIVE_VIDEO"
)

type FilterSetFormatsEnum string

const (
	FilterSetFormatsEnumFormatUnspecified FilterSetFormatsEnum = "FORMAT_UNSPECIFIED"
	FilterSetFormatsEnumNativeDisplay     FilterSetFormatsEnum = "NATIVE_DISPLAY"
	FilterSetFormatsEnumNativeVideo       FilterSetFormatsEnum = "NATIVE_VIDEO"
	FilterSetFormatsEnumNonNativeDisplay  FilterSetFormatsEnum = "NON_NATIVE_DISPLAY"
	FilterSetFormatsEnumNonNativeVideo    FilterSetFormatsEnum = "NON_NATIVE_VIDEO"
)

type FilterSetPlatformsEnum string

const (
	FilterSetPlatformsEnumPlatformUnspecified FilterSetPlatformsEnum = "PLATFORM_UNSPECIFIED"
	FilterSetPlatformsEnumDesktop             FilterSetPlatformsEnum = "DESKTOP"
	FilterSetPlatformsEnumTablet              FilterSetPlatformsEnum = "TABLET"
	FilterSetPlatformsEnumMobile              FilterSetPlatformsEnum = "MOBILE"
)

type FilterSetTimeSeriesGranularityEnum string

const (
	FilterSetTimeSeriesGranularityEnumTimeSeriesGranularityUnspecified FilterSetTimeSeriesGranularityEnum = "TIME_SERIES_GRANULARITY_UNSPECIFIED"
	FilterSetTimeSeriesGranularityEnumHourly                           FilterSetTimeSeriesGranularityEnum = "HOURLY"
	FilterSetTimeSeriesGranularityEnumDaily                            FilterSetTimeSeriesGranularityEnum = "DAILY"
)

type FilterSet struct {
	AbsoluteDateRange     *AbsoluteDateRange                  `json:"absoluteDateRange"`
	BreakdownDimensions   []FilterSetBreakdownDimensionsEnum  `json:"breakdownDimensions"`
	CreativeID            *string                             `json:"creativeId"`
	DealID                *string                             `json:"dealId"`
	Environment           *FilterSetEnvironmentEnum           `json:"environment"`
	Format                *FilterSetFormatEnum                `json:"format"`
	Formats               []FilterSetFormatsEnum              `json:"formats"`
	Name                  *string                             `json:"name"`
	Platforms             []FilterSetPlatformsEnum            `json:"platforms"`
	PublisherIdentifiers  []string                            `json:"publisherIdentifiers"`
	RealtimeTimeRange     *RealtimeTimeRange                  `json:"realtimeTimeRange"`
	RelativeDateRange     *RelativeDateRange                  `json:"relativeDateRange"`
	SellerNetworkIds      []int32                             `json:"sellerNetworkIds"`
	TimeSeriesGranularity *FilterSetTimeSeriesGranularityEnum `json:"timeSeriesGranularity"`
}
