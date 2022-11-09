import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RecordActivityTaskHeartbeatInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=taskToken" })
  taskToken: string;
}
