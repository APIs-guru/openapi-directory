import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Occurrences } from "./occurrences";



// CustomDetection
/** 
 * Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding.
**/
export class CustomDetection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=occurrences" })
  occurrences?: Occurrences;
}
