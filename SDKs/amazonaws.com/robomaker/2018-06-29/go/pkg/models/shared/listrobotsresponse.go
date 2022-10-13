package shared

type ListRobotsResponse struct {
	NextToken *string `json:"nextToken"`
	Robots    []Robot `json:"robots"`
}
