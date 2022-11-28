import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentReviews } from "./documentreviews";



export class UpdateDocumentMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentReviews" })
  documentReviews: DocumentReviews;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
