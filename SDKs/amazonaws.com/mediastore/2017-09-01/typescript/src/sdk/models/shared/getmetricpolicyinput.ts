import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMetricPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName: string;
}
