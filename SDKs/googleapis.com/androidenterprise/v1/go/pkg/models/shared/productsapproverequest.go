package shared




type ProductsApproveRequestApprovedPermissionsEnum string

const (
    ProductsApproveRequestApprovedPermissionsEnumCurrentPermissionsOnly ProductsApproveRequestApprovedPermissionsEnum = "currentPermissionsOnly"
ProductsApproveRequestApprovedPermissionsEnumAllPermissions ProductsApproveRequestApprovedPermissionsEnum = "allPermissions"
)


type ProductsApproveRequest struct {
    ApprovalURLInfo *ApprovalURLInfo `json:"approvalUrlInfo,omitempty"`
    ApprovedPermissions *ProductsApproveRequestApprovedPermissionsEnum `json:"approvedPermissions,omitempty"`
    
}

