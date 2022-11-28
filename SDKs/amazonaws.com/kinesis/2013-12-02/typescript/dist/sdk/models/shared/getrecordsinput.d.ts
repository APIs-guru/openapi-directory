import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for <a>GetRecords</a>.
**/
export declare class GetRecordsInput extends SpeakeasyBase {
    limit?: number;
    shardIterator: string;
}
