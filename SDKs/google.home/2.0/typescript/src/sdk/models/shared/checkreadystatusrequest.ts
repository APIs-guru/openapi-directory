import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CheckReadyStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=play_ready_message" })
  playReadyMessage: boolean;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;
}
