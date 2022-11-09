import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMetricPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName: string;
}
