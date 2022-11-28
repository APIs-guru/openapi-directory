import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Getcurrentstate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notifications_enabled" })
  notificationsEnabled: boolean;
}
