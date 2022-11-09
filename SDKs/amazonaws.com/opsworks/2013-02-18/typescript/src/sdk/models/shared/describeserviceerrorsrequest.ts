import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeServiceErrorsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=ServiceErrorIds" })
  serviceErrorIds?: string[];

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
