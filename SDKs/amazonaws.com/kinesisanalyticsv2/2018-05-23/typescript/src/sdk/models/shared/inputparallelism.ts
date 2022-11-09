import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InputParallelism
/** 
 * For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source. 
**/
export class InputParallelism extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;
}
