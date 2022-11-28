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

// GroupLicense
// Group license objects allow you to keep track of licenses (called entitlements) for both free and paid apps. For a free app, a group license is created when an enterprise admin first approves the product in Google Play or when the first entitlement for the product is created for a user via the API. For a paid app, a group license object is only created when an enterprise admin purchases the product in Google Play for the first time. Use the API to query group licenses. A Grouplicenses resource includes the total number of licenses purchased (paid apps only) and the total number of licenses currently in use. In other words, the total number of Entitlements that exist for the product. Only one group license object is created per product and group license objects are never deleted. If a product is unapproved, its group license remains. This allows enterprise admins to keep track of any remaining entitlements for the product.
type GroupLicense struct {
	AcquisitionKind *GroupLicenseAcquisitionKindEnum `json:"acquisitionKind,omitempty"`
	Approval        *GroupLicenseApprovalEnum        `json:"approval,omitempty"`
	NumProvisioned  *int32                           `json:"numProvisioned,omitempty"`
	NumPurchased    *int32                           `json:"numPurchased,omitempty"`
	Permissions     *GroupLicensePermissionsEnum     `json:"permissions,omitempty"`
	ProductID       *string                          `json:"productId,omitempty"`
}
