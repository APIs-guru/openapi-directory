import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteContainerPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName: string;
}
