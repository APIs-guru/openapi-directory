import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusValuesEnum } from "./statusvaluesenum";



// PermissionSetProvisioningStatus
/** 
 * A structure that is used to provide the status of the provisioning operation for a specified permission set.
**/
export class PermissionSetProvisioningStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RequestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusValuesEnum;
}
