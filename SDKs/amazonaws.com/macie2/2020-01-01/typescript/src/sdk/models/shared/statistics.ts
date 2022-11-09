import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Statistics
/** 
 * Provides processing statistics for a classification job.
**/
export class Statistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=approximateNumberOfObjectsToProcess" })
  approximateNumberOfObjectsToProcess?: number;

  @Metadata({ data: "json, name=numberOfRuns" })
  numberOfRuns?: number;
}
