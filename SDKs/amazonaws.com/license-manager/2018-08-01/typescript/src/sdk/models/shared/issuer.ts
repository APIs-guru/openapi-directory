import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Issuer
/** 
 * Details about the issuer of a license.
**/
export class Issuer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SignKey" })
  signKey?: string;
}
