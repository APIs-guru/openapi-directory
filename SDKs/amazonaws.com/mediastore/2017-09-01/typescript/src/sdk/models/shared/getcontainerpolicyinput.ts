import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainerPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName: string;
}
