import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmailPreferences
/** 
 * Represents preferences for sending email notifications for transfer run events.
**/
export class EmailPreferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableFailureEmail" })
  enableFailureEmail?: boolean;
}
