package shared

type StudentContact struct {
	District     *string `json:"district"`
	Email        *string `json:"email"`
	ID           *string `json:"id"`
	Name         *string `json:"name"`
	Phone        *string `json:"phone"`
	PhoneType    *string `json:"phone_type"`
	Relationship *string `json:"relationship"`
	SisID        *string `json:"sis_id"`
	Student      *string `json:"student"`
	Type         *string `json:"type"`
}
