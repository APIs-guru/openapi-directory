package shared

type SchoolAdmin struct {
	Credentials *Credentials `json:"credentials"`
	District    *string      `json:"district"`
	Email       *string      `json:"email"`
	ID          *string      `json:"id"`
	Name        *Name        `json:"name"`
	Schools     []string     `json:"schools"`
	StaffID     *string      `json:"staff_id"`
	Title       *string      `json:"title"`
}
