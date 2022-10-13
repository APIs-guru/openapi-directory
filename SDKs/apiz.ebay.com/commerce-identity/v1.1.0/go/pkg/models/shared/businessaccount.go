package shared

type BusinessAccount struct {
	Address         *Address `json:"address"`
	DoingBusinessAs *string  `json:"doingBusinessAs"`
	Email           *string  `json:"email"`
	Name            *string  `json:"name"`
	PrimaryContact  *Contact `json:"primaryContact"`
	PrimaryPhone    *Phone   `json:"primaryPhone"`
	SecondaryPhone  *Phone   `json:"secondaryPhone"`
	Website         *string  `json:"website"`
}
