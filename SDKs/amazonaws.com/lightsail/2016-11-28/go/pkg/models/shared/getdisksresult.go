package shared

type GetDisksResult struct {
	Disks         []Disk  `json:"disks"`
	NextPageToken *string `json:"nextPageToken"`
}
