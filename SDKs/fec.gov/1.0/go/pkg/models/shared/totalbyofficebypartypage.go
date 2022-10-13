package shared

type TotalByOfficeByPartyPage struct {
	Pagination *OffsetInfo            `json:"pagination"`
	Results    []TotalByOfficeByParty `json:"results"`
}
