import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentReviews } from "./documentreviews";


export class UpdateDocumentMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentReviews" })
  documentReviews: DocumentReviews;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
