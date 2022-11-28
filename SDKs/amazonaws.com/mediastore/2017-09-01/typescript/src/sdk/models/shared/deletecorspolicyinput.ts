import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCorsPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName: string;
}
