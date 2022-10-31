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
	CreateTime  *string               `json:"createTime,omitempty"`
	Description *string               `json:"description,omitempty"`
	Format      *RepositoryFormatEnum `json:"format,omitempty"`
	KmsKeyName  *string               `json:"kmsKeyName,omitempty"`
	Labels      map[string]string     `json:"labels,omitempty"`
	Name        *string               `json:"name,omitempty"`
	SizeBytes   *string               `json:"sizeBytes,omitempty"`
	UpdateTime  *string               `json:"updateTime,omitempty"`
}
