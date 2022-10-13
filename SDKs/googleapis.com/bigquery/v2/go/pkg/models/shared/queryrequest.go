package shared

type QueryRequest struct {
	ConnectionProperties []ConnectionProperty `json:"connectionProperties"`
	CreateSession        *bool                `json:"createSession"`
	DefaultDataset       *DatasetReference    `json:"defaultDataset"`
	DryRun               *bool                `json:"dryRun"`
	Kind                 *string              `json:"kind"`
	Labels               map[string]string    `json:"labels"`
	Location             *string              `json:"location"`
	MaxResults           *int64               `json:"maxResults"`
	MaximumBytesBilled   *string              `json:"maximumBytesBilled"`
	ParameterMode        *string              `json:"parameterMode"`
	PreserveNulls        *bool                `json:"preserveNulls"`
	Query                *string              `json:"query"`
	QueryParameters      []QueryParameter     `json:"queryParameters"`
	RequestID            *string              `json:"requestId"`
	TimeoutMs            *int64               `json:"timeoutMs"`
	UseLegacySQL         *bool                `json:"useLegacySql"`
	UseQueryCache        *bool                `json:"useQueryCache"`
}
