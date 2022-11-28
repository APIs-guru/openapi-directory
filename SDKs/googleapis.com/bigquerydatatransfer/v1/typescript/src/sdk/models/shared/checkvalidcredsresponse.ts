import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CheckValidCredsResponse
/** 
 * A response indicating whether the credentials exist and are valid.
**/
export class CheckValidCredsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasValidCreds" })
  hasValidCreds?: boolean;
}
