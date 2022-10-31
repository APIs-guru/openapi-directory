package shared



type GoogleCloudApigeeV1SharedFlowRevision struct {
    ConfigurationVersion *GoogleCloudApigeeV1ConfigVersion `json:"configurationVersion,omitempty"`
    ContextInfo *string `json:"contextInfo,omitempty"`
    CreatedAt *string `json:"createdAt,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EntityMetaDataAsProperties map[string]string `json:"entityMetaDataAsProperties,omitempty"`
    LastModifiedAt *string `json:"lastModifiedAt,omitempty"`
    Name *string `json:"name,omitempty"`
    Policies []string `json:"policies,omitempty"`
    ResourceFiles *GoogleCloudApigeeV1ResourceFiles `json:"resourceFiles,omitempty"`
    Resources []string `json:"resources,omitempty"`
    Revision *string `json:"revision,omitempty"`
    SharedFlows []string `json:"sharedFlows,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

