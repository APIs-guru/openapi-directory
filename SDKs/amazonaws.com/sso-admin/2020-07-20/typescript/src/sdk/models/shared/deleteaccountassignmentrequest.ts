import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { TargetTypeEnum } from "./targettypeenum";



export class DeleteAccountAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalId" })
  principalId: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalType" })
  principalType: PrincipalTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetId" })
  targetId: string;

  @SpeakeasyMetadata({ data: "json, name=TargetType" })
  targetType: TargetTypeEnum;
}
