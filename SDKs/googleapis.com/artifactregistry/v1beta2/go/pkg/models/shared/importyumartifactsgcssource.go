package shared

type ImportYumArtifactsGcsSource struct {
	Uris         []string `json:"uris"`
	UseWildcards *bool    `json:"useWildcards"`
}
