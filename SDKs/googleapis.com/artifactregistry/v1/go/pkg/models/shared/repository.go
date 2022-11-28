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
	RepositoryFormatEnumKfp               RepositoryFormatEnum = "KFP"
)

// Repository
// A Repository for storing artifacts with a specific format.
type Repository struct {
	CreateTime   *string                `json:"createTime,omitempty"`
	Description  *string                `json:"description,omitempty"`
	Format       *RepositoryFormatEnum  `json:"format,omitempty"`
	KmsKeyName   *string                `json:"kmsKeyName,omitempty"`
	Labels       map[string]string      `json:"labels,omitempty"`
	MavenConfig  *MavenRepositoryConfig `json:"mavenConfig,omitempty"`
	Name         *string                `json:"name,omitempty"`
	SatisfiesPzs *bool                  `json:"satisfiesPzs,omitempty"`
	SizeBytes    *string                `json:"sizeBytes,omitempty"`
	UpdateTime   *string                `json:"updateTime,omitempty"`
}

// RepositoryInput
// A Repository for storing artifacts with a specific format.
type RepositoryInput struct {
	CreateTime  *string                `json:"createTime,omitempty"`
	Description *string                `json:"description,omitempty"`
	Format      *RepositoryFormatEnum  `json:"format,omitempty"`
	KmsKeyName  *string                `json:"kmsKeyName,omitempty"`
	Labels      map[string]string      `json:"labels,omitempty"`
	MavenConfig *MavenRepositoryConfig `json:"mavenConfig,omitempty"`
	Name        *string                `json:"name,omitempty"`
	UpdateTime  *string                `json:"updateTime,omitempty"`
}
