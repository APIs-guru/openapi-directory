import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendTaskHeartbeatInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskToken" })
  taskToken: string;
}
