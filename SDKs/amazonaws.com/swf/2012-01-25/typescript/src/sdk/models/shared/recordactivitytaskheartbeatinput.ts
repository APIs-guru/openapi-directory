import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RecordActivityTaskHeartbeatInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=taskToken" })
  taskToken: string;
}
