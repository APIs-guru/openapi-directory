import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusValuesEnum } from "./statusvaluesenum";


// PermissionSetProvisioningStatusMetadata
/** 
 * Provides information about the permission set provisioning status.
**/
export class PermissionSetProvisioningStatusMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=RequestId" })
  requestId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusValuesEnum;
}
