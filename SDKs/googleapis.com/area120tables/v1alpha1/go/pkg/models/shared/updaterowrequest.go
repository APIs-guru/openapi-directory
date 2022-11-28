package shared

type UpdateRowRequestViewEnum string

const (
	UpdateRowRequestViewEnumViewUnspecified UpdateRowRequestViewEnum = "VIEW_UNSPECIFIED"
	UpdateRowRequestViewEnumColumnIDView    UpdateRowRequestViewEnum = "COLUMN_ID_VIEW"
)

// UpdateRowRequest
// Request message for TablesService.UpdateRow.
type UpdateRowRequest struct {
	Row        *Row                      `json:"row,omitempty"`
	UpdateMask *string                   `json:"updateMask,omitempty"`
	View       *UpdateRowRequestViewEnum `json:"view,omitempty"`
}
