import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLifecyclePolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName: string;
}
