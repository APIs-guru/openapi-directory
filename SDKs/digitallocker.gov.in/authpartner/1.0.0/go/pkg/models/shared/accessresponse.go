package shared

type AccessResponseEaadharEnum string

const (
	AccessResponseEaadharEnumY AccessResponseEaadharEnum = "Y"
	AccessResponseEaadharEnumN AccessResponseEaadharEnum = "N"
)

type AccessResponseGenderEnum string

const (
	AccessResponseGenderEnumM AccessResponseGenderEnum = "M"
	AccessResponseGenderEnumF AccessResponseGenderEnum = "F"
	AccessResponseGenderEnumT AccessResponseGenderEnum = "T"
)

type AccessResponse struct {
	AccessToken  string                    `json:"access_token"`
	DigilockerID string                    `json:"digilocker_id"`
	Dob          int64                     `json:"dob"`
	Eaadhar      AccessResponseEaadharEnum `json:"eaadhar"`
	ExpiresIn    int64                     `json:"expires_in"`
	Gender       AccessResponseGenderEnum  `json:"gender"`
	Name         string                    `json:"name"`
	ReferenceKey string                    `json:"reference_key"`
	RefreshToken string                    `json:"refresh_token"`
	Scope        string                    `json:"scope"`
	TokenType    string                    `json:"token_type"`
}
