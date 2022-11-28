import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Mitigation
/** 
 * The mitigation applied to a DDoS attack.
**/
export class Mitigation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MitigationName" })
  mitigationName?: string;
}
