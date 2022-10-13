package shared

type ProductApprovalEventApprovedEnum string

const (
	ProductApprovalEventApprovedEnumUnknown    ProductApprovalEventApprovedEnum = "unknown"
	ProductApprovalEventApprovedEnumApproved   ProductApprovalEventApprovedEnum = "approved"
	ProductApprovalEventApprovedEnumUnapproved ProductApprovalEventApprovedEnum = "unapproved"
)

type ProductApprovalEvent struct {
	Approved  *ProductApprovalEventApprovedEnum `json:"approved"`
	ProductID *string                           `json:"productId"`
}
