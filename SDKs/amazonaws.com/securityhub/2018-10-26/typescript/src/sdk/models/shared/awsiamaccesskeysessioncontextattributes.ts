import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsIamAccessKeySessionContextAttributes
/** 
 * Attributes of the session that the key was used for.
**/
export class AwsIamAccessKeySessionContextAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=MfaAuthenticated" })
  mfaAuthenticated?: boolean;
}
