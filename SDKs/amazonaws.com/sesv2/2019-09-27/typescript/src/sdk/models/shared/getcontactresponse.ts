import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TopicPreference } from "./topicpreference";



export class GetContactResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributesData" })
  attributesData?: string;

  @SpeakeasyMetadata({ data: "json, name=ContactListName" })
  contactListName?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedTimestamp" })
  createdTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=EmailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTimestamp" })
  lastUpdatedTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=TopicDefaultPreferences", elemType: TopicPreference })
  topicDefaultPreferences?: TopicPreference[];

  @SpeakeasyMetadata({ data: "json, name=TopicPreferences", elemType: TopicPreference })
  topicPreferences?: TopicPreference[];

  @SpeakeasyMetadata({ data: "json, name=UnsubscribeAll" })
  unsubscribeAll?: boolean;
}
