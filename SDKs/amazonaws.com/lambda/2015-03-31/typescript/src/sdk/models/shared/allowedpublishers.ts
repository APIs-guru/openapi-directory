import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AllowedPublishers
/** 
 * List of signing profiles that can sign a code package. 
**/
export class AllowedPublishers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SigningProfileVersionArns" })
  signingProfileVersionArns: string[];
}
