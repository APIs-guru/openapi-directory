import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentReviews } from "./documentreviews";
export declare class UpdateDocumentMetadataRequest extends SpeakeasyBase {
    documentReviews: DocumentReviews;
    documentVersion?: string;
    name: string;
}
