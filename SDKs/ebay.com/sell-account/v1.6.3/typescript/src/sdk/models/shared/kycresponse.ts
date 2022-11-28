import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KycCheck } from "./kyccheck";



// KycResponse
/** 
 * This is the base response type of the getKYC method.
**/
export class KycResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kycChecks", elemType: KycCheck })
  kycChecks?: KycCheck[];
}
