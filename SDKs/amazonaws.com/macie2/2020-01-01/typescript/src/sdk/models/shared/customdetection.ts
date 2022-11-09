import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Occurrences } from "./occurrences";


// CustomDetection
/** 
 * Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding.
**/
export class CustomDetection extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=occurrences" })
  occurrences?: Occurrences;
}
