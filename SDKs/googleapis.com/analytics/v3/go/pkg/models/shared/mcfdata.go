package shared

type McfDataColumnHeaders struct {
	ColumnType *string `json:"columnType"`
	DataType   *string `json:"dataType"`
	Name       *string `json:"name"`
}

type McfDataProfileInfo struct {
	AccountID             *string `json:"accountId"`
	InternalWebPropertyID *string `json:"internalWebPropertyId"`
	ProfileID             *string `json:"profileId"`
	ProfileName           *string `json:"profileName"`
	TableID               *string `json:"tableId"`
	WebPropertyID         *string `json:"webPropertyId"`
}

type McfDataQuery struct {
	Dimensions    *string  `json:"dimensions"`
	EndDate       *string  `json:"end-date"`
	Filters       *string  `json:"filters"`
	Ids           *string  `json:"ids"`
	MaxResults    *int32   `json:"max-results"`
	Metrics       []string `json:"metrics"`
	SamplingLevel *string  `json:"samplingLevel"`
	Segment       *string  `json:"segment"`
	Sort          []string `json:"sort"`
	StartDate     *string  `json:"start-date"`
	StartIndex    *int32   `json:"start-index"`
}

type McfDataRowsConversionPathValue struct {
	InteractionType *string `json:"interactionType"`
	NodeValue       *string `json:"nodeValue"`
}

type McfDataRows struct {
	ConversionPathValue []McfDataRowsConversionPathValue `json:"conversionPathValue"`
	PrimitiveValue      *string                          `json:"primitiveValue"`
}

type McfData struct {
	ColumnHeaders       []McfDataColumnHeaders `json:"columnHeaders"`
	ContainsSampledData *bool                  `json:"containsSampledData"`
	ID                  *string                `json:"id"`
	ItemsPerPage        *int32                 `json:"itemsPerPage"`
	Kind                *string                `json:"kind"`
	NextLink            *string                `json:"nextLink"`
	PreviousLink        *string                `json:"previousLink"`
	ProfileInfo         *McfDataProfileInfo    `json:"profileInfo"`
	Query               *McfDataQuery          `json:"query"`
	Rows                [][]McfDataRows        `json:"rows"`
	SampleSize          *string                `json:"sampleSize"`
	SampleSpace         *string                `json:"sampleSpace"`
	SelfLink            *string                `json:"selfLink"`
	TotalResults        *int32                 `json:"totalResults"`
	TotalsForAllResults map[string]string      `json:"totalsForAllResults"`
}
