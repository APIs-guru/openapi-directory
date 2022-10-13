package shared

type RepositoryFormatEnum string

const (
	RepositoryFormatEnumFormatUnspecified RepositoryFormatEnum = "FORMAT_UNSPECIFIED"
	RepositoryFormatEnumDocker            RepositoryFormatEnum = "DOCKER"
	RepositoryFormatEnumMaven             RepositoryFormatEnum = "MAVEN"
	RepositoryFormatEnumNpm               RepositoryFormatEnum = "NPM"
	RepositoryFormatEnumApt               RepositoryFormatEnum = "APT"
	RepositoryFormatEnumYum               RepositoryFormatEnum = "YUM"
	RepositoryFormatEnumPython            RepositoryFormatEnum = "PYTHON"
)

type Repository struct {
	CreateTime  *string                `json:"createTime"`
	Description *string                `json:"description"`
	Format      *RepositoryFormatEnum  `json:"format"`
	KmsKeyName  *string                `json:"kmsKeyName"`
	Labels      map[string]string      `json:"labels"`
	MavenConfig *MavenRepositoryConfig `json:"mavenConfig"`
	Name        *string                `json:"name"`
	SizeBytes   *string                `json:"sizeBytes"`
	UpdateTime  *string                `json:"updateTime"`
}
