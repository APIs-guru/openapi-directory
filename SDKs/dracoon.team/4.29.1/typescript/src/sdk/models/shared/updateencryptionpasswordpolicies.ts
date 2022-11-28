import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CharacterRules } from "./characterrules";



// UpdateEncryptionPasswordPolicies
/** 
 * Request model for updating encryption password policies
**/
export class UpdateEncryptionPasswordPolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=characterRules" })
  characterRules?: CharacterRules;

  @SpeakeasyMetadata({ data: "json, name=minLength" })
  minLength?: number;

  @SpeakeasyMetadata({ data: "json, name=rejectKeyboardPatterns" })
  rejectKeyboardPatterns?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rejectUserInfo" })
  rejectUserInfo?: boolean;
}
