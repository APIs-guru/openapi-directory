import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InputParallelismUpdate
/** 
 * For a SQL-based Kinesis Data Analytics application, provides updates to the parallelism count.
**/
export class InputParallelismUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=CountUpdate" })
  countUpdate: number;
}
