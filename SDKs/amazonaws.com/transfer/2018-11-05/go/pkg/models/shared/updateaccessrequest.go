package shared



type UpdateAccessRequest struct {
    ExternalID string `json:"ExternalId"`
    HomeDirectory *string `json:"HomeDirectory,omitempty"`
    HomeDirectoryMappings []HomeDirectoryMapEntry `json:"HomeDirectoryMappings,omitempty"`
    HomeDirectoryType *HomeDirectoryTypeEnum `json:"HomeDirectoryType,omitempty"`
    Policy *string `json:"Policy,omitempty"`
    PosixProfile *PosixProfile `json:"PosixProfile,omitempty"`
    Role *string `json:"Role,omitempty"`
    ServerID string `json:"ServerId"`
    
}

