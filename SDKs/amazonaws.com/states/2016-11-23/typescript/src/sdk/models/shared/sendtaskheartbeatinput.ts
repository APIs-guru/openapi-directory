import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendTaskHeartbeatInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskToken" })
  taskToken: string;
}
