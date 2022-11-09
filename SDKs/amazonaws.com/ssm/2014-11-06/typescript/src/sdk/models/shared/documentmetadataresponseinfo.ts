import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DocumentReviewerResponseSource } from "./documentreviewerresponsesource";


// DocumentMetadataResponseInfo
/** 
 * Details about the response to a document review request.
**/
export class DocumentMetadataResponseInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReviewerResponse", elemType: shared.DocumentReviewerResponseSource })
  reviewerResponse?: DocumentReviewerResponseSource[];
}
