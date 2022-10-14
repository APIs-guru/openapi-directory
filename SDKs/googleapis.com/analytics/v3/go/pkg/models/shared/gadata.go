package shared

type GaDataColumnHeaders struct {
	ColumnType *string `json:"columnType,omitempty"`
	DataType   *string `json:"dataType,omitempty"`
	Name       *string `json:"name,omitempty"`
}

type GaDataDataTableCols struct {
	ID    *string `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	Type  *string `json:"type,omitempty"`
}

type GaDataDataTableRowsC struct {
	V *string `json:"v,omitempty"`
}

type GaDataDataTableRows struct {
	C []GaDataDataTableRowsC `json:"c,omitempty"`
}

type GaDataDataTable struct {
	Cols []GaDataDataTableCols `json:"cols,omitempty"`
	Rows []GaDataDataTableRows `json:"rows,omitempty"`
}

type GaDataProfileInfo struct {
	AccountID             *string `json:"accountId,omitempty"`
	InternalWebPropertyID *string `json:"internalWebPropertyId,omitempty"`
	ProfileID             *string `json:"profileId,omitempty"`
	ProfileName           *string `json:"profileName,omitempty"`
	TableID               *string `json:"tableId,omitempty"`
	WebPropertyID         *string `json:"webPropertyId,omitempty"`
}

type GaDataQuery struct {
	Dimensions    *string  `json:"dimensions,omitempty"`
	EndDate       *string  `json:"end-date,omitempty"`
	Filters       *string  `json:"filters,omitempty"`
	Ids           *string  `json:"ids,omitempty"`
	MaxResults    *int32   `json:"max-results,omitempty"`
	Metrics       []string `json:"metrics,omitempty"`
	SamplingLevel *string  `json:"samplingLevel,omitempty"`
	Segment       *string  `json:"segment,omitempty"`
	Sort          []string `json:"sort,omitempty"`
	StartDate     *string  `json:"start-date,omitempty"`
	StartIndex    *int32   `json:"start-index,omitempty"`
}

type GaData struct {
	ColumnHeaders       []GaDataColumnHeaders `json:"columnHeaders,omitempty"`
	ContainsSampledData *bool                 `json:"containsSampledData,omitempty"`
	DataLastRefreshed   *string               `json:"dataLastRefreshed,omitempty"`
	DataTable           *GaDataDataTable      `json:"dataTable,omitempty"`
	ID                  *string               `json:"id,omitempty"`
	ItemsPerPage        *int32                `json:"itemsPerPage,omitempty"`
	Kind                *string               `json:"kind,omitempty"`
	NextLink            *string               `json:"nextLink,omitempty"`
	PreviousLink        *string               `json:"previousLink,omitempty"`
	ProfileInfo         *GaDataProfileInfo    `json:"profileInfo,omitempty"`
	Query               *GaDataQuery          `json:"query,omitempty"`
	Rows                [][]string            `json:"rows,omitempty"`
	SampleSize          *string               `json:"sampleSize,omitempty"`
	SampleSpace         *string               `json:"sampleSpace,omitempty"`
	SelfLink            *string               `json:"selfLink,omitempty"`
	TotalResults        *int32                `json:"totalResults,omitempty"`
	TotalsForAllResults map[string]string     `json:"totalsForAllResults,omitempty"`
}
