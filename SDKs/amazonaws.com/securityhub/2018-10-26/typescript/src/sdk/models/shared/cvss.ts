import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Adjustment } from "./adjustment";


// Cvss
/** 
 * CVSS scores from the advisory related to the vulnerability.
**/
export class Cvss extends SpeakeasyBase {
  @Metadata({ data: "json, name=Adjustments", elemType: shared.Adjustment })
  adjustments?: Adjustment[];

  @Metadata({ data: "json, name=BaseScore" })
  baseScore?: number;

  @Metadata({ data: "json, name=BaseVector" })
  baseVector?: string;

  @Metadata({ data: "json, name=Source" })
  source?: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
