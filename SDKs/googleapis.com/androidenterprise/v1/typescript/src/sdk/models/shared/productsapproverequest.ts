import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApprovalUrlInfo } from "./approvalurlinfo";

export enum ProductsApproveRequestApprovedPermissionsEnum {
    CurrentPermissionsOnly = "currentPermissionsOnly"
,    AllPermissions = "allPermissions"
}


export class ProductsApproveRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalUrlInfo" })
  approvalUrlInfo?: ApprovalUrlInfo;

  @Metadata({ data: "json, name=approvedPermissions" })
  approvedPermissions?: ProductsApproveRequestApprovedPermissionsEnum;
}
