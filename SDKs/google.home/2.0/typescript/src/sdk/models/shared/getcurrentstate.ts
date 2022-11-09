import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Getcurrentstate extends SpeakeasyBase {
  @Metadata({ data: "json, name=notifications_enabled" })
  notificationsEnabled: boolean;
}
