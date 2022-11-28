import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeStackProvisioningParametersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId: string;
}
