package shared

type Blueprint struct {
	BlueprintID *string               `json:"blueprintId,omitempty"`
	Description *string               `json:"description,omitempty"`
	Group       *string               `json:"group,omitempty"`
	IsActive    *bool                 `json:"isActive,omitempty"`
	LicenseURL  *string               `json:"licenseUrl,omitempty"`
	MinPower    *int64                `json:"minPower,omitempty"`
	Name        *string               `json:"name,omitempty"`
	Platform    *InstancePlatformEnum `json:"platform,omitempty"`
	ProductURL  *string               `json:"productUrl,omitempty"`
	Type        *BlueprintTypeEnum    `json:"type,omitempty"`
	Version     *string               `json:"version,omitempty"`
	VersionCode *string               `json:"versionCode,omitempty"`
}
