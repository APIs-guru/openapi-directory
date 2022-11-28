import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartSupportDataExportResult
/** 
 * Container for the result of the StartSupportDataExport operation.
**/
export class StartSupportDataExportResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSetRequestId" })
  dataSetRequestId?: string;
}
