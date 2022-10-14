package shared

import (
	"time"
)

type SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks struct {
	Members  *string `json:"members,omitempty"`
	Products *string `json:"products,omitempty"`
}

type SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization struct {
	Links          *SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks `json:"_links,omitempty"`
	Name           *string                                                                         `json:"name,omitempty"`
	OrganizationID *string                                                                         `json:"organizationId,omitempty"`
}

type SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded struct {
	Organization *SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization `json:"organization,omitempty"`
}

type SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks struct {
	Configs          *string `json:"configs,omitempty"`
	Environments     *string `json:"environments,omitempty"`
	Members          *string `json:"members,omitempty"`
	PermissionGroups *string `json:"permission-groups,omitempty"`
	Self             *string `json:"self,omitempty"`
	Tags             *string `json:"tags,omitempty"`
}

type SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct struct {
	Embedded  *SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded `json:"_embedded,omitempty"`
	Links     *SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks    `json:"_links,omitempty"`
	Name      *string                                                        `json:"name,omitempty"`
	ProductID *string                                                        `json:"productId,omitempty"`
}

type SettingValueModelHaljsonEmbeddedConfigEmbedded struct {
	Product *SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct `json:"product,omitempty"`
}

type SettingValueModelHaljsonEmbeddedConfigLinks struct {
	Self     *string `json:"self,omitempty"`
	Settings *string `json:"settings,omitempty"`
}

type SettingValueModelHaljsonEmbeddedConfig struct {
	Embedded *SettingValueModelHaljsonEmbeddedConfigEmbedded `json:"_embedded,omitempty"`
	Links    *SettingValueModelHaljsonEmbeddedConfigLinks    `json:"_links,omitempty"`
	ConfigID *string                                         `json:"configId,omitempty"`
	Name     *string                                         `json:"name,omitempty"`
}

type SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks struct {
	Members  *string `json:"members,omitempty"`
	Products *string `json:"products,omitempty"`
}

type SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization struct {
	Links          *SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks `json:"_links,omitempty"`
	Name           *string                                                                              `json:"name,omitempty"`
	OrganizationID *string                                                                              `json:"organizationId,omitempty"`
}

type SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded struct {
	Organization *SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization `json:"organization,omitempty"`
}

type SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks struct {
	Configs          *string `json:"configs,omitempty"`
	Environments     *string `json:"environments,omitempty"`
	Members          *string `json:"members,omitempty"`
	PermissionGroups *string `json:"permission-groups,omitempty"`
	Self             *string `json:"self,omitempty"`
	Tags             *string `json:"tags,omitempty"`
}

type SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct struct {
	Embedded  *SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded `json:"_embedded,omitempty"`
	Links     *SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks    `json:"_links,omitempty"`
	Name      *string                                                             `json:"name,omitempty"`
	ProductID *string                                                             `json:"productId,omitempty"`
}

type SettingValueModelHaljsonEmbeddedEnvironmentEmbedded struct {
	Product *SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct `json:"product,omitempty"`
}

type SettingValueModelHaljsonEmbeddedEnvironmentLinks struct {
	Self *string `json:"self,omitempty"`
}

type SettingValueModelHaljsonEmbeddedEnvironment struct {
	Embedded      *SettingValueModelHaljsonEmbeddedEnvironmentEmbedded `json:"_embedded,omitempty"`
	Links         *SettingValueModelHaljsonEmbeddedEnvironmentLinks    `json:"_links,omitempty"`
	EnvironmentID *string                                              `json:"environmentId,omitempty"`
	Name          *string                                              `json:"name,omitempty"`
}

type SettingValueModelHaljsonEmbeddedIntegrationLinks struct {
	Description         *string                  `json:"description,omitempty"`
	IntegrationLinkType *IntegrationLinkTypeEnum `json:"integrationLinkType,omitempty"`
	Key                 *string                  `json:"key,omitempty"`
	URL                 *string                  `json:"url,omitempty"`
}

type SettingValueModelHaljsonEmbeddedSetting struct {
	CreatedAt           *time.Time       `json:"createdAt,omitempty"`
	CreatorEmail        *string          `json:"creatorEmail,omitempty"`
	CreatorFullName     *string          `json:"creatorFullName,omitempty"`
	ExpirationWarningAt *time.Time       `json:"expirationWarningAt,omitempty"`
	Hint                *string          `json:"hint,omitempty"`
	IsWatching          *bool            `json:"isWatching,omitempty"`
	Key                 *string          `json:"key,omitempty"`
	Name                *string          `json:"name,omitempty"`
	OwnerEmail          *string          `json:"ownerEmail,omitempty"`
	OwnerFullName       *string          `json:"ownerFullName,omitempty"`
	SettingID           *int32           `json:"settingId,omitempty"`
	SettingType         *SettingTypeEnum `json:"settingType,omitempty"`
}

type SettingValueModelHaljsonEmbeddedSettingTags struct {
	Color        *string `json:"color,omitempty"`
	Name         *string `json:"name,omitempty"`
	SettingTagID *int64  `json:"settingTagId,omitempty"`
	TagID        *int64  `json:"tagId,omitempty"`
}

type SettingValueModelHaljsonEmbedded struct {
	Config           *SettingValueModelHaljsonEmbeddedConfig            `json:"config,omitempty"`
	Environment      *SettingValueModelHaljsonEmbeddedEnvironment       `json:"environment,omitempty"`
	IntegrationLinks []SettingValueModelHaljsonEmbeddedIntegrationLinks `json:"integrationLinks,omitempty"`
	Setting          *SettingValueModelHaljsonEmbeddedSetting           `json:"setting,omitempty"`
	SettingTags      []SettingValueModelHaljsonEmbeddedSettingTags      `json:"settingTags,omitempty"`
}

type SettingValueModelHaljsonLinks struct {
	Self *string `json:"self,omitempty"`
}

type SettingValueModelHaljson struct {
	Embedded                *SettingValueModelHaljsonEmbedded `json:"_embedded,omitempty"`
	Links                   *SettingValueModelHaljsonLinks    `json:"_links,omitempty"`
	LastUpdaterUserEmail    *string                           `json:"lastUpdaterUserEmail,omitempty"`
	LastUpdaterUserFullName *string                           `json:"lastUpdaterUserFullName,omitempty"`
	ReadOnly                *bool                             `json:"readOnly,omitempty"`
	RolloutPercentageItems  []RolloutPercentageItemModel      `json:"rolloutPercentageItems,omitempty"`
	RolloutRules            []RolloutRuleModel                `json:"rolloutRules,omitempty"`
	UpdatedAt               *time.Time                        `json:"updatedAt,omitempty"`
	Value                   map[string]interface{}            `json:"value,omitempty"`
}
