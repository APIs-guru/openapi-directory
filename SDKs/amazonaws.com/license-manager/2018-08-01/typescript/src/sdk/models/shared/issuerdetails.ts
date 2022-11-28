import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IssuerDetails
/** 
 * Details associated with the issuer of a license.
**/
export class IssuerDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyFingerprint" })
  keyFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SignKey" })
  signKey?: string;
}
