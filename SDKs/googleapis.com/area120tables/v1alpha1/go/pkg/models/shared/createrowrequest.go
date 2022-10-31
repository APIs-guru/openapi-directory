package shared




type CreateRowRequestViewEnum string

const (
    CreateRowRequestViewEnumViewUnspecified CreateRowRequestViewEnum = "VIEW_UNSPECIFIED"
CreateRowRequestViewEnumColumnIDView CreateRowRequestViewEnum = "COLUMN_ID_VIEW"
)


type CreateRowRequest struct {
    Parent *string `json:"parent,omitempty"`
    Row *Row `json:"row,omitempty"`
    View *CreateRowRequestViewEnum `json:"view,omitempty"`
    
}

