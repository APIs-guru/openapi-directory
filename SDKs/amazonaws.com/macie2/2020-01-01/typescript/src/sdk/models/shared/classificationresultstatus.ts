import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClassificationResultStatus
/** 
 * Provides information about the status of a sensitive data finding.
**/
export class ClassificationResultStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
