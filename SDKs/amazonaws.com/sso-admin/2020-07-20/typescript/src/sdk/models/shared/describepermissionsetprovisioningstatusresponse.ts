import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionSetProvisioningStatus } from "./permissionsetprovisioningstatus";


export class DescribePermissionSetProvisioningStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PermissionSetProvisioningStatus" })
  permissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
}
