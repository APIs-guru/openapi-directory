package shared

import (
	"time"
)

type SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks struct {
	Members  *string `json:"members,omitempty"`
	Products *string `json:"products,omitempty"`
}

type SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization struct {
	Links          *SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks `json:"_links,omitempty"`
	Name           *string                                                                  `json:"name,omitempty"`
	OrganizationID *string                                                                  `json:"organizationId,omitempty"`
}

type SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded struct {
	Organization *SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization `json:"organization,omitempty"`
}

type SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks struct {
	Configs          *string `json:"configs,omitempty"`
	Environments     *string `json:"environments,omitempty"`
	Members          *string `json:"members,omitempty"`
	PermissionGroups *string `json:"permission-groups,omitempty"`
	Self             *string `json:"self,omitempty"`
	Tags             *string `json:"tags,omitempty"`
}

type SettingModelHaljsonEmbeddedTagsEmbeddedProduct struct {
	Embedded  *SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded `json:"_embedded,omitempty"`
	Links     *SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks    `json:"_links,omitempty"`
	Name      *string                                                 `json:"name,omitempty"`
	ProductID *string                                                 `json:"productId,omitempty"`
}

type SettingModelHaljsonEmbeddedTagsEmbedded struct {
	Product *SettingModelHaljsonEmbeddedTagsEmbeddedProduct `json:"product,omitempty"`
}

type SettingModelHaljsonEmbeddedTagsLinks struct {
	Self *string `json:"self,omitempty"`
}

type SettingModelHaljsonEmbeddedTags struct {
	Embedded *SettingModelHaljsonEmbeddedTagsEmbedded `json:"_embedded,omitempty"`
	Links    *SettingModelHaljsonEmbeddedTagsLinks    `json:"_links,omitempty"`
	Color    *string                                  `json:"color,omitempty"`
	Name     *string                                  `json:"name,omitempty"`
	TagID    *int64                                   `json:"tagId,omitempty"`
}

type SettingModelHaljsonEmbedded struct {
	Tags []SettingModelHaljsonEmbeddedTags `json:"tags,omitempty"`
}

type SettingModelHaljsonLinks struct {
	Self *string `json:"self,omitempty"`
}

type SettingModelHaljson struct {
	Embedded            *SettingModelHaljsonEmbedded `json:"_embedded,omitempty"`
	Links               *SettingModelHaljsonLinks    `json:"_links,omitempty"`
	ConfigID            *string                      `json:"configId,omitempty"`
	ConfigName          *string                      `json:"configName,omitempty"`
	ExpirationWarningAt *time.Time                   `json:"expirationWarningAt,omitempty"`
	Hint                *string                      `json:"hint,omitempty"`
	Key                 *string                      `json:"key,omitempty"`
	Name                *string                      `json:"name,omitempty"`
	OwnerUserEmail      *string                      `json:"ownerUserEmail,omitempty"`
	OwnerUserFullName   *string                      `json:"ownerUserFullName,omitempty"`
	SettingID           *int32                       `json:"settingId,omitempty"`
	SettingType         *SettingTypeEnum             `json:"settingType,omitempty"`
}
