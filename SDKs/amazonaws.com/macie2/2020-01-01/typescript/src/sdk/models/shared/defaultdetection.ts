import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Occurrences } from "./occurrences";



// DefaultDetection
/** 
 * Provides information about a type of sensitive data that was detected by a managed data identifier and produced a sensitive data finding.
**/
export class DefaultDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=occurrences" })
  occurrences?: Occurrences;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
