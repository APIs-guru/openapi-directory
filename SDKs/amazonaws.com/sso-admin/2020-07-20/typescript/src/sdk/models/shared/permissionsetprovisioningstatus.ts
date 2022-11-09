import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusValuesEnum } from "./statusvaluesenum";


// PermissionSetProvisioningStatus
/** 
 * A structure that is used to provide the status of the provisioning operation for a specified permission set.
**/
export class PermissionSetProvisioningStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn?: string;

  @Metadata({ data: "json, name=RequestId" })
  requestId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusValuesEnum;
}
