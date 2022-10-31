package shared



type GetDisksResult struct {
    Disks []Disk `json:"disks,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

