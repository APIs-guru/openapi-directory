import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListOperationsRequest
/** 
 * The ListOperations request includes the following elements.
**/
export class ListOperationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxItems" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "json, name=SubmittedSince" })
  submittedSince?: Date;
}
