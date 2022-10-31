package shared



type MigrationAlert struct {
    Details []string `json:"details,omitempty"`
    Message *string `json:"message,omitempty"`
    ReferenceUrLs []string `json:"referenceURLs,omitempty"`
    Type *MigrationAlertTypeEnum `json:"type,omitempty"`
    
}

