import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionSetProvisioningStatusMetadata } from "./permissionsetprovisioningstatusmetadata";



export class ListPermissionSetProvisioningStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionSetsProvisioningStatus", elemType: PermissionSetProvisioningStatusMetadata })
  permissionSetsProvisioningStatus?: PermissionSetProvisioningStatusMetadata[];
}
