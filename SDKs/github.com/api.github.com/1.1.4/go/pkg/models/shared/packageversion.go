package shared

import (
	"time"
)

type PackageVersionPackageVersionMetadataContainerMetadata struct {
	Tags []interface{} `json:"tags"`
}

type PackageVersionPackageVersionMetadataDockerMetadata struct {
	Tag []interface{} `json:"tag,omitempty"`
}

type PackageVersionPackageVersionMetadataPackageTypeEnum string

const (
	PackageVersionPackageVersionMetadataPackageTypeEnumNpm       PackageVersionPackageVersionMetadataPackageTypeEnum = "npm"
	PackageVersionPackageVersionMetadataPackageTypeEnumMaven     PackageVersionPackageVersionMetadataPackageTypeEnum = "maven"
	PackageVersionPackageVersionMetadataPackageTypeEnumRubygems  PackageVersionPackageVersionMetadataPackageTypeEnum = "rubygems"
	PackageVersionPackageVersionMetadataPackageTypeEnumDocker    PackageVersionPackageVersionMetadataPackageTypeEnum = "docker"
	PackageVersionPackageVersionMetadataPackageTypeEnumNuget     PackageVersionPackageVersionMetadataPackageTypeEnum = "nuget"
	PackageVersionPackageVersionMetadataPackageTypeEnumContainer PackageVersionPackageVersionMetadataPackageTypeEnum = "container"
)

type PackageVersionPackageVersionMetadata struct {
	Container   *PackageVersionPackageVersionMetadataContainerMetadata `json:"container,omitempty"`
	Docker      *PackageVersionPackageVersionMetadataDockerMetadata    `json:"docker,omitempty"`
	PackageType PackageVersionPackageVersionMetadataPackageTypeEnum    `json:"package_type"`
}

// PackageVersion
// A version of a software package
type PackageVersion struct {
	CreatedAt      time.Time                             `json:"created_at"`
	DeletedAt      *time.Time                            `json:"deleted_at,omitempty"`
	Description    *string                               `json:"description,omitempty"`
	HTMLURL        *string                               `json:"html_url,omitempty"`
	ID             int64                                 `json:"id"`
	License        *string                               `json:"license,omitempty"`
	Metadata       *PackageVersionPackageVersionMetadata `json:"metadata,omitempty"`
	Name           string                                `json:"name"`
	PackageHTMLURL string                                `json:"package_html_url"`
	UpdatedAt      time.Time                             `json:"updated_at"`
	URL            string                                `json:"url"`
}
