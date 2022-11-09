import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLifecyclePolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName: string;
}
