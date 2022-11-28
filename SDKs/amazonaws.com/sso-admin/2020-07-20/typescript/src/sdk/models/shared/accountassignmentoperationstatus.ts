import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { StatusValuesEnum } from "./statusvaluesenum";
import { TargetTypeEnum } from "./targettypeenum";



// AccountAssignmentOperationStatus
/** 
 * The status of the creation or deletion operation of an assignment that a principal needs to access an account.
**/
export class AccountAssignmentOperationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalId" })
  principalId?: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalType" })
  principalType?: PrincipalTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=RequestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusValuesEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetId" })
  targetId?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetType" })
  targetType?: TargetTypeEnum;
}
