import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusValuesEnum } from "./statusvaluesenum";



// PermissionSetProvisioningStatusMetadata
/** 
 * Provides information about the permission set provisioning status.
**/
export class PermissionSetProvisioningStatusMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=RequestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusValuesEnum;
}
