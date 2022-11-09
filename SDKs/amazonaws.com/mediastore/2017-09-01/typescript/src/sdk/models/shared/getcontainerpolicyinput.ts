import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainerPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName: string;
}
