package shared

type PullRequestMinimalBaseRepo struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
	URL  string `json:"url"`
}

type PullRequestMinimalBase struct {
	Ref  string                     `json:"ref"`
	Repo PullRequestMinimalBaseRepo `json:"repo"`
	Sha  string                     `json:"sha"`
}

type PullRequestMinimalHeadRepo struct {
	ID   int64  `json:"id"`
	Name string `json:"name"`
	URL  string `json:"url"`
}

type PullRequestMinimalHead struct {
	Ref  string                     `json:"ref"`
	Repo PullRequestMinimalHeadRepo `json:"repo"`
	Sha  string                     `json:"sha"`
}

type PullRequestMinimal struct {
	Base   PullRequestMinimalBase `json:"base"`
	Head   PullRequestMinimalHead `json:"head"`
	ID     int64                  `json:"id"`
	Number int64                  `json:"number"`
	URL    string                 `json:"url"`
}
