package shared

type RealtimeDataColumnHeaders struct {
	ColumnType *string `json:"columnType,omitempty"`
	DataType   *string `json:"dataType,omitempty"`
	Name       *string `json:"name,omitempty"`
}

type RealtimeDataProfileInfo struct {
	AccountID             *string `json:"accountId,omitempty"`
	InternalWebPropertyID *string `json:"internalWebPropertyId,omitempty"`
	ProfileID             *string `json:"profileId,omitempty"`
	ProfileName           *string `json:"profileName,omitempty"`
	TableID               *string `json:"tableId,omitempty"`
	WebPropertyID         *string `json:"webPropertyId,omitempty"`
}

type RealtimeDataQuery struct {
	Dimensions *string  `json:"dimensions,omitempty"`
	Filters    *string  `json:"filters,omitempty"`
	Ids        *string  `json:"ids,omitempty"`
	MaxResults *int32   `json:"max-results,omitempty"`
	Metrics    []string `json:"metrics,omitempty"`
	Sort       []string `json:"sort,omitempty"`
}

type RealtimeData struct {
	ColumnHeaders       []RealtimeDataColumnHeaders `json:"columnHeaders,omitempty"`
	ID                  *string                     `json:"id,omitempty"`
	Kind                *string                     `json:"kind,omitempty"`
	ProfileInfo         *RealtimeDataProfileInfo    `json:"profileInfo,omitempty"`
	Query               *RealtimeDataQuery          `json:"query,omitempty"`
	Rows                [][]string                  `json:"rows,omitempty"`
	SelfLink            *string                     `json:"selfLink,omitempty"`
	TotalResults        *int32                      `json:"totalResults,omitempty"`
	TotalsForAllResults map[string]string           `json:"totalsForAllResults,omitempty"`
}
