import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserActivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityType" })
  activityType: string;

  @Metadata({ data: "json, name=persistentIdentifier" })
  persistentIdentifier?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=userInfo" })
  userInfo?: Map<string, any>;

  @Metadata({ data: "json, name=version" })
  version: string;
}
