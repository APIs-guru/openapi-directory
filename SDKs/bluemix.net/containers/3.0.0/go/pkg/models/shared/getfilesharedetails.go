package shared



type GetFileshareDetails struct {
    Fs []Fileshare `json:"fs,omitempty"`
    FsUsage []FileshareUsage `json:"fsUsage,omitempty"`
    Volnames []string `json:"volnames,omitempty"`
    
}

