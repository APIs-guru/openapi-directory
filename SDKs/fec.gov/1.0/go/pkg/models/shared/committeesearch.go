package shared

type CommitteeSearch struct {
	ID       *string `json:"id"`
	IsActive *bool   `json:"is_active"`
	Name     *string `json:"name"`
}
