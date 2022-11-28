import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutContainerPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName: string;

  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy: string;
}
