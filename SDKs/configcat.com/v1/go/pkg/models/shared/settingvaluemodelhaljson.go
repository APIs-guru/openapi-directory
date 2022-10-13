package shared

import (
	"time"
)

type SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks struct {
	Members  *string `json:"members"`
	Products *string `json:"products"`
}

type SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization struct {
	Links          *SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks `json:"_links"`
	Name           *string                                                                         `json:"name"`
	OrganizationID *string                                                                         `json:"organizationId"`
}

type SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded struct {
	Organization *SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization `json:"organization"`
}

type SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks struct {
	Configs          *string `json:"configs"`
	Environments     *string `json:"environments"`
	Members          *string `json:"members"`
	PermissionGroups *string `json:"permission-groups"`
	Self             *string `json:"self"`
	Tags             *string `json:"tags"`
}

type SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct struct {
	Embedded  *SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded `json:"_embedded"`
	Links     *SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks    `json:"_links"`
	Name      *string                                                        `json:"name"`
	ProductID *string                                                        `json:"productId"`
}

type SettingValueModelHaljsonEmbeddedConfigEmbedded struct {
	Product *SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct `json:"product"`
}

type SettingValueModelHaljsonEmbeddedConfigLinks struct {
	Self     *string `json:"self"`
	Settings *string `json:"settings"`
}

type SettingValueModelHaljsonEmbeddedConfig struct {
	Embedded *SettingValueModelHaljsonEmbeddedConfigEmbedded `json:"_embedded"`
	Links    *SettingValueModelHaljsonEmbeddedConfigLinks    `json:"_links"`
	ConfigID *string                                         `json:"configId"`
	Name     *string                                         `json:"name"`
}

type SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks struct {
	Members  *string `json:"members"`
	Products *string `json:"products"`
}

type SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization struct {
	Links          *SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks `json:"_links"`
	Name           *string                                                                              `json:"name"`
	OrganizationID *string                                                                              `json:"organizationId"`
}

type SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded struct {
	Organization *SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization `json:"organization"`
}

type SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks struct {
	Configs          *string `json:"configs"`
	Environments     *string `json:"environments"`
	Members          *string `json:"members"`
	PermissionGroups *string `json:"permission-groups"`
	Self             *string `json:"self"`
	Tags             *string `json:"tags"`
}

type SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct struct {
	Embedded  *SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded `json:"_embedded"`
	Links     *SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks    `json:"_links"`
	Name      *string                                                             `json:"name"`
	ProductID *string                                                             `json:"productId"`
}

type SettingValueModelHaljsonEmbeddedEnvironmentEmbedded struct {
	Product *SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct `json:"product"`
}

type SettingValueModelHaljsonEmbeddedEnvironmentLinks struct {
	Self *string `json:"self"`
}

type SettingValueModelHaljsonEmbeddedEnvironment struct {
	Embedded      *SettingValueModelHaljsonEmbeddedEnvironmentEmbedded `json:"_embedded"`
	Links         *SettingValueModelHaljsonEmbeddedEnvironmentLinks    `json:"_links"`
	EnvironmentID *string                                              `json:"environmentId"`
	Name          *string                                              `json:"name"`
}

type SettingValueModelHaljsonEmbeddedIntegrationLinks struct {
	Description         *string                  `json:"description"`
	IntegrationLinkType *IntegrationLinkTypeEnum `json:"integrationLinkType"`
	Key                 *string                  `json:"key"`
	URL                 *string                  `json:"url"`
}

type SettingValueModelHaljsonEmbeddedSetting struct {
	CreatedAt           *time.Time       `json:"createdAt"`
	CreatorEmail        *string          `json:"creatorEmail"`
	CreatorFullName     *string          `json:"creatorFullName"`
	ExpirationWarningAt *time.Time       `json:"expirationWarningAt"`
	Hint                *string          `json:"hint"`
	IsWatching          *bool            `json:"isWatching"`
	Key                 *string          `json:"key"`
	Name                *string          `json:"name"`
	OwnerEmail          *string          `json:"ownerEmail"`
	OwnerFullName       *string          `json:"ownerFullName"`
	SettingID           *int32           `json:"settingId"`
	SettingType         *SettingTypeEnum `json:"settingType"`
}

type SettingValueModelHaljsonEmbeddedSettingTags struct {
	Color        *string `json:"color"`
	Name         *string `json:"name"`
	SettingTagID *int64  `json:"settingTagId"`
	TagID        *int64  `json:"tagId"`
}

type SettingValueModelHaljsonEmbedded struct {
	Config           *SettingValueModelHaljsonEmbeddedConfig            `json:"config"`
	Environment      *SettingValueModelHaljsonEmbeddedEnvironment       `json:"environment"`
	IntegrationLinks []SettingValueModelHaljsonEmbeddedIntegrationLinks `json:"integrationLinks"`
	Setting          *SettingValueModelHaljsonEmbeddedSetting           `json:"setting"`
	SettingTags      []SettingValueModelHaljsonEmbeddedSettingTags      `json:"settingTags"`
}

type SettingValueModelHaljsonLinks struct {
	Self *string `json:"self"`
}

type SettingValueModelHaljson struct {
	Embedded                *SettingValueModelHaljsonEmbedded `json:"_embedded"`
	Links                   *SettingValueModelHaljsonLinks    `json:"_links"`
	LastUpdaterUserEmail    *string                           `json:"lastUpdaterUserEmail"`
	LastUpdaterUserFullName *string                           `json:"lastUpdaterUserFullName"`
	ReadOnly                *bool                             `json:"readOnly"`
	RolloutPercentageItems  []RolloutPercentageItemModel      `json:"rolloutPercentageItems"`
	RolloutRules            []RolloutRuleModel                `json:"rolloutRules"`
	UpdatedAt               *time.Time                        `json:"updatedAt"`
	Value                   map[string]interface{}            `json:"value"`
}
