import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CharacterRules } from "./characterrules";



// UpdateSharesPasswordPolicies
/** 
 * Request model for updating shares password policies
**/
export class UpdateSharesPasswordPolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=characterRules" })
  characterRules?: CharacterRules;

  @SpeakeasyMetadata({ data: "json, name=minLength" })
  minLength?: number;

  @SpeakeasyMetadata({ data: "json, name=rejectDictionaryWords" })
  rejectDictionaryWords?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rejectKeyboardPatterns" })
  rejectKeyboardPatterns?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rejectUserInfo" })
  rejectUserInfo?: boolean;
}
