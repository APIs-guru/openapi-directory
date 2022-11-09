import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteContainerPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName: string;
}
