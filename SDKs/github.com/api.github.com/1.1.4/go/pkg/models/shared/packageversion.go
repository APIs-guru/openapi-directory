package shared

import (
	"time"
)

type PackageVersionMetadataContainerContainerMetadata struct {
	Tags []interface{} `json:"tags"`
}

type PackageVersionMetadataDockerDockerMetadata struct {
	Tag []interface{} `json:"tag"`
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
	Container   *PackageVersionMetadataContainerContainerMetadata `json:"container"`
	Docker      *PackageVersionMetadataDockerDockerMetadata       `json:"docker"`
	PackageType PackageVersionMetadataPackageTypeEnum             `json:"package_type"`
}

type PackageVersion struct {
	CreatedAt      time.Time                                     `json:"created_at"`
	DeletedAt      *time.Time                                    `json:"deleted_at"`
	Description    *string                                       `json:"description"`
	HTMLURL        *string                                       `json:"html_url"`
	ID             int64                                         `json:"id"`
	License        *string                                       `json:"license"`
	Metadata       *PackageVersionMetadataPackageVersionMetadata `json:"metadata"`
	Name           string                                        `json:"name"`
	PackageHTMLURL string                                        `json:"package_html_url"`
	UpdatedAt      time.Time                                     `json:"updated_at"`
	URL            string                                        `json:"url"`
}
