import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionSetProvisioningStatus } from "./permissionsetprovisioningstatus";



export class DescribePermissionSetProvisioningStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PermissionSetProvisioningStatus" })
  permissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
}
