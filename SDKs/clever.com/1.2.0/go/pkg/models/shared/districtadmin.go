package shared

type DistrictAdmin struct {
	District *string `json:"district"`
	Email    *string `json:"email"`
	ID       *string `json:"id"`
	Name     *Name   `json:"name"`
	Title    *string `json:"title"`
}
