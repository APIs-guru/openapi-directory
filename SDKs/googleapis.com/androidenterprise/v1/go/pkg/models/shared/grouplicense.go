package shared




type GroupLicenseAcquisitionKindEnum string

const (
    GroupLicenseAcquisitionKindEnumFree GroupLicenseAcquisitionKindEnum = "free"
GroupLicenseAcquisitionKindEnumBulkPurchase GroupLicenseAcquisitionKindEnum = "bulkPurchase"
)



type GroupLicenseApprovalEnum string

const (
    GroupLicenseApprovalEnumApproved GroupLicenseApprovalEnum = "approved"
GroupLicenseApprovalEnumUnapproved GroupLicenseApprovalEnum = "unapproved"
)



type GroupLicensePermissionsEnum string

const (
    GroupLicensePermissionsEnumCurrentApproved GroupLicensePermissionsEnum = "currentApproved"
GroupLicensePermissionsEnumNeedsReapproval GroupLicensePermissionsEnum = "needsReapproval"
GroupLicensePermissionsEnumAllCurrentAndFutureApproved GroupLicensePermissionsEnum = "allCurrentAndFutureApproved"
)


type GroupLicense struct {
    AcquisitionKind *GroupLicenseAcquisitionKindEnum `json:"acquisitionKind,omitempty"`
    Approval *GroupLicenseApprovalEnum `json:"approval,omitempty"`
    NumProvisioned *int32 `json:"numProvisioned,omitempty"`
    NumPurchased *int32 `json:"numPurchased,omitempty"`
    Permissions *GroupLicensePermissionsEnum `json:"permissions,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    
}

