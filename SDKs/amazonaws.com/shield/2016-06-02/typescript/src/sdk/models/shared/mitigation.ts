import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Mitigation
/** 
 * The mitigation applied to a DDoS attack.
**/
export class Mitigation extends SpeakeasyBase {
  @Metadata({ data: "json, name=MitigationName" })
  mitigationName?: string;
}
