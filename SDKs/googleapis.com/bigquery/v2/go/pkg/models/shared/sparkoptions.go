package shared

type SparkOptions struct {
	ArchiveUris    []string          `json:"archiveUris"`
	Connection     *string           `json:"connection"`
	ContainerImage *string           `json:"containerImage"`
	FileUris       []string          `json:"fileUris"`
	JarUris        []string          `json:"jarUris"`
	MainFileURI    *string           `json:"mainFileUri"`
	Properties     map[string]string `json:"properties"`
	PyFileUris     []string          `json:"pyFileUris"`
	RuntimeVersion *string           `json:"runtimeVersion"`
}
