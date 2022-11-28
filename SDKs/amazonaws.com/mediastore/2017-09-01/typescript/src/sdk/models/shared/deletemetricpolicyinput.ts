import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMetricPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName: string;
}
