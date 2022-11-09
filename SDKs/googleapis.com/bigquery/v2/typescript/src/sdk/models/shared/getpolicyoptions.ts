import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetPolicyOptions
/** 
 * Encapsulates settings provided to GetIamPolicy.
**/
export class GetPolicyOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestedPolicyVersion" })
  requestedPolicyVersion?: number;
}
