import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Issuer
/** 
 * Details about the issuer of a license.
**/
export class Issuer extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SignKey" })
  signKey?: string;
}
