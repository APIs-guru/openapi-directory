package shared

type StateElectionOfficeInfoPage struct {
	Pagination *OffsetInfo               `json:"pagination,omitempty"`
	Results    []StateElectionOfficeInfo `json:"results,omitempty"`
}
