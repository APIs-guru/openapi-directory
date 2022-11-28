import { SpeakeasyBase } from "../../../internal/utils";
import { ApprovalUrlInfo } from "./approvalurlinfo";
export declare enum ProductsApproveRequestApprovedPermissionsEnum {
    CurrentPermissionsOnly = "currentPermissionsOnly",
    AllPermissions = "allPermissions"
}
export declare class ProductsApproveRequest extends SpeakeasyBase {
    approvalUrlInfo?: ApprovalUrlInfo;
    approvedPermissions?: ProductsApproveRequestApprovedPermissionsEnum;
}
