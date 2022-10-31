package shared

type AwsEcrContainerImageDetails struct {
	Architecture     *string  `json:"Architecture,omitempty"`
	ImageDigest      *string  `json:"ImageDigest,omitempty"`
	ImagePublishedAt *string  `json:"ImagePublishedAt,omitempty"`
	ImageTags        []string `json:"ImageTags,omitempty"`
	RegistryID       *string  `json:"RegistryId,omitempty"`
	RepositoryName   *string  `json:"RepositoryName,omitempty"`
}
