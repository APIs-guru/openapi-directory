package shared

type WorkType struct {
	ID     *int32  `json:"Id"`
	Title  *string `json:"Title"`
	UserID *int32  `json:"UserId"`
}
