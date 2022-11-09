import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KycCheck } from "./kyccheck";


// KycResponse
/** 
 * This is the base response type of the getKYC method.
**/
export class KycResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kycChecks", elemType: shared.KycCheck })
  kycChecks?: KycCheck[];
}
