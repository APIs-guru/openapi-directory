import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCorsPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName: string;
}
