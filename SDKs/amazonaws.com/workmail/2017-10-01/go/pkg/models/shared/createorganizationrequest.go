package shared



type CreateOrganizationRequest struct {
    Alias string `json:"Alias"`
    ClientToken *string `json:"ClientToken,omitempty"`
    DirectoryID *string `json:"DirectoryId,omitempty"`
    Domains []Domain `json:"Domains,omitempty"`
    EnableInteroperability *bool `json:"EnableInteroperability,omitempty"`
    KmsKeyArn *string `json:"KmsKeyArn,omitempty"`
    
}

