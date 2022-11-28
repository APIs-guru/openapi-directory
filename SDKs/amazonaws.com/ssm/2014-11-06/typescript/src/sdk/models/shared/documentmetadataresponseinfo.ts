import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentReviewerResponseSource } from "./documentreviewerresponsesource";



// DocumentMetadataResponseInfo
/** 
 * Details about the response to a document review request.
**/
export class DocumentMetadataResponseInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReviewerResponse", elemType: DocumentReviewerResponseSource })
  reviewerResponse?: DocumentReviewerResponseSource[];
}
