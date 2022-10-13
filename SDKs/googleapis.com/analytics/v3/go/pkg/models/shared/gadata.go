package shared

type GaDataColumnHeaders struct {
	ColumnType *string `json:"columnType"`
	DataType   *string `json:"dataType"`
	Name       *string `json:"name"`
}

type GaDataDataTableCols struct {
	ID    *string `json:"id"`
	Label *string `json:"label"`
	Type  *string `json:"type"`
}

type GaDataDataTableRowsC struct {
	V *string `json:"v"`
}

type GaDataDataTableRows struct {
	C []GaDataDataTableRowsC `json:"c"`
}

type GaDataDataTable struct {
	Cols []GaDataDataTableCols `json:"cols"`
	Rows []GaDataDataTableRows `json:"rows"`
}

type GaDataProfileInfo struct {
	AccountID             *string `json:"accountId"`
	InternalWebPropertyID *string `json:"internalWebPropertyId"`
	ProfileID             *string `json:"profileId"`
	ProfileName           *string `json:"profileName"`
	TableID               *string `json:"tableId"`
	WebPropertyID         *string `json:"webPropertyId"`
}

type GaDataQuery struct {
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

type GaData struct {
	ColumnHeaders       []GaDataColumnHeaders `json:"columnHeaders"`
	ContainsSampledData *bool                 `json:"containsSampledData"`
	DataLastRefreshed   *string               `json:"dataLastRefreshed"`
	DataTable           *GaDataDataTable      `json:"dataTable"`
	ID                  *string               `json:"id"`
	ItemsPerPage        *int32                `json:"itemsPerPage"`
	Kind                *string               `json:"kind"`
	NextLink            *string               `json:"nextLink"`
	PreviousLink        *string               `json:"previousLink"`
	ProfileInfo         *GaDataProfileInfo    `json:"profileInfo"`
	Query               *GaDataQuery          `json:"query"`
	Rows                [][]string            `json:"rows"`
	SampleSize          *string               `json:"sampleSize"`
	SampleSpace         *string               `json:"sampleSpace"`
	SelfLink            *string               `json:"selfLink"`
	TotalResults        *int32                `json:"totalResults"`
	TotalsForAllResults map[string]string     `json:"totalsForAllResults"`
}
