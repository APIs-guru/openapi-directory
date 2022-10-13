package shared

type StateElectionOfficeInfoPage struct {
	Pagination *OffsetInfo               `json:"pagination"`
	Results    []StateElectionOfficeInfo `json:"results"`
}
