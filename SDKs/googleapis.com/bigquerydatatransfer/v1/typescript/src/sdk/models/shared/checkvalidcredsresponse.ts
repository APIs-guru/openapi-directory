import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CheckValidCredsResponse
/** 
 * A response indicating whether the credentials exist and are valid.
**/
export class CheckValidCredsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasValidCreds" })
  hasValidCreds?: boolean;
}
