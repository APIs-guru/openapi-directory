import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TopicPreference } from "./topicpreference";
import { TopicPreference } from "./topicpreference";


// Contact
/** 
 * A contact is the end-user who is receiving the email.
**/
export class Contact extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=LastUpdatedTimestamp" })
  lastUpdatedTimestamp?: Date;

  @Metadata({ data: "json, name=TopicDefaultPreferences", elemType: shared.TopicPreference })
  topicDefaultPreferences?: TopicPreference[];

  @Metadata({ data: "json, name=TopicPreferences", elemType: shared.TopicPreference })
  topicPreferences?: TopicPreference[];

  @Metadata({ data: "json, name=UnsubscribeAll" })
  unsubscribeAll?: boolean;
}
