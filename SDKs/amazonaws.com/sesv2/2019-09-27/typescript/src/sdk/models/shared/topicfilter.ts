import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TopicFilter
/** 
 * Used for filtering by a specific topic preference.
**/
export class TopicFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=TopicName" })
  topicName?: string;

  @Metadata({ data: "json, name=UseDefaultIfPreferenceUnavailable" })
  useDefaultIfPreferenceUnavailable?: boolean;
}
