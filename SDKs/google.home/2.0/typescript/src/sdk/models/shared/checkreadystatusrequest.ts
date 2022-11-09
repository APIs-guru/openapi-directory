import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CheckReadyStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=play_ready_message" })
  playReadyMessage: boolean;

  @Metadata({ data: "json, name=user_id" })
  userId: string;
}
