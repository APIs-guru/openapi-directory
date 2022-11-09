import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePermissionSetProvisioningStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @Metadata({ data: "json, name=ProvisionPermissionSetRequestId" })
  provisionPermissionSetRequestId: string;
}
