package shared

type BusinessAccount struct {
	Address         *Address `json:"address,omitempty"`
	DoingBusinessAs *string  `json:"doingBusinessAs,omitempty"`
	Email           *string  `json:"email,omitempty"`
	Name            *string  `json:"name,omitempty"`
	PrimaryContact  *Contact `json:"primaryContact,omitempty"`
	PrimaryPhone    *Phone   `json:"primaryPhone,omitempty"`
	SecondaryPhone  *Phone   `json:"secondaryPhone,omitempty"`
	Website         *string  `json:"website,omitempty"`
}
