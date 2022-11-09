import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { StatusValuesEnum } from "./statusvaluesenum";
import { TargetTypeEnum } from "./targettypeenum";


// AccountAssignmentOperationStatus
/** 
 * The status of the creation or deletion operation of an assignment that a principal needs to access an account.
**/
export class AccountAssignmentOperationStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn?: string;

  @Metadata({ data: "json, name=PrincipalId" })
  principalId?: string;

  @Metadata({ data: "json, name=PrincipalType" })
  principalType?: PrincipalTypeEnum;

  @Metadata({ data: "json, name=RequestId" })
  requestId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusValuesEnum;

  @Metadata({ data: "json, name=TargetId" })
  targetId?: string;

  @Metadata({ data: "json, name=TargetType" })
  targetType?: TargetTypeEnum;
}
