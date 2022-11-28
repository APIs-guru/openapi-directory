import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GenerateDataSetResult
/** 
 * Container for the result of the GenerateDataSet operation.
**/
export class GenerateDataSetResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSetRequestId" })
  dataSetRequestId?: string;
}
