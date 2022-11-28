import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartAccessLoggingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName: string;
}
