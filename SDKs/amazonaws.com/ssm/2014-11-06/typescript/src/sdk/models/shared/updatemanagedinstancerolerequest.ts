import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateManagedInstanceRoleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IamRole" })
  iamRole: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
