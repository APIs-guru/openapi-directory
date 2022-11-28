package shared

type ProductApprovalEventApprovedEnum string

const (
	ProductApprovalEventApprovedEnumUnknown    ProductApprovalEventApprovedEnum = "unknown"
	ProductApprovalEventApprovedEnumApproved   ProductApprovalEventApprovedEnum = "approved"
	ProductApprovalEventApprovedEnumUnapproved ProductApprovalEventApprovedEnum = "unapproved"
)

// ProductApprovalEvent
// An event generated when a product's approval status is changed.
type ProductApprovalEvent struct {
	Approved  *ProductApprovalEventApprovedEnum `json:"approved,omitempty"`
	ProductID *string                           `json:"productId,omitempty"`
}
