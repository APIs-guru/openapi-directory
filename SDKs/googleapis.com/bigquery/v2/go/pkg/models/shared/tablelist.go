package shared



type TableListTablesView struct {
    UseLegacySQL *bool `json:"useLegacySql,omitempty"`
    
}

type TableListTables struct {
    Clustering *Clustering `json:"clustering,omitempty"`
    CreationTime *string `json:"creationTime,omitempty"`
    ExpirationTime *string `json:"expirationTime,omitempty"`
    FriendlyName *string `json:"friendlyName,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    RangePartitioning *RangePartitioning `json:"rangePartitioning,omitempty"`
    TableReference *TableReference `json:"tableReference,omitempty"`
    TimePartitioning *TimePartitioning `json:"timePartitioning,omitempty"`
    Type *string `json:"type,omitempty"`
    View *TableListTablesView `json:"view,omitempty"`
    
}

type TableList struct {
    Etag *string `json:"etag,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Tables []TableListTables `json:"tables,omitempty"`
    TotalItems *int32 `json:"totalItems,omitempty"`
    
}

