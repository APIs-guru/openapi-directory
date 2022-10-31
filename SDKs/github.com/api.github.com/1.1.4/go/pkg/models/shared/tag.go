package shared

type TagCommit struct {
	Sha string `json:"sha"`
	URL string `json:"url"`
}

type Tag struct {
	Commit     TagCommit `json:"commit"`
	Name       string    `json:"name"`
	NodeID     string    `json:"node_id"`
	TarballURL string    `json:"tarball_url"`
	ZipballURL string    `json:"zipball_url"`
}
