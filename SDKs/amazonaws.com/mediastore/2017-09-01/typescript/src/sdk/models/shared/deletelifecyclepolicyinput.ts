import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLifecyclePolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName: string;
}
