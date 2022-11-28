import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLifecyclePolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName: string;
}
