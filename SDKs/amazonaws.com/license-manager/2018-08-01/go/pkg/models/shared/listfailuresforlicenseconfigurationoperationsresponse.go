package shared

type ListFailuresForLicenseConfigurationOperationsResponse struct {
	LicenseOperationFailureList []LicenseOperationFailure `json:"LicenseOperationFailureList"`
	NextToken                   *string                   `json:"NextToken"`
}
