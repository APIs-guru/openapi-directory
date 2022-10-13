package shared

type GoogleCloudApigeeV1SharedFlowRevision struct {
	ConfigurationVersion       *GoogleCloudApigeeV1ConfigVersion `json:"configurationVersion"`
	ContextInfo                *string                           `json:"contextInfo"`
	CreatedAt                  *string                           `json:"createdAt"`
	Description                *string                           `json:"description"`
	DisplayName                *string                           `json:"displayName"`
	EntityMetaDataAsProperties map[string]string                 `json:"entityMetaDataAsProperties"`
	LastModifiedAt             *string                           `json:"lastModifiedAt"`
	Name                       *string                           `json:"name"`
	Policies                   []string                          `json:"policies"`
	ResourceFiles              *GoogleCloudApigeeV1ResourceFiles `json:"resourceFiles"`
	Resources                  []string                          `json:"resources"`
	Revision                   *string                           `json:"revision"`
	SharedFlows                []string                          `json:"sharedFlows"`
	Type                       *string                           `json:"type"`
}
