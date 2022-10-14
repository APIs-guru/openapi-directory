package shared

type ListRobotsResponse struct {
	NextToken *string `json:"nextToken,omitempty"`
	Robots    []Robot `json:"robots,omitempty"`
}
