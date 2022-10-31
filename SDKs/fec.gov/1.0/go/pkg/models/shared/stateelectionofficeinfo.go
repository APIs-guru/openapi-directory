package shared



type StateElectionOfficeInfo struct {
    AddressLine1 *string `json:"address_line1,omitempty"`
    AddressLine2 *string `json:"address_line2,omitempty"`
    City *string `json:"city,omitempty"`
    Email *string `json:"email,omitempty"`
    FaxNumber *string `json:"fax_number,omitempty"`
    MailingAddress1 *string `json:"mailing_address1,omitempty"`
    MailingAddress2 *string `json:"mailing_address2,omitempty"`
    MailingCity *string `json:"mailing_city,omitempty"`
    MailingState *string `json:"mailing_state,omitempty"`
    MailingZipcode *string `json:"mailing_zipcode,omitempty"`
    OfficeName *string `json:"office_name,omitempty"`
    OfficeType string `json:"office_type"`
    PrimaryPhoneNumber *string `json:"primary_phone_number,omitempty"`
    SecondaryPhoneNumber *string `json:"secondary_phone_number,omitempty"`
    State string `json:"state"`
    StateFullName *string `json:"state_full_name,omitempty"`
    WebsiteUrl1 *string `json:"website_url1,omitempty"`
    WebsiteUrl2 *string `json:"website_url2,omitempty"`
    ZipCode *string `json:"zip_code,omitempty"`
    
}

