import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CharacterRules } from "./characterrules";
import { UserInfo } from "./userinfo";



// EncryptionPasswordPolicies
/** 
 * Encryption password policies
**/
export class EncryptionPasswordPolicies extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=characterRules" })
  characterRules?: CharacterRules;

  @SpeakeasyMetadata({ data: "json, name=minLength" })
  minLength?: number;

  @SpeakeasyMetadata({ data: "json, name=rejectKeyboardPatterns" })
  rejectKeyboardPatterns?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rejectUserInfo" })
  rejectUserInfo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy?: UserInfo;
}
