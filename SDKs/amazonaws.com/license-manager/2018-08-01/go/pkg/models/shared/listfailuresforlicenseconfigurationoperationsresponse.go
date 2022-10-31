package shared

type ListFailuresForLicenseConfigurationOperationsResponse struct {
	LicenseOperationFailureList []LicenseOperationFailure `json:"LicenseOperationFailureList,omitempty"`
	NextToken                   *string                   `json:"NextToken,omitempty"`
}
