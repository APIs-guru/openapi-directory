package shared

type ContentTreeLinks struct {
	Git  string
	HTML string
	Self string
}

type ContentTreeEntriesLinks struct {
	Git  string
	HTML string
	Self string
}

type ContentTreeEntries struct {
	Links       ContentTreeEntriesLinks
	Content     *string
	DownloadURL string
	GitURL      string
	HTMLURL     string
	Name        string
	Path        string
	Sha         string
	Size        int64
	Type        string
	URL         string
}

// ContentTree
// Content Tree
type ContentTree struct {
	Links       ContentTreeLinks
	DownloadURL string
	Entries     []ContentTreeEntries
	GitURL      string
	HTMLURL     string
	Name        string
	Path        string
	Sha         string
	Size        int64
	Type        string
	URL         string
}
