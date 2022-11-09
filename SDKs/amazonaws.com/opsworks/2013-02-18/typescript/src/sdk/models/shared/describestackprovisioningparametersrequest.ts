import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeStackProvisioningParametersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=StackId" })
  stackId: string;
}
