import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnalyticsDataimportDeleteUploadDataRequest
/** 
 * Request template for the delete upload data request.
**/
export class AnalyticsDataimportDeleteUploadDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customDataImportUids" })
  customDataImportUids?: string[];
}
