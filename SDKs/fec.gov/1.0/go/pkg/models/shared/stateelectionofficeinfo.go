package shared

type StateElectionOfficeInfo struct {
	AddressLine1         *string `json:"address_line1"`
	AddressLine2         *string `json:"address_line2"`
	City                 *string `json:"city"`
	Email                *string `json:"email"`
	FaxNumber            *string `json:"fax_number"`
	MailingAddress1      *string `json:"mailing_address1"`
	MailingAddress2      *string `json:"mailing_address2"`
	MailingCity          *string `json:"mailing_city"`
	MailingState         *string `json:"mailing_state"`
	MailingZipcode       *string `json:"mailing_zipcode"`
	OfficeName           *string `json:"office_name"`
	OfficeType           string  `json:"office_type"`
	PrimaryPhoneNumber   *string `json:"primary_phone_number"`
	SecondaryPhoneNumber *string `json:"secondary_phone_number"`
	State                string  `json:"state"`
	StateFullName        *string `json:"state_full_name"`
	WebsiteUrl1          *string `json:"website_url1"`
	WebsiteUrl2          *string `json:"website_url2"`
	ZipCode              *string `json:"zip_code"`
}
