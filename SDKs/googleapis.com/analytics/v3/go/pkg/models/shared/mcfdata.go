package shared



type McfDataColumnHeaders struct {
    ColumnType *string `json:"columnType,omitempty"`
    DataType *string `json:"dataType,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type McfDataProfileInfo struct {
    AccountID *string `json:"accountId,omitempty"`
    InternalWebPropertyID *string `json:"internalWebPropertyId,omitempty"`
    ProfileID *string `json:"profileId,omitempty"`
    ProfileName *string `json:"profileName,omitempty"`
    TableID *string `json:"tableId,omitempty"`
    WebPropertyID *string `json:"webPropertyId,omitempty"`
    
}

type McfDataQuery struct {
    Dimensions *string `json:"dimensions,omitempty"`
    EndDate *string `json:"end-date,omitempty"`
    Filters *string `json:"filters,omitempty"`
    Ids *string `json:"ids,omitempty"`
    MaxResults *int32 `json:"max-results,omitempty"`
    Metrics []string `json:"metrics,omitempty"`
    SamplingLevel *string `json:"samplingLevel,omitempty"`
    Segment *string `json:"segment,omitempty"`
    Sort []string `json:"sort,omitempty"`
    StartDate *string `json:"start-date,omitempty"`
    StartIndex *int32 `json:"start-index,omitempty"`
    
}

type McfDataRowsConversionPathValue struct {
    InteractionType *string `json:"interactionType,omitempty"`
    NodeValue *string `json:"nodeValue,omitempty"`
    
}

type McfDataRows struct {
    ConversionPathValue []McfDataRowsConversionPathValue `json:"conversionPathValue,omitempty"`
    PrimitiveValue *string `json:"primitiveValue,omitempty"`
    
}

type McfData struct {
    ColumnHeaders []McfDataColumnHeaders `json:"columnHeaders,omitempty"`
    ContainsSampledData *bool `json:"containsSampledData,omitempty"`
    ID *string `json:"id,omitempty"`
    ItemsPerPage *int32 `json:"itemsPerPage,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextLink *string `json:"nextLink,omitempty"`
    PreviousLink *string `json:"previousLink,omitempty"`
    ProfileInfo *McfDataProfileInfo `json:"profileInfo,omitempty"`
    Query *McfDataQuery `json:"query,omitempty"`
    Rows [][]McfDataRows `json:"rows,omitempty"`
    SampleSize *string `json:"sampleSize,omitempty"`
    SampleSpace *string `json:"sampleSpace,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    TotalResults *int32 `json:"totalResults,omitempty"`
    TotalsForAllResults map[string]string `json:"totalsForAllResults,omitempty"`
    
}

