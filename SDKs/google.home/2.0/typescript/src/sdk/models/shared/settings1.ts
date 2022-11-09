import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Settings1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=control_notifications" })
  controlNotifications: number;
}
