import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePermissionSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @Metadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn: string;
}
