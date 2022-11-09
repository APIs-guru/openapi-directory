import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisionTargetTypeEnum } from "./provisiontargettypeenum";


export class ProvisionPermissionSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @Metadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn: string;

  @Metadata({ data: "json, name=TargetId" })
  targetId?: string;

  @Metadata({ data: "json, name=TargetType" })
  targetType: ProvisionTargetTypeEnum;
}
