package shared

type RealtimeDataColumnHeaders struct {
	ColumnType *string `json:"columnType"`
	DataType   *string `json:"dataType"`
	Name       *string `json:"name"`
}

type RealtimeDataProfileInfo struct {
	AccountID             *string `json:"accountId"`
	InternalWebPropertyID *string `json:"internalWebPropertyId"`
	ProfileID             *string `json:"profileId"`
	ProfileName           *string `json:"profileName"`
	TableID               *string `json:"tableId"`
	WebPropertyID         *string `json:"webPropertyId"`
}

type RealtimeDataQuery struct {
	Dimensions *string  `json:"dimensions"`
	Filters    *string  `json:"filters"`
	Ids        *string  `json:"ids"`
	MaxResults *int32   `json:"max-results"`
	Metrics    []string `json:"metrics"`
	Sort       []string `json:"sort"`
}

type RealtimeData struct {
	ColumnHeaders       []RealtimeDataColumnHeaders `json:"columnHeaders"`
	ID                  *string                     `json:"id"`
	Kind                *string                     `json:"kind"`
	ProfileInfo         *RealtimeDataProfileInfo    `json:"profileInfo"`
	Query               *RealtimeDataQuery          `json:"query"`
	Rows                [][]string                  `json:"rows"`
	SelfLink            *string                     `json:"selfLink"`
	TotalResults        *int32                      `json:"totalResults"`
	TotalsForAllResults map[string]string           `json:"totalsForAllResults"`
}
