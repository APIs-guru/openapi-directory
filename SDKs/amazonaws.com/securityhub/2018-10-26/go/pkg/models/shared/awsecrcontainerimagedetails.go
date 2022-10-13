package shared

type AwsEcrContainerImageDetails struct {
	Architecture     *string  `json:"Architecture"`
	ImageDigest      *string  `json:"ImageDigest"`
	ImagePublishedAt *string  `json:"ImagePublishedAt"`
	ImageTags        []string `json:"ImageTags"`
	RegistryID       *string  `json:"RegistryId"`
	RepositoryName   *string  `json:"RepositoryName"`
}
