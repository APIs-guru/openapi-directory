import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMetricPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName: string;
}
