import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClassificationStatus
/** 
 * Provides details about the current status of the sensitive data detection.
**/
export class ClassificationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: string;
}
