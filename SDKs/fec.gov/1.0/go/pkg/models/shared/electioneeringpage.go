package shared

type ElectioneeringPage struct {
	Pagination *SeekInfo        `json:"pagination"`
	Results    []Electioneering `json:"results"`
}
