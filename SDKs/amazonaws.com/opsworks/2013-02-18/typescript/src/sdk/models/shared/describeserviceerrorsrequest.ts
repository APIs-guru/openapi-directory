import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeServiceErrorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceErrorIds" })
  serviceErrorIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
