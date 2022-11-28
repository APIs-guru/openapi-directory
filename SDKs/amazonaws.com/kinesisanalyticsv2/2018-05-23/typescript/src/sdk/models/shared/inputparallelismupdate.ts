import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputParallelismUpdate
/** 
 * For a SQL-based Kinesis Data Analytics application, provides updates to the parallelism count.
**/
export class InputParallelismUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CountUpdate" })
  countUpdate: number;
}
