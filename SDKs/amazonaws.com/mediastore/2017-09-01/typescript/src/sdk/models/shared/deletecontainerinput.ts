import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteContainerInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName: string;
}
