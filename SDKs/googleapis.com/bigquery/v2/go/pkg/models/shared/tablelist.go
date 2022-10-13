package shared

type TableListTablesView struct {
	UseLegacySQL *bool `json:"useLegacySql"`
}

type TableListTables struct {
	Clustering        *Clustering          `json:"clustering"`
	CreationTime      *string              `json:"creationTime"`
	ExpirationTime    *string              `json:"expirationTime"`
	FriendlyName      *string              `json:"friendlyName"`
	ID                *string              `json:"id"`
	Kind              *string              `json:"kind"`
	Labels            map[string]string    `json:"labels"`
	RangePartitioning *RangePartitioning   `json:"rangePartitioning"`
	TableReference    *TableReference      `json:"tableReference"`
	TimePartitioning  *TimePartitioning    `json:"timePartitioning"`
	Type              *string              `json:"type"`
	View              *TableListTablesView `json:"view"`
}

type TableList struct {
	Etag          *string           `json:"etag"`
	Kind          *string           `json:"kind"`
	NextPageToken *string           `json:"nextPageToken"`
	Tables        []TableListTables `json:"tables"`
	TotalItems    *int32            `json:"totalItems"`
}
