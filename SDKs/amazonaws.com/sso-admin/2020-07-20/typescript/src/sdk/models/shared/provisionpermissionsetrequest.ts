import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionTargetTypeEnum } from "./provisiontargettypeenum";



export class ProvisionPermissionSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn: string;

  @SpeakeasyMetadata({ data: "json, name=TargetId" })
  targetId?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetType" })
  targetType: ProvisionTargetTypeEnum;
}
