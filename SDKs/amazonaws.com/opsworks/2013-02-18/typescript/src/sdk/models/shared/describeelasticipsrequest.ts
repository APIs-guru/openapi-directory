import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeElasticIpsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=Ips" })
  ips?: string[];

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}
