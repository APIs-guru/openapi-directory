import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmailPreferences
/** 
 * Represents preferences for sending email notifications for transfer run events.
**/
export class EmailPreferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableFailureEmail" })
  enableFailureEmail?: boolean;
}
