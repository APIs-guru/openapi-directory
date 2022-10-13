package shared

type GetFileshareDetails struct {
	Fs       []Fileshare      `json:"fs"`
	FsUsage  []FileshareUsage `json:"fsUsage"`
	Volnames []string         `json:"volnames"`
}
