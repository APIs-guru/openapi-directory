import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePermissionSetProvisioningStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionPermissionSetRequestId" })
  provisionPermissionSetRequestId: string;
}
