package shared

type APIDeployment struct {
	AccessGuidance     *string           `json:"accessGuidance,omitempty"`
	Annotations        map[string]string `json:"annotations,omitempty"`
	APISpecRevision    *string           `json:"apiSpecRevision,omitempty"`
	CreateTime         *string           `json:"createTime,omitempty"`
	Description        *string           `json:"description,omitempty"`
	DisplayName        *string           `json:"displayName,omitempty"`
	EndpointURI        *string           `json:"endpointUri,omitempty"`
	ExternalChannelURI *string           `json:"externalChannelUri,omitempty"`
	IntendedAudience   *string           `json:"intendedAudience,omitempty"`
	Labels             map[string]string `json:"labels,omitempty"`
	Name               *string           `json:"name,omitempty"`
	RevisionCreateTime *string           `json:"revisionCreateTime,omitempty"`
	RevisionID         *string           `json:"revisionId,omitempty"`
	RevisionUpdateTime *string           `json:"revisionUpdateTime,omitempty"`
}
