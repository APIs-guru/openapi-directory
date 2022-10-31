package shared

type SchoolAdmin struct {
	Credentials *Credentials `json:"credentials,omitempty"`
	District    *string      `json:"district,omitempty"`
	Email       *string      `json:"email,omitempty"`
	ID          *string      `json:"id,omitempty"`
	Name        *Name        `json:"name,omitempty"`
	Schools     []string     `json:"schools,omitempty"`
	StaffID     *string      `json:"staff_id,omitempty"`
	Title       *string      `json:"title,omitempty"`
}
