import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobDetails
/** 
 * The number of documents successfully and unsuccessfully processed during a translation job.
**/
export class JobDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DocumentsWithErrorsCount" })
  documentsWithErrorsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=InputDocumentsCount" })
  inputDocumentsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TranslatedDocumentsCount" })
  translatedDocumentsCount?: number;
}
