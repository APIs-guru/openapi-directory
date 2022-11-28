import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Settings1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=control_notifications" })
  controlNotifications: number;
}
