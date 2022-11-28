import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeElasticIpsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Ips" })
  ips?: string[];

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}
