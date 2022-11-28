import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserActivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityType" })
  activityType: string;

  @SpeakeasyMetadata({ data: "json, name=persistentIdentifier" })
  persistentIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
