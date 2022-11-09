import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CharacterRules } from "./characterrules";
import { UserInfo } from "./userinfo";


// SharesPasswordPolicies
/** 
 * Shares password policies
**/
export class SharesPasswordPolicies extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;
}
