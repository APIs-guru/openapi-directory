import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeInstancesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceIds" })
  instanceIds?: string[];

  @Metadata({ data: "json, name=LayerId" })
  layerId?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
