import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GenerateDataSetResult
/** 
 * Container for the result of the GenerateDataSet operation.
**/
export class GenerateDataSetResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSetRequestId" })
  dataSetRequestId?: string;
}
