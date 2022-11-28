import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeInstancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceIds" })
  instanceIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=LayerId" })
  layerId?: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
