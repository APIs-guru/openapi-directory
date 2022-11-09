import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CharacterRules } from "./characterrules";


// UpdateEncryptionPasswordPolicies
/** 
 * Request model for updating encryption password policies
**/
export class UpdateEncryptionPasswordPolicies extends SpeakeasyBase {
  @Metadata({ data: "json, name=characterRules" })
  characterRules?: CharacterRules;

  @Metadata({ data: "json, name=minLength" })
  minLength?: number;

  @Metadata({ data: "json, name=rejectKeyboardPatterns" })
  rejectKeyboardPatterns?: boolean;

  @Metadata({ data: "json, name=rejectUserInfo" })
  rejectUserInfo?: boolean;
}
