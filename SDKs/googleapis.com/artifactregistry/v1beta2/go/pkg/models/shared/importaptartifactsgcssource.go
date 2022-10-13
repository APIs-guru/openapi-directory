package shared

type ImportAptArtifactsGcsSource struct {
	Uris         []string `json:"uris"`
	UseWildcards *bool    `json:"useWildcards"`
}
