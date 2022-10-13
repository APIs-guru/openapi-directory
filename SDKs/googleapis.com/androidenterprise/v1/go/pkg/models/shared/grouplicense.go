package shared

type GroupLicenseAcquisitionKindEnum string

const (
	GroupLicenseAcquisitionKindEnumFree         GroupLicenseAcquisitionKindEnum = "free"
	GroupLicenseAcquisitionKindEnumBulkPurchase GroupLicenseAcquisitionKindEnum = "bulkPurchase"
)

type GroupLicenseApprovalEnum string

const (
	GroupLicenseApprovalEnumApproved   GroupLicenseApprovalEnum = "approved"
	GroupLicenseApprovalEnumUnapproved GroupLicenseApprovalEnum = "unapproved"
)

type GroupLicensePermissionsEnum string

const (
	GroupLicensePermissionsEnumCurrentApproved             GroupLicensePermissionsEnum = "currentApproved"
	GroupLicensePermissionsEnumNeedsReapproval             GroupLicensePermissionsEnum = "needsReapproval"
	GroupLicensePermissionsEnumAllCurrentAndFutureApproved GroupLicensePermissionsEnum = "allCurrentAndFutureApproved"
)

type GroupLicense struct {
	AcquisitionKind *GroupLicenseAcquisitionKindEnum `json:"acquisitionKind"`
	Approval        *GroupLicenseApprovalEnum        `json:"approval"`
	NumProvisioned  *int32                           `json:"numProvisioned"`
	NumPurchased    *int32                           `json:"numPurchased"`
	Permissions     *GroupLicensePermissionsEnum     `json:"permissions"`
	ProductID       *string                          `json:"productId"`
}
