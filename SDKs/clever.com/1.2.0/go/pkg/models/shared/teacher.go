package shared

type Teacher struct {
	Created       *string      `json:"created"`
	Credentials   *Credentials `json:"credentials"`
	District      *string      `json:"district"`
	Email         *string      `json:"email"`
	ID            *string      `json:"id"`
	LastModified  *string      `json:"last_modified"`
	Name          *Name        `json:"name"`
	School        *string      `json:"school"`
	Schools       []string     `json:"schools"`
	SisID         *string      `json:"sis_id"`
	StateID       *string      `json:"state_id"`
	TeacherNumber *string      `json:"teacher_number"`
	Title         *string      `json:"title"`
}
