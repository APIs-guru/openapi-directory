import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Occurrences } from "./occurrences";


// DefaultDetection
/** 
 * Provides information about a type of sensitive data that was detected by a managed data identifier and produced a sensitive data finding.
**/
export class DefaultDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=occurrences" })
  occurrences?: Occurrences;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
