import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Statistics
/** 
 * Provides processing statistics for a classification job.
**/
export class Statistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approximateNumberOfObjectsToProcess" })
  approximateNumberOfObjectsToProcess?: number;

  @SpeakeasyMetadata({ data: "json, name=numberOfRuns" })
  numberOfRuns?: number;
}
