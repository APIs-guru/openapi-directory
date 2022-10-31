package shared

type GoogleCloudApigeeV1APIProxyRevision struct {
	Archive                    *string                           `json:"archive,omitempty"`
	Basepaths                  []string                          `json:"basepaths,omitempty"`
	ConfigurationVersion       *GoogleCloudApigeeV1ConfigVersion `json:"configurationVersion,omitempty"`
	ContextInfo                *string                           `json:"contextInfo,omitempty"`
	CreatedAt                  *string                           `json:"createdAt,omitempty"`
	Description                *string                           `json:"description,omitempty"`
	DisplayName                *string                           `json:"displayName,omitempty"`
	EntityMetaDataAsProperties map[string]string                 `json:"entityMetaDataAsProperties,omitempty"`
	IntegrationEndpoints       []string                          `json:"integrationEndpoints,omitempty"`
	LastModifiedAt             *string                           `json:"lastModifiedAt,omitempty"`
	Name                       *string                           `json:"name,omitempty"`
	Policies                   []string                          `json:"policies,omitempty"`
	Proxies                    []string                          `json:"proxies,omitempty"`
	ProxyEndpoints             []string                          `json:"proxyEndpoints,omitempty"`
	ResourceFiles              *GoogleCloudApigeeV1ResourceFiles `json:"resourceFiles,omitempty"`
	Resources                  []string                          `json:"resources,omitempty"`
	Revision                   *string                           `json:"revision,omitempty"`
	SharedFlows                []string                          `json:"sharedFlows,omitempty"`
	Spec                       *string                           `json:"spec,omitempty"`
	TargetEndpoints            []string                          `json:"targetEndpoints,omitempty"`
	TargetServers              []string                          `json:"targetServers,omitempty"`
	Targets                    []string                          `json:"targets,omitempty"`
	Teams                      []string                          `json:"teams,omitempty"`
	Type                       *string                           `json:"type,omitempty"`
}
