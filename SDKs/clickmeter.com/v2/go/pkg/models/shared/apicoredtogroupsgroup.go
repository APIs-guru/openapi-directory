package shared

type APICoreDtoGroupsGroup struct {
	CreationDate  *string             `json:"creationDate"`
	Deleted       *bool               `json:"deleted"`
	ID            *int64              `json:"id"`
	IsPublic      *bool               `json:"isPublic"`
	Name          *string             `json:"name"`
	Notes         *string             `json:"notes"`
	Preferred     *bool               `json:"preferred"`
	RedirectOnly  *bool               `json:"redirectOnly"`
	Tags          []APICoreDtoTagsTag `json:"tags"`
	WritePermited *bool               `json:"writePermited"`
}
