import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Adjustment } from "./adjustment";



// Cvss
/** 
 * CVSS scores from the advisory related to the vulnerability.
**/
export class Cvss extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Adjustments", elemType: Adjustment })
  adjustments?: Adjustment[];

  @SpeakeasyMetadata({ data: "json, name=BaseScore" })
  baseScore?: number;

  @SpeakeasyMetadata({ data: "json, name=BaseVector" })
  baseVector?: string;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
