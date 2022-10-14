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
	AbsoluteDateRange     *AbsoluteDateRange                  `json:"absoluteDateRange,omitempty"`
	BreakdownDimensions   []FilterSetBreakdownDimensionsEnum  `json:"breakdownDimensions,omitempty"`
	CreativeID            *string                             `json:"creativeId,omitempty"`
	DealID                *string                             `json:"dealId,omitempty"`
	Environment           *FilterSetEnvironmentEnum           `json:"environment,omitempty"`
	Format                *FilterSetFormatEnum                `json:"format,omitempty"`
	Formats               []FilterSetFormatsEnum              `json:"formats,omitempty"`
	Name                  *string                             `json:"name,omitempty"`
	Platforms             []FilterSetPlatformsEnum            `json:"platforms,omitempty"`
	PublisherIdentifiers  []string                            `json:"publisherIdentifiers,omitempty"`
	RealtimeTimeRange     *RealtimeTimeRange                  `json:"realtimeTimeRange,omitempty"`
	RelativeDateRange     *RelativeDateRange                  `json:"relativeDateRange,omitempty"`
	SellerNetworkIds      []int32                             `json:"sellerNetworkIds,omitempty"`
	TimeSeriesGranularity *FilterSetTimeSeriesGranularityEnum `json:"timeSeriesGranularity,omitempty"`
}
