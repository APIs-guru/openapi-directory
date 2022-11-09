import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateManagedInstanceRoleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IamRole" })
  iamRole: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
