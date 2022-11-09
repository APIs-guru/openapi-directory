import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChildShard } from "./childshard";
import { Record } from "./record";


// GetRecordsOutput
/** 
 * Represents the output for <a>GetRecords</a>.
**/
export class GetRecordsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChildShards", elemType: shared.ChildShard })
  childShards?: ChildShard[];

  @Metadata({ data: "json, name=MillisBehindLatest" })
  millisBehindLatest?: number;

  @Metadata({ data: "json, name=NextShardIterator" })
  nextShardIterator?: string;

  @Metadata({ data: "json, name=Records", elemType: shared.Record })
  records: Record[];
}
