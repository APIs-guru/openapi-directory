package shared

type GoogleCloudApigeeV1APIProxyRevision struct {
	Archive                    *string                           `json:"archive"`
	Basepaths                  []string                          `json:"basepaths"`
	ConfigurationVersion       *GoogleCloudApigeeV1ConfigVersion `json:"configurationVersion"`
	ContextInfo                *string                           `json:"contextInfo"`
	CreatedAt                  *string                           `json:"createdAt"`
	Description                *string                           `json:"description"`
	DisplayName                *string                           `json:"displayName"`
	EntityMetaDataAsProperties map[string]string                 `json:"entityMetaDataAsProperties"`
	IntegrationEndpoints       []string                          `json:"integrationEndpoints"`
	LastModifiedAt             *string                           `json:"lastModifiedAt"`
	Name                       *string                           `json:"name"`
	Policies                   []string                          `json:"policies"`
	Proxies                    []string                          `json:"proxies"`
	ProxyEndpoints             []string                          `json:"proxyEndpoints"`
	ResourceFiles              *GoogleCloudApigeeV1ResourceFiles `json:"resourceFiles"`
	Resources                  []string                          `json:"resources"`
	Revision                   *string                           `json:"revision"`
	SharedFlows                []string                          `json:"sharedFlows"`
	Spec                       *string                           `json:"spec"`
	TargetEndpoints            []string                          `json:"targetEndpoints"`
	TargetServers              []string                          `json:"targetServers"`
	Targets                    []string                          `json:"targets"`
	Teams                      []string                          `json:"teams"`
	Type                       *string                           `json:"type"`
}
