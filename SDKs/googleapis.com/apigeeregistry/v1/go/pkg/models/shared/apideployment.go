package shared

type APIDeployment struct {
	AccessGuidance     *string           `json:"accessGuidance"`
	Annotations        map[string]string `json:"annotations"`
	APISpecRevision    *string           `json:"apiSpecRevision"`
	CreateTime         *string           `json:"createTime"`
	Description        *string           `json:"description"`
	DisplayName        *string           `json:"displayName"`
	EndpointURI        *string           `json:"endpointUri"`
	ExternalChannelURI *string           `json:"externalChannelUri"`
	IntendedAudience   *string           `json:"intendedAudience"`
	Labels             map[string]string `json:"labels"`
	Name               *string           `json:"name"`
	RevisionCreateTime *string           `json:"revisionCreateTime"`
	RevisionID         *string           `json:"revisionId"`
	RevisionUpdateTime *string           `json:"revisionUpdateTime"`
}
