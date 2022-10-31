package shared



type ElectioneeringPage struct {
    Pagination *SeekInfo `json:"pagination,omitempty"`
    Results []Electioneering `json:"results,omitempty"`
    
}

