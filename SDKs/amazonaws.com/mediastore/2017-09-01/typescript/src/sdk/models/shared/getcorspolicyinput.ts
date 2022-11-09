import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCorsPolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName: string;
}
