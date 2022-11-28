import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopAccessLoggingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName: string;
}
