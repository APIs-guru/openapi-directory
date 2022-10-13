package shared

type PackageTypeEnum string

const (
	PackageTypeEnumNpm       PackageTypeEnum = "npm"
	PackageTypeEnumMaven     PackageTypeEnum = "maven"
	PackageTypeEnumRubygems  PackageTypeEnum = "rubygems"
	PackageTypeEnumDocker    PackageTypeEnum = "docker"
	PackageTypeEnumNuget     PackageTypeEnum = "nuget"
	PackageTypeEnumContainer PackageTypeEnum = "container"
)
