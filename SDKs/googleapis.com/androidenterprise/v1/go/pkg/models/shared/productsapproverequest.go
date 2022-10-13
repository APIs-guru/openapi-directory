package shared

type ProductsApproveRequestApprovedPermissionsEnum string

const (
	ProductsApproveRequestApprovedPermissionsEnumCurrentPermissionsOnly ProductsApproveRequestApprovedPermissionsEnum = "currentPermissionsOnly"
	ProductsApproveRequestApprovedPermissionsEnumAllPermissions         ProductsApproveRequestApprovedPermissionsEnum = "allPermissions"
)

type ProductsApproveRequest struct {
	ApprovalURLInfo     *ApprovalURLInfo                               `json:"approvalUrlInfo"`
	ApprovedPermissions *ProductsApproveRequestApprovedPermissionsEnum `json:"approvedPermissions"`
}
