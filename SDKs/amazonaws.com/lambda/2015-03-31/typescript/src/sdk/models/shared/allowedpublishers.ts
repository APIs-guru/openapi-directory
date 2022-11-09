import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AllowedPublishers
/** 
 * List of signing profiles that can sign a code package. 
**/
export class AllowedPublishers extends SpeakeasyBase {
  @Metadata({ data: "json, name=SigningProfileVersionArns" })
  signingProfileVersionArns: string[];
}
