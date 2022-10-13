package shared

type Blueprint struct {
	BlueprintID *string               `json:"blueprintId"`
	Description *string               `json:"description"`
	Group       *string               `json:"group"`
	IsActive    *bool                 `json:"isActive"`
	LicenseURL  *string               `json:"licenseUrl"`
	MinPower    *int64                `json:"minPower"`
	Name        *string               `json:"name"`
	Platform    *InstancePlatformEnum `json:"platform"`
	ProductURL  *string               `json:"productUrl"`
	Type        *BlueprintTypeEnum    `json:"type"`
	Version     *string               `json:"version"`
	VersionCode *string               `json:"versionCode"`
}
