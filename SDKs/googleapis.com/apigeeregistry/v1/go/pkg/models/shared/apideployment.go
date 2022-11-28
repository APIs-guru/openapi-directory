package shared

// APIDeployment
// Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
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

// APIDeploymentInput
// Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
type APIDeploymentInput struct {
	AccessGuidance     *string           `json:"accessGuidance,omitempty"`
	Annotations        map[string]string `json:"annotations,omitempty"`
	APISpecRevision    *string           `json:"apiSpecRevision,omitempty"`
	Description        *string           `json:"description,omitempty"`
	DisplayName        *string           `json:"displayName,omitempty"`
	EndpointURI        *string           `json:"endpointUri,omitempty"`
	ExternalChannelURI *string           `json:"externalChannelUri,omitempty"`
	IntendedAudience   *string           `json:"intendedAudience,omitempty"`
	Labels             map[string]string `json:"labels,omitempty"`
	Name               *string           `json:"name,omitempty"`
}
