import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartAccessLoggingInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName: string;
}
