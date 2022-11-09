import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListOperationsRequest
/** 
 * The ListOperations request includes the following elements.
**/
export class ListOperationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=MaxItems" })
  maxItems?: number;

  @Metadata({ data: "json, name=SubmittedSince" })
  submittedSince?: Date;
}
