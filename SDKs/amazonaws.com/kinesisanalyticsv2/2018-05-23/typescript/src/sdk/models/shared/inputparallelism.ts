import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputParallelism
/** 
 * For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source. 
**/
export class InputParallelism extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;
}
