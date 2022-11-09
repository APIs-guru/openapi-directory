import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClassificationResultStatus
/** 
 * Provides information about the status of a sensitive data finding.
**/
export class ClassificationResultStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
