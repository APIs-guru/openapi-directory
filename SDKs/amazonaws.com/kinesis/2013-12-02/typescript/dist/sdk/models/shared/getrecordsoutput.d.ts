import { SpeakeasyBase } from "../../../internal/utils";
import { ChildShard } from "./childshard";
import { Record } from "./record";
/**
 * Represents the output for <a>GetRecords</a>.
**/
export declare class GetRecordsOutput extends SpeakeasyBase {
    childShards?: ChildShard[];
    millisBehindLatest?: number;
    nextShardIterator?: string;
    records: Record[];
}
