import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartSupportDataExportResult
/** 
 * Container for the result of the StartSupportDataExport operation.
**/
export class StartSupportDataExportResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSetRequestId" })
  dataSetRequestId?: string;
}
