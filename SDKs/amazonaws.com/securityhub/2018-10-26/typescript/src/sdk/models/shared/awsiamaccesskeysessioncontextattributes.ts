import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsIamAccessKeySessionContextAttributes
/** 
 * Attributes of the session that the key was used for.
**/
export class AwsIamAccessKeySessionContextAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=MfaAuthenticated" })
  mfaAuthenticated?: boolean;
}
