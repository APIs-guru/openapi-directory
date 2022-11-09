import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClassificationStatus
/** 
 * Provides details about the current status of the sensitive data detection.
**/
export class ClassificationStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Reason" })
  reason?: string;
}
