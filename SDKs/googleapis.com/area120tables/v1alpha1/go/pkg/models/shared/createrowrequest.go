package shared

type CreateRowRequestViewEnum string

const (
	CreateRowRequestViewEnumViewUnspecified CreateRowRequestViewEnum = "VIEW_UNSPECIFIED"
	CreateRowRequestViewEnumColumnIDView    CreateRowRequestViewEnum = "COLUMN_ID_VIEW"
)

type CreateRowRequest struct {
	Parent *string                   `json:"parent"`
	Row    *Row                      `json:"row"`
	View   *CreateRowRequestViewEnum `json:"view"`
}
