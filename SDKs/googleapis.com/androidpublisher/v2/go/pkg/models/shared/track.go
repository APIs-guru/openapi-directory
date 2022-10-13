package shared

type Track struct {
	Track        *string  `json:"track"`
	UserFraction *float64 `json:"userFraction"`
	VersionCodes []int32  `json:"versionCodes"`
}
