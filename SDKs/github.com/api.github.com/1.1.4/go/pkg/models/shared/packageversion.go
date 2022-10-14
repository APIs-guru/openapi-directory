package shared

import (
	"time"
)

type PackageVersionMetadataContainerContainerMetadata struct {
	Tags []interface{} `json:"tags"`
}

type PackageVersionMetadataDockerDockerMetadata struct {
	Tag []interface{} `json:"tag,omitempty"`
}

type PackageVersionMetadataPackageTypeEnum string

const (
	PackageVersionMetadataPackageTypeEnumNpm       PackageVersionMetadataPackageTypeEnum = "npm"
	PackageVersionMetadataPackageTypeEnumMaven     PackageVersionMetadataPackageTypeEnum = "maven"
	PackageVersionMetadataPackageTypeEnumRubygems  PackageVersionMetadataPackageTypeEnum = "rubygems"
	PackageVersionMetadataPackageTypeEnumDocker    PackageVersionMetadataPackageTypeEnum = "docker"
	PackageVersionMetadataPackageTypeEnumNuget     PackageVersionMetadataPackageTypeEnum = "nuget"
	PackageVersionMetadataPackageTypeEnumContainer PackageVersionMetadataPackageTypeEnum = "container"
)

type PackageVersionMetadataPackageVersionMetadata struct {
	Container   *PackageVersionMetadataContainerContainerMetadata `json:"container,omitempty"`
	Docker      *PackageVersionMetadataDockerDockerMetadata       `json:"docker,omitempty"`
	PackageType PackageVersionMetadataPackageTypeEnum             `json:"package_type"`
}

type PackageVersion struct {
	CreatedAt      time.Time                                     `json:"created_at"`
	DeletedAt      *time.Time                                    `json:"deleted_at,omitempty"`
	Description    *string                                       `json:"description,omitempty"`
	HTMLURL        *string                                       `json:"html_url,omitempty"`
	ID             int64                                         `json:"id"`
	License        *string                                       `json:"license,omitempty"`
	Metadata       *PackageVersionMetadataPackageVersionMetadata `json:"metadata,omitempty"`
	Name           string                                        `json:"name"`
	PackageHTMLURL string                                        `json:"package_html_url"`
	UpdatedAt      time.Time                                     `json:"updated_at"`
	URL            string                                        `json:"url"`
}
