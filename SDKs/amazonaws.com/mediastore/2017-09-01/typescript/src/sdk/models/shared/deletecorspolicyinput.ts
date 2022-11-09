import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCorsPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName: string;
}
