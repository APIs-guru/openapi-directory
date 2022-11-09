import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AnalyticsDataimportDeleteUploadDataRequest
/** 
 * Request template for the delete upload data request.
**/
export class AnalyticsDataimportDeleteUploadDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customDataImportUids" })
  customDataImportUids?: string[];
}
