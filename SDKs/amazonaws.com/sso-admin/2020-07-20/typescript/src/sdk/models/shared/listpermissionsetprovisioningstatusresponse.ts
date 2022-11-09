import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PermissionSetProvisioningStatusMetadata } from "./permissionsetprovisioningstatusmetadata";


export class ListPermissionSetProvisioningStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PermissionSetsProvisioningStatus", elemType: shared.PermissionSetProvisioningStatusMetadata })
  permissionSetsProvisioningStatus?: PermissionSetProvisioningStatusMetadata[];
}
