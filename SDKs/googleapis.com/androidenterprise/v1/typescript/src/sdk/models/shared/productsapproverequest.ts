import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApprovalUrlInfo } from "./approvalurlinfo";


export enum ProductsApproveRequestApprovedPermissionsEnum {
    CurrentPermissionsOnly = "currentPermissionsOnly",
    AllPermissions = "allPermissions"
}


export class ProductsApproveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalUrlInfo" })
  approvalUrlInfo?: ApprovalUrlInfo;

  @SpeakeasyMetadata({ data: "json, name=approvedPermissions" })
  approvedPermissions?: ProductsApproveRequestApprovedPermissionsEnum;
}
