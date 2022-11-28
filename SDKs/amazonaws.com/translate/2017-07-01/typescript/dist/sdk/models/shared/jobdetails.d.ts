import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The number of documents successfully and unsuccessfully processed during a translation job.
**/
export declare class JobDetails extends SpeakeasyBase {
    documentsWithErrorsCount?: number;
    inputDocumentsCount?: number;
    translatedDocumentsCount?: number;
}
