import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobDetails
/** 
 * The number of documents successfully and unsuccessfully processed during a translation job.
**/
export class JobDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=DocumentsWithErrorsCount" })
  documentsWithErrorsCount?: number;

  @Metadata({ data: "json, name=InputDocumentsCount" })
  inputDocumentsCount?: number;

  @Metadata({ data: "json, name=TranslatedDocumentsCount" })
  translatedDocumentsCount?: number;
}
