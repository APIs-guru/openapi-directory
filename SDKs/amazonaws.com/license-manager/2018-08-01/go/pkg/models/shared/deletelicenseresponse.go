package shared

type DeleteLicenseResponse struct {
	DeletionDate *string                    `json:"DeletionDate"`
	Status       *LicenseDeletionStatusEnum `json:"Status"`
}
