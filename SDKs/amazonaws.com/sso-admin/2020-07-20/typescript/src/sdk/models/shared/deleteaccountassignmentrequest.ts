import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrincipalTypeEnum } from "./principaltypeenum";
import { TargetTypeEnum } from "./targettypeenum";


export class DeleteAccountAssignmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @Metadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn: string;

  @Metadata({ data: "json, name=PrincipalId" })
  principalId: string;

  @Metadata({ data: "json, name=PrincipalType" })
  principalType: PrincipalTypeEnum;

  @Metadata({ data: "json, name=TargetId" })
  targetId: string;

  @Metadata({ data: "json, name=TargetType" })
  targetType: TargetTypeEnum;
}
