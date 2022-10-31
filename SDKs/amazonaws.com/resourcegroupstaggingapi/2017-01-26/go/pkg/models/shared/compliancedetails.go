package shared



type ComplianceDetails struct {
    ComplianceStatus *bool `json:"ComplianceStatus,omitempty"`
    KeysWithNoncompliantValues []string `json:"KeysWithNoncompliantValues,omitempty"`
    NoncompliantKeys []string `json:"NoncompliantKeys,omitempty"`
    
}

