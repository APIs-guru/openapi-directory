import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CharacterRules } from "./characterrules";


// UpdateSharesPasswordPolicies
/** 
 * Request model for updating shares password policies
**/
export class UpdateSharesPasswordPolicies extends SpeakeasyBase {
  @Metadata({ data: "json, name=characterRules" })
  characterRules?: CharacterRules;

  @Metadata({ data: "json, name=minLength" })
  minLength?: number;

  @Metadata({ data: "json, name=rejectDictionaryWords" })
  rejectDictionaryWords?: boolean;

  @Metadata({ data: "json, name=rejectKeyboardPatterns" })
  rejectKeyboardPatterns?: boolean;

  @Metadata({ data: "json, name=rejectUserInfo" })
  rejectUserInfo?: boolean;
}
