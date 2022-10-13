package shared

type GcpUserAccessBinding struct {
	AccessLevels []string `json:"accessLevels"`
	GroupKey     *string  `json:"groupKey"`
	Name         *string  `json:"name"`
}
