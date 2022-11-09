import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IssuerDetails
/** 
 * Details associated with the issuer of a license.
**/
export class IssuerDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyFingerprint" })
  keyFingerprint?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SignKey" })
  signKey?: string;
}
