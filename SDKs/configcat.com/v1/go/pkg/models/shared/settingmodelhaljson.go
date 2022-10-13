package shared

import (
	"time"
)

type SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks struct {
	Members  *string `json:"members"`
	Products *string `json:"products"`
}

type SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization struct {
	Links          *SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks `json:"_links"`
	Name           *string                                                                  `json:"name"`
	OrganizationID *string                                                                  `json:"organizationId"`
}

type SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded struct {
	Organization *SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization `json:"organization"`
}

type SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks struct {
	Configs          *string `json:"configs"`
	Environments     *string `json:"environments"`
	Members          *string `json:"members"`
	PermissionGroups *string `json:"permission-groups"`
	Self             *string `json:"self"`
	Tags             *string `json:"tags"`
}

type SettingModelHaljsonEmbeddedTagsEmbeddedProduct struct {
	Embedded  *SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded `json:"_embedded"`
	Links     *SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks    `json:"_links"`
	Name      *string                                                 `json:"name"`
	ProductID *string                                                 `json:"productId"`
}

type SettingModelHaljsonEmbeddedTagsEmbedded struct {
	Product *SettingModelHaljsonEmbeddedTagsEmbeddedProduct `json:"product"`
}

type SettingModelHaljsonEmbeddedTagsLinks struct {
	Self *string `json:"self"`
}

type SettingModelHaljsonEmbeddedTags struct {
	Embedded *SettingModelHaljsonEmbeddedTagsEmbedded `json:"_embedded"`
	Links    *SettingModelHaljsonEmbeddedTagsLinks    `json:"_links"`
	Color    *string                                  `json:"color"`
	Name     *string                                  `json:"name"`
	TagID    *int64                                   `json:"tagId"`
}

type SettingModelHaljsonEmbedded struct {
	Tags []SettingModelHaljsonEmbeddedTags `json:"tags"`
}

type SettingModelHaljsonLinks struct {
	Self *string `json:"self"`
}

type SettingModelHaljson struct {
	Embedded            *SettingModelHaljsonEmbedded `json:"_embedded"`
	Links               *SettingModelHaljsonLinks    `json:"_links"`
	ConfigID            *string                      `json:"configId"`
	ConfigName          *string                      `json:"configName"`
	ExpirationWarningAt *time.Time                   `json:"expirationWarningAt"`
	Hint                *string                      `json:"hint"`
	Key                 *string                      `json:"key"`
	Name                *string                      `json:"name"`
	OwnerUserEmail      *string                      `json:"ownerUserEmail"`
	OwnerUserFullName   *string                      `json:"ownerUserFullName"`
	SettingID           *int32                       `json:"settingId"`
	SettingType         *SettingTypeEnum             `json:"settingType"`
}
